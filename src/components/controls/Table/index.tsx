import React, {
	ChangeEvent,
	Fragment,
	useCallback,
	useEffect,
	useState,
} from 'react';

import Actions from './Actions';
import Container from './DataContainer';
import Empty from './Empty';

import Badge from '../Badge';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Select from '../Select';

import { RowBaseType, TableOptionsProps, TableProps } from './types';

const Table = ({
	heads,
	options,
	loading = false,
	renderContainerLinkAs,
	renderActionLinkAs,
	rows,
	split,
	sn,
	showTicks,
	getTickedValues,
	title,
	titleClasses = 'capitalize font-semibold mb-2 text-primary-500 text-sm md:text-base',
	emptyProps,
}: TableProps) => {
	const [tickAll, setTickAll] = useState(false);
	const [ticked, setTicked] = useState<string[]>([]);

	const handleTickAll = useCallback(
		({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
			if (showTicks) {
				setTickAll(checked);
				if (!checked) setTicked([]);
			}
		},
		[showTicks, tickAll]
	);

	const handleTickChange = useCallback(
		(id: string, checked: boolean) => {
			if (showTicks) {
				let newState: string[] = [];
				if (checked && !ticked.includes(id)) newState = [...ticked, id];
				else if (!checked && ticked.includes(id))
					newState = ticked.filter((value) => value !== id);

				setTicked(newState);
			}
		},
		[showTicks, ticked]
	);

	useEffect(() => {
		if (showTicks && getTickedValues) getTickedValues(tickAll ? 'all' : ticked);
	}, [showTicks, getTickedValues, tickAll, ticked]);

	return (
		<Fragment>
			{title && <h4 className={titleClasses}>{title}</h4>}
			{split && (
				<div
					className={`${
						split.length?.md ? split.length.md : 'md:grid-cols-4'
					} ${
						split.length?.lg ? split.length.lg : 'lg:grid-cols-6'
					} grid grid-cols-2 mt-1 w-full`}
				>
					{split.actions.map(({ active, onClick, title }) => (
						<div
							key={title}
							onClick={onClick}
							className={`
                ${
									active
										? 'bg-gray-200 text-primary-500'
										: 'bg-gray-100 text-gray-400'
								} cursor-pointer flex font-primary font-bold items-center justify-center px-4 py-2 text-center text-sm uppercase w-full hover:bg-gray-200 hover:text-primary-500
              `}
						>
							<p className="text-center">{title}</p>
						</div>
					))}
				</div>
			)}
			<div
				className={`bg-white overflow-x-scroll relative rounded w-full ${
					rows.length <= 0 ? 'overflow-y-hidden' : ''
				}`}
				style={{
					maxHeight: options?.maxHeight,
				}}
			>
				<table className="relative table table-auto w-full">
					<thead>
						<tr
							className={`${options?.heads?.bg || 'bg-gray-300'} ${
								options?.heads?.bold || 'font-extrabold'
							} ${options?.heads?.rounded || 'rounded-lg'} ${
								options?.heads?.textAlign || 'text-center'
							} ${options?.heads?.textColor || 'text-primary-500'} ${
								options?.heads?.textSize || 'text-sm'
							} ${options?.heads?.textForm || 'uppercase'}`}
						>
							{showTicks && (
								<th
									className="flex items-center justify-center px-2 py-[0.75rem]"
									style={{ minWidth: '16px', maxWidth: '60px' }}
								>
									<Checkbox
										labelStyle={{
											maxWidth: '60px',
										}}
										centered
										margin=""
										checked={tickAll}
										onChange={handleTickAll}
										required={false}
									/>
								</th>
							)}
							{sn && (
								<th
									className={`bg-gray-300 font-semibold py-2 ${
										options?.heads?.sticky ? 'sticky top-0 z-10' : ''
									}`}
									style={{ minWidth: '16px', maxWidth: '32px' }}
								>
									S/N
								</th>
							)}
							{heads?.map(({ style, type, value }) => (
								<th
									key={value}
									className={`bg-gray-300 font-semibold py-2 ${
										options?.heads?.sticky ? 'sticky top-0 z-10' : ''
									}`}
									style={{
										minWidth:
											value?.length > 10
												? '130px'
												: value?.length > 8
												? '100px'
												: '70px',
										maxWidth: type === 'actions' ? '160px' : '',
										...style,
									}}
								>
									{value}
								</th>
							))}
						</tr>
					</thead>
					{loading === false && rows && rows.length > 0 && (
						<tbody>
							{rows.map((data, index) => {
								const isAnArray = Array.isArray(data);

								if (showTicks) {
									if (isAnArray)
										throw new Error(
											'Since showTicks is true, rows must be an object containing an array of RowBaseType Objects and an id key'
										);
									else if ('id' in data === false)
										throw new Error('Value of row must have an id field/key');
								}

								const rowData: RowBaseType[] = isAnArray
									? data
									: 'rows' in data
									? data.rows
									: [];
								const rowTicked =
									tickAll ||
									(!isAnArray && 'id' in data && ticked.includes(data.id));

								return (
									<tr
										key={index + 1}
										className={`font-primary ${
											options?.rows?.bold ? 'font-bold' : 'font-normal'
										} leading-5 text-gray-600 text-sm ${
											options?.rows?.textForm || 'uppercase'
										} ${
											options?.rows?.hoverDefault
												? 'hover:bg-gray-100 hover:even:bg-gray-300 cursor-pointer'
												: options?.rows?.hoverClasses || ''
										} bg-white even:bg-gray-200`}
									>
										{showTicks && (
											<td style={{ minWidth: '16px', maxWidth: '60px' }}>
												<Checkbox
													labelStyle={{ maxWidth: '60px' }}
													centered
													margin=""
													name={!isAnArray ? data.id : ''}
													checked={rowTicked}
													onChange={(e) =>
														!isAnArray
															? handleTickChange(data.id, e.target.checked)
															: undefined
													}
													required={false}
												/>
											</td>
										)}
										{sn && (
											<td
												className="text-center"
												style={{ minWidth: '16px', maxWidth: '32px' }}
											>
												<Container renderAs={renderContainerLinkAs}>
													{index + 1}
												</Container>
											</td>
										)}
										{rowData?.map((props, index: number) => {
											const { style, classes, Icon, type, link, value } = props;
											const rowOptions = props?.options || {};

											return type === 'actions' ? (
												<Actions
													key={index + 1}
													renderLinkAs={renderActionLinkAs}
													actions={value}
													style={style}
												/>
											) : type === 'image' ? (
												<td
													key={index + 1}
													className="flex items-center justify-center relative"
												>
													<Container
														renderAs={renderContainerLinkAs}
														link={link}
													>
														<div
															style={{
																height: '30px',
																width: '30px',
																...style,
															}}
														>
															<img {...value} />
														</div>
													</Container>
												</td>
											) : type === 'switch' ? (
												<td
													key={index + 1}
													className="text-center"
													style={style}
												>
													<Container renderAs={renderContainerLinkAs}>
														<Checkbox
															required={false}
															{...rowOptions}
															value={value}
															key={index}
														/>
													</Container>
												</td>
											) : (
												<td
													key={index + 1}
													className={`${
														type === 'badge'
															? 'text-center'
															: options?.rows?.center === false || undefined
															? 'text-left'
															: 'text-center'
													}`}
													style={{
														minWidth: type === 'badge' ? '130px' : '',
														...style,
													}}
												>
													{type === 'badge' ? (
														<Container
															renderAs={renderContainerLinkAs}
															classes={classes}
															link={link}
														>
															<Badge title={value} {...rowOptions} />
														</Container>
													) : type === 'button' ? (
														<Container
															renderAs={renderContainerLinkAs}
															classes={classes}
														>
															<Button
																bg="bg-primary-600 hover:bg-primary-400"
																caps
																padding="px-4 py-1"
																title={value}
																{...rowOptions}
															/>
														</Container>
													) : type === 'icon' && Icon ? (
														<Container
															renderAs={renderContainerLinkAs}
															classes={classes}
															link={link}
														>
															<Icon {...rowOptions} />
														</Container>
													) : type === 'input' ? (
														<Container
															renderAs={renderContainerLinkAs}
															classes={classes}
														>
															<Input
																required={false}
																bdrColor="border-gray-300"
																value={value}
																{...rowOptions}
															/>
														</Container>
													) : type === 'select' ? (
														<Container
															renderAs={renderContainerLinkAs}
															classes={classes}
														>
															<Select
																required={false}
																bdrColor="border-gray-300"
																value={value}
																{...rowOptions}
															/>
														</Container>
													) : (
														<Container
															renderAs={renderContainerLinkAs}
															classes={classes}
															link={link}
														>
															{value}
														</Container>
													)}
												</td>
											);
										})}
									</tr>
								);
							})}
						</tbody>
					)}
				</table>
				{(rows === null || rows === undefined || rows.length <= 0) && (
					<Empty loading={loading || false} {...emptyProps} />
				)}
			</div>
		</Fragment>
	);
};

export const defaultOptions: TableOptionsProps = {
	heads: {
		bg: 'bg-gray-300',
		bold: 'font-extrabold',
		rounded: 'rounded-lg',
		sticky: true,
		textAlign: 'text-center',
		textColor: 'text-primary-500',
		textForm: 'uppercase',
		textSize: 'text-sm',
	},
	maxHeight: '30.2rem',
	rows: {
		bold: true,
		center: true,
		textForm: 'uppercase',
	},
};

Table.defaultProps = {
	options: defaultOptions,
	loading: false,
	sn: true,
	showTicks: false,
};

export default Table;
