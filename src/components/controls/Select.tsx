import React, { forwardRef, Fragment, SelectHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
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
	icon?: IconType;
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
	value?: string | number;
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
			disabled,
			error,
			errorSize,
			extraClasses,
			focus,
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
			: 'text-primary-500';

		// const textColor = disabled ? 'text-white' : value ? color : 'text-gray-400';
		const textColor = disabled
			? value
				? 'text-white'
				: 'placeholder-white text-white'
			: `${color} ${placeholderColor}`;

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
					className={` ${bgColor} ${borderColor} ${rounded} ${bdr}  ${
						Icon ? 'flex items-center' : ''
					} relative w-full`}
				>
					{Icon && (
						<Icon
							className={`${iconBgColor} ${iconTextColor} ${iconClass} ${iconSize}`}
						/>
					)}
					<select
						className={`${extraClasses} ${textColor} ${padding} ${
							disabled ? 'cursor-not-allowed' : 'cursor-pointer'
						} ${textSize} ${rounded} ${focus} ${shadow} bg-transparent block pr-8 w-full`}
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
					<p
						className={`font-primary font-semibold italic mt-1 text-red-500 ${errorSize}`}
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
			</Fragment>
		);
	}
);

Select.defaultProps = {
	bg: 'bg-transparent',
	bdr: 'border',
	bdrColor: 'border-primary-500',
	color: 'text-gray-700',
	errorSize: 'text-xs',
	extraClasses: 'appearance-none leading-tight',
	focus: 'focus:bg-gray-100 focus:border-primary-300 focus:outline-none',
	iconColor: 'text-primary-500',
	iconSize: 'text-xs',
	iconClass: 'mx-2',
	labelSize: 'text-xs md:text-sm',
	multiple: false,
	padding: 'px-3 py-2',
	placeholderColor: 'text-gray-400',
	rounded: 'rounded',
	required: true,
	requiredColor: 'text-red-500',
	shadow: 'shadow-lg',
	textSize: 'text-xs md:text-sm',
};

export default Select;
