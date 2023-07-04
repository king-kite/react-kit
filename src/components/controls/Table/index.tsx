import React from 'react';

import Actions from './Actions';
import Container from './DataContainer';
import Empty from './Empty';
import SplitActions from './SplitActions';
import TableActions from './TableActions';

import Badge from '../Badge';
import Checkbox from '../Checkbox';

import {
	GetSelectedValuesParamType,
	TableOptionsProps,
	TableProps,
} from './types';

const Table = ({
	actions,
	disabled,
	disabledClasses,
	emptyProps,
	getSelectedValues,
	heads,
	loading = false,
	options: propOptions,
	renderContainerLinkAs,
	renderActionLinkAs,
	rows,
	sn,
	split,
	tick,
	title,
	titleClasses = 'capitalize font-semibold mb-3 text-indigo-900 text-sm md:text-base',
}: TableProps) => {
	const [selected, setSelected] = React.useState<GetSelectedValuesParamType>(
		[]
	);

	const options = React.useMemo(() => {
		if (!propOptions) return defaultOptions;
		return {
			...defaultOptions,
			...propOptions,
			heads: {
				...defaultOptions.heads,
				...propOptions.heads,
			},
			rows: {
				...defaultOptions.rows,
				...propOptions.rows,
			},
		};
	}, [propOptions]);

	const headerChecked = React.useMemo(() => {
		// checked if "all" is true, includes and excludes array are empty
		return (
			tick &&
			selected.length > 0 &&
			rows.length > 0 &&
			selected.length === rows.length &&
			// also check that the every selected item is present in the currently shown rows
			selected.every((item) => !!rows.find((row) => row.id === item))
		);
	}, [rows, selected, tick]);

	const handleSelectAll = React.useCallback(
		({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
			if (tick) {
				if (checked && rows.length > 0) {
					const values = rows.map((row) => row.id);
					setSelected(values);
				} else setSelected([]);
			}
		},
		[rows, tick]
	);

	const handleSelectChange = React.useCallback(
		(id: string, checked: boolean) => {
			setSelected((prevState) => {
				// if 'checked' is false and is in the array, remove id
				if (checked === false && prevState.includes(id))
					return prevState.filter((value) => value !== id);
				// if 'checked' and is not in the array, add id
				else if (checked && !prevState.includes(id)) return [...prevState, id];
				// if above conditions fail, return the previous state
				return prevState;
			});
		},
		[tick]
	);

	React.useEffect(() => {
		if (tick && getSelectedValues) getSelectedValues(selected);
	}, [tick, getSelectedValues, selected]);

	return (
		<React.Fragment>
			{title && <h4 className={titleClasses}>{title}</h4>}
			{actions && <TableActions {...actions} selected={selected} />}
			{split && <SplitActions {...split} />}
			<div
				className={`bg-white overflow-x-scroll relative ${
					options?.heads?.rounded || 'rounded'
				} ${actions ? 'rounded-tl-none' : ''} w-full ${
					rows.length <= 0 ? 'overflow-y-hidden' : ''
				} ${options?.maxHeight || ''}`}
			>
				<table className="relative table table-auto w-full">
					<thead>
						<tr
							className={`${options?.heads?.bg || 'bg-gray-300'} ${
								options?.heads?.textAlign || 'text-center'
							} ${options?.heads?.textColor || 'text-indigo-900'} ${
								options?.heads?.textSize || 'text-sm'
							} ${options?.heads?.textForm || 'uppercase'}`}
						>
							{tick && (
								<th
									className={`bg-gray-300 w-[50px] ${
										options?.heads?.sticky ? 'sticky top-0 z-10' : ''
									}`}
								>
									<div
										className={`bg-gray-300 px-2 py-[0.75rem] w-[50px] ${
											options?.heads?.sticky ? 'sticky top-0 z-10' : ''
										}`}
									>
										<Checkbox
											labelStyle={{ maxWidth: '60px' }}
											centered
											margin=""
											checked={headerChecked}
											onChange={handleSelectAll}
											required={false}
										/>
									</div>
								</th>
							)}
							{sn !== undefined && (
								<th
									className={`bg-gray-300 w-8 ${
										options?.heads?.sticky ? 'sticky top-0 z-10' : ''
									}`}
								>
									<div
										className={`bg-gray-300 py-2 w-8 ${
											options?.heads?.bold || 'font-semibold'
										} ${options?.heads?.sticky ? 'sticky top-0 z-10' : ''}`}
									>
										S/N
									</div>
								</th>
							)}
							{heads?.map(({ style, type, value }) => (
								<th
									key={value}
									className={`bg-gray-300 ${
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
									<div
										className={`bg-gray-300 py-2 w-full ${
											options?.heads?.bold || 'font-semibold'
										} ${options?.heads?.sticky ? 'sticky top-0 z-10' : ''}`}
										style={{
											minWidth:
												value?.length > 10
													? '130px'
													: value?.length > 8
													? '100px'
													: '70px',
											// maxWidth: type === 'actions' ? '160px' : '',
											...style,
										}}
									>
										{value}
									</div>
								</th>
							))}
						</tr>
					</thead>
					{loading === false && rows && rows.length > 0 && (
						<tbody>
							{rows.map((data, index) => {
								const rowData = data.rows;

								// if rowData is not an array rather an object with id and rows
								let checked = false;
								if (tick && selected.includes(data.id)) checked = true;

								return (
									<tr
										key={index + 1}
										className={`${
											options?.rows?.bold ? 'font-bold' : 'font-normal'
										} leading-5 text-gray-600 text-sm ${
											options?.rows?.textForm || 'uppercase'
										} ${
											options?.rows?.hover
												? options?.rows?.hoverClasses ||
												  'hover:bg-gray-100 hover:even:bg-gray-300 cursor-pointer'
												: ''
										} bg-white even:bg-gray-200`}
										onClick={(e) => {
											if (data?.onClick)
												data.onClick(e, { id: data.id, rows: data.rows });
										}}
									>
										{tick && (
											<td className="relative w-[50px]">
												<Checkbox
													labelStyle={{
														maxWidth: '60px',
													}}
													centered
													margin=""
													name={data.id}
													checked={checked}
													onChange={(e) =>
														tick
															? handleSelectChange(data.id, e.target.checked)
															: undefined
													}
													required={false}
												/>
											</td>
										)}
										{sn !== undefined && (
											<td className="relative text-center w-8">
												<Container renderAs={renderContainerLinkAs}>
													{typeof sn === 'number' ? sn + index + 1 : index + 1}
												</Container>
											</td>
										)}
										{rowData?.map((props, index: number) => {
											const {
												style,
												classes,
												icon: Icon,
												type,
												link,
												value,
												...itemProps
											} = props;
											const rowOptions = props?.options || {};

											return type === 'actions' ? (
												<Actions
													key={index + 1}
													renderLinkAs={renderActionLinkAs}
													actions={value}
													style={style}
												/>
											) : (
												<td
													key={index + 1}
													className={`${
														type === 'badge'
															? 'text-center'
															: options?.rows?.center === false || undefined
															? 'text-left'
															: 'text-center'
													} relative`}
													style={{
														minWidth: type === 'badge' ? '130px' : '',
														...style,
													}}
												>
													<Container
														classes={classes}
														link={link}
														renderAs={renderContainerLinkAs}
														{...itemProps}
													>
														{type === 'badge' ? (
															<Badge title={value} {...rowOptions} />
														) : type === 'icon' && Icon ? (
															<Icon {...rowOptions} />
														) : (
															value
														)}
													</Container>
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
				{disabled && (
					<div
						className={`${
							disabledClasses || 'bg-dark-transparent'
						} absolute h-full left-0 top-0 w-full`}
					/>
				)}
			</div>
		</React.Fragment>
	);
};

export const defaultOptions: TableOptionsProps = {
	heads: {
		bg: 'bg-gray-300',
		bold: 'font-semibold',
		rounded: 'rounded',
		sticky: true,
		textAlign: 'text-center',
		textColor: 'text-indigo-900',
		textForm: 'uppercase',
		textSize: 'text-sm',
	},
	maxHeight: 'max-h-[30.2rem]',
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
	tick: false,
};

export default Table;
