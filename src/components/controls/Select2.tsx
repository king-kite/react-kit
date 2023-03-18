import React, { forwardRef } from 'react';
import { FaCheck, FaChevronDown } from 'react-icons/fa';
import Badge, { BadgeProps } from './Badge';
import Button, { ButtonProps } from './Button';
import { useOutClick } from '../../hooks';

export type SelectProps = {
	bg?: string;
	badge?: BadgeProps;
	bdr?: string;
	bdrColor?: string;
	btn?: ButtonProps;
	closeOnClick?: boolean;
	color?: string;
	disabled?: boolean;
	divide?: string;
	divideColor?: string;
	error?: string;
	errorSize?: string;
	focus?: string;
	focusColor?: string;
	height?: string;
	icon?: (props: any) => JSX.Element;
	iconColor?: string;
	iconSize?: string;
	label?: string;
	labelColor?: string;
	labelSize?: string;
	imageSize?: string;
	multiple?: boolean;
	name?: string;
	onSelect: (e: { title: string; value: string }) => void;
	optionBgActive?: string;
	optionBgHover?: string;
	optionTextActive?: string;
	optionTextColor?: string;
	optionTextHover?: string;
	options: {
		icon?: (props: any) => JSX.Element;
		image?: string;
		title: string;
		value: string;
	}[];
	padding?: string;
	placeholder?: string;
	placeholderColor?: string;
	placeholderImage?: string;
	rounded?: string;
	required?: boolean;
	requiredColor?: string;
	requirements?: {
		classes?: string;
		color?: string;
		size?: string;
		value: string;
	}[];
	shadow?: string;
	textSize?: string;
	value: string | string[];
};

const getTitle = (
	options: { title: string; value: string }[],
	value: string | string[]
): string => {
	const titles: string[] = [];
	if (Array.isArray(value)) {
		value.forEach((val) => {
			const option = options.find((option) => option.value === val);
			if (option) titles.push(String(option.title));
		});
	} else {
		const option = options.find((option) => option.value === value);
		if (option) titles.push(String(option.title));
	}
	if (titles.length > 0) return titles.join(', ');
	return '';
};

const Select = forwardRef<HTMLDivElement | null, SelectProps>(
	(
		{
			badge,
			bdr,
			bdrColor,
			bg,
			btn,
			color,
			closeOnClick,
			disabled,
			divide,
			divideColor,
			error,
			errorSize,
			focus,
			focusColor,
			height,
			icon: Icon,
			iconColor,
			iconSize,
			imageSize,
			label,
			labelColor,
			labelSize,
			multiple,
			name,
			onSelect,
			optionBgActive,
			optionBgHover,
			optionTextActive,
			optionTextColor,
			optionTextHover,
			options,
			padding,
			placeholder,
			placeholderImage,
			placeholderColor,
			rounded,
			required,
			requiredColor,
			requirements,
			shadow,
			textSize,
			value,
		},
		containerRef
	) => {
		const bgColor = disabled ? 'bg-gray-500' : bg;

		const borderColor = disabled
			? 'border-transparent'
			: error
			? 'border-red-500'
			: bdrColor;

		const _labelColor = disabled
			? 'text-gray-500'
			: error
			? 'text-red-500'
			: labelColor
			? labelColor
			: 'text-gray-600';

		const { buttonRef, ref, setVisible, visible } =
			useOutClick<HTMLUListElement, HTMLButtonElement>();
		const iconTextColor = disabled ? 'text-white' : iconColor;

		// const textColor = disabled ? 'text-white' : value ? color : 'text-gray-400';
		const textColor = React.useMemo(() => {
			if (multiple) {
				const colour = disabled
					? Array.isArray(value) && value.length > 0
						? 'text-white'
						: 'placeholder-white text-white'
					: `${
							Array.isArray(value) && value.length > 0
								? color
								: placeholderColor
					  }`;
				return colour;
			}
			const colour = disabled
				? value
					? 'text-white'
					: 'placeholder-white text-white'
				: `${value ? color : placeholderColor}`;
			return colour;
		}, [color, disabled, multiple, placeholderColor, value]);

		const isAnArray = value ? Array.isArray(value) : false;

		const containsValue = value ? isAnArray && value.length > 0 && true : false;

		return (
			<div>
				{(label || badge || btn) && (
					<div className="flex items-center justify-between mb-2">
						{label && (
							<label
								className={`${_labelColor} ${labelSize} block font-semibold`}
								htmlFor={name}
							>
								{label}
								{required && (
									<span className={`${requiredColor || 'text-red-500'} mx-1`}>
										*
									</span>
								)}
							</label>
						)}
						{btn && (
							<div>
								<Button
									bold="normal"
									caps
									padding="p-2"
									titleSize="text-xs"
									type="button"
									{...btn}
								/>
							</div>
						)}
						{badge && (
							<div>
								<Badge {...badge} />
							</div>
						)}
					</div>
				)}
				<div ref={containerRef} className="mt-1 relative">
					<button
						ref={buttonRef}
						onClick={() => setVisible(!visible)}
						type="button"
						className={`${bgColor} ${
							disabled ? 'cursor-not-allowed' : 'cursor-pointer'
						} ${padding} ${bdr} ${borderColor} ${rounded} ${textSize} ${focus} ${focusColor} ${height} ${shadow} relative w-full`}
					>
						<span className="flex items-center">
							{Icon ? (
								<Icon className={`${iconTextColor} mr-2 ${iconSize}`} />
							) : (
								placeholderImage && (
									<img
										src={placeholderImage}
										alt=""
										className={`flex-shrink-0 ${imageSize} mr-3 rounded-full`}
									/>
								)
							)}

							<span className={`${textColor} block truncate`}>
								{containsValue ? getTitle(options, value) : placeholder}
							</span>
						</span>
						<span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<FaChevronDown className={`text-xs ${iconTextColor}`} />
						</span>
					</button>
					{error && (
						<p
							className={`font-semibold italic mt-1 text-red-500 ${errorSize}`}
						>
							{error}
						</p>
					)}
					{requirements &&
						Array.isArray(requirements) &&
						requirements.map(
							(
								{
									classes = 'font-semibold mt-1 px-1',
									color = 'text-gray-400',
									size = 'text-xs',
									value = '',
								},
								index
							) => (
								<p key={index} className={`${size} ${color} ${classes}`}>
									{value}
								</p>
							)
						)}
					{options && disabled === false && (
						<ul
							ref={ref}
							className={`${
								// visible ? "opacity-100 visible" : "opacity-0 invisible"
								visible ? 'opacity-100 visible' : 'hidden opacity-0 invisible'
							} ${rounded} ${textSize} ${divide} ${divideColor} absolute bg-white z-20 w-full shadow-lg transition ease-in duration-100 max-h-56 ring-1 ring-gray-400 ring-opacity-50 overflow-x-hidden overflow-y-auto focus:outline-none`}
						>
							{options.map(({ icon: OptionIcon, ...option }, index) => {
								const active =
									multiple && Array.isArray(value)
										? Boolean(
												value.find((item: string) => item === option.value)
										  )
										: option.value === value;

								return (
									<li
										key={index}
										className={`${
											active ? optionBgActive : bgColor
										} ${optionBgHover} ${
											active ? optionTextActive : optionTextColor
										} ${optionTextHover}
										cursor-pointer select-none relative py-2 pl-3 pr-9
									`}
										onClick={
											disabled === false
												? () => {
														if (onSelect)
															onSelect({
																title: option.title,
																value: option.value,
															});
														if (closeOnClick && multiple === false)
															setVisible(false);
												  }
												: undefined
										}
									>
										<div className="flex items-center">
											{OptionIcon ? (
												<OptionIcon
													className={`${iconTextColor} mx-2 ${iconSize}`}
												/>
											) : (
												option.image && (
													<img
														src={option.image}
														alt=""
														className={`flex-shrink-0 ${imageSize} rounded-full`}
													/>
												)
											)}

											<span className="font-normal ml-3 block truncate">
												{option.title}
											</span>
										</div>
										{active && (
											<span className="absolute inset-y-0 right-0 flex items-center pr-4">
												<FaCheck className="text-xs md:text-sm" />
											</span>
										)}
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</div>
		);
	}
);

Select.defaultProps = {
	bg: 'bg-transparent',
	bdr: 'border',
	bdrColor: 'border-gray-300',
	color: 'text-gray-700',
	closeOnClick: true,
	disabled: false,
	errorSize: 'text-xs',
	focus: 'focus:outline-none focus:ring-1',
	focusColor: '',
	height: 'min-h-[28px] md:min-h-[32px]',
	iconColor: 'text-indigo-900',
	iconSize: 'text-xs',
	labelSize: 'text-xs md:text-sm',
	imageSize: 'h-6 w-6',
	multiple: false,
	optionBgActive: 'bg-gray-300',
	optionBgHover: 'hover:bg-gray-100',
	optionTextActive: 'text-gray-700',
	optionTextColor: 'text-gray-900',
	optionTextHover: 'hover:text-gray-700',
	placeholderColor: 'text-gray-400',
	padding: 'pl-3 pr-10',
	rounded: 'rounded',
	required: true,
	requiredColor: 'text-red-500',
	shadow: 'shadow-lg',
	textSize: 'text-xs md:text-sm',
};

export default Select;
