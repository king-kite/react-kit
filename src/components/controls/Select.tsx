import React, { forwardRef, Fragment, SelectHTMLAttributes } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Badge, { BadgeProps } from './Badge';
import Button, { ButtonProps } from './Button';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	badge?: BadgeProps;
	bg?: string;
	bdr?: string;
	bdrColor?: string;
	btn?: ButtonProps;
	color?: string;
	error?: string;
	errorSize?: string;
	extraClasses?: string;
	focus?: string;
	height?: string;
	icon?: (props: any) => JSX.Element;
	iconColor?: string;
	iconClass?: string;
	iconSize?: string;
	label?: string;
	labelColor?: string;
	labelSize?: string;
	options: {
		title?: string;
		value?: string | number;
	}[];
	padding?: string;
	placeholder?: string;
	placeholderColor?: string;
	requiredColor?: string;
	requirements?: {
		classes?: string;
		color?: string;
		size?: string;
		value: string;
	}[];
	rounded?: string;
	shadow?: string;
	textSize?: string;
}

const Select = forwardRef<HTMLSelectElement | null, SelectProps>(
	(
		{
			badge,
			bg,
			bdr,
			bdrColor,
			btn,
			color,
			defaultValue,
			disabled,
			error,
			errorSize,
			extraClasses,
			focus,
			height,
			icon: Icon,
			iconColor,
			iconClass,
			iconSize,
			label,
			labelColor,
			labelSize,
			name,
			options,
			padding,
			placeholder,
			placeholderColor,
			required,
			requiredColor,
			requirements,
			rounded,
			shadow,
			textSize,
			value,
			...props
		},
		ref
	) => {
		const bgColor = disabled ? 'bg-gray-500' : bg;

		const borderColor = disabled
			? 'border-transparent'
			: error
			? 'border-red-500'
			: bdrColor;

		const iconBgColor = disabled ? bgColor : value ? 'bg-gray-100' : bgColor;
		const iconTextColor = disabled ? 'text-white' : iconColor;

		const _labelColor = disabled
			? 'text-gray-500'
			: error
			? 'text-red-500'
			: labelColor
			? labelColor
			: 'text-gray-600';

		const textColor = disabled
			? value || defaultValue
				? 'text-white'
				: 'placeholder-white text-white'
			: `${value || defaultValue ? color : placeholderColor}`;

		return (
			<Fragment>
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
				<div
					className={` ${bgColor} ${borderColor} ${rounded} ${bdr} ${height} ${shadow} relative w-full ${
						Icon ? 'flex items-center' : ''
					}`}
				>
					{Icon && (
						<Icon
							className={`${iconBgColor} ${iconTextColor} ${iconClass} ${iconSize}`}
						/>
					)}
					<select
						className={`${extraClasses} ${textColor} ${padding} ${
							disabled ? 'cursor-not-allowed' : 'cursor-pointer'
						} ${textSize} ${rounded} ${focus} bg-transparent block h-full pr-8 w-full`}
						defaultValue={defaultValue}
						disabled={disabled}
						name={name}
						value={value}
						required={required}
						ref={ref}
						{...props}
					>
						{placeholder && (
							<option className="cursor-pointer" value="">
								{placeholder}
							</option>
						)}
						{options?.map(({ title, value }) => (
							<option key={value} className="cursor-pointer" value={value}>
								{title}
							</option>
						))}
					</select>
					<div className="absolute flex inset-y-0 items-center pointer-events-none px-2 right-2 text-gray-700">
						<span className="text-xs">
							<FaChevronDown />
						</span>
					</div>
				</div>
				{error && (
					<p className={`font-semibold italic mt-1 text-red-500 ${errorSize}`}>
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
			</Fragment>
		);
	}
);

Select.defaultProps = {
	bg: 'bg-transparent',
	bdr: 'border',
	bdrColor: 'border-gray-300',
	color: 'text-gray-700',
	errorSize: 'text-xs',
	extraClasses: 'appearance-none leading-tight',
	focus: 'focus:bg-gray-100 focus:border-gray-500 focus:outline-none',
	height: '',
	iconColor: 'text-indigo-900',
	iconSize: 'text-xs',
	iconClass: 'mx-2',
	labelSize: 'text-xs md:text-sm',
	multiple: false,
	padding: 'px-3 py-2',
	placeholderColor: 'placeholder-gray-400 text-gray-400',
	rounded: 'rounded',
	required: true,
	requiredColor: 'text-red-500',
	shadow: 'shadow-lg',
	textSize: 'text-xs md:text-sm',
};

export default Select;
