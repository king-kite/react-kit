import React, { forwardRef, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface FileProps extends InputHTMLAttributes<HTMLInputElement> {
	bg?: string;
	bdr?: string;
	bdrColor?: string;
	error?: string;
	errorSize?: string;
	label?: string;
	icon?: IconType;
	iconColor?: string;
	iconSize?: string;
	labelColor?: string;
	labelSize?: string;
	padding?: string;
	requiredColor?: string;
	requirements?: {
		classes?: string;
		color?: string;
		size?: string;
		value: string;
	}[];
	rounded?: string;
	txtColor?: string;
	textSize?: string;
}

const File = forwardRef<HTMLInputElement | null, FileProps>(
	(
		{
			bg,
			bdr,
			bdrColor,
			disabled,
			error,
			errorSize,
			icon: Icon,
			iconColor,
			iconSize,
			label,
			labelColor,
			labelSize,
			padding,
			placeholder,
			required,
			requiredColor,
			requirements,
			rounded,
			txtColor,
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
			: bdrColor
			? bdrColor
			: 'border-transparent';

		const _labelColor = disabled
			? 'text-gray-500'
			: error
			? 'text-red-500'
			: labelColor;

		const iconTextColor = disabled ? 'text-white' : iconColor;

		const textColor = disabled
			? 'text-white'
			: txtColor
			? txtColor
			: 'text-white';

		return (
			<div className="w-full">
				{label && (
					<span
						className={`${_labelColor} block font-semibold mb-2 ${labelSize}`}
					>
						{label}
						{required && (
							<span className={`${requiredColor || 'text-red-500'} mx-1`}>
								*
							</span>
						)}
					</span>
				)}
				<div className={`${rounded} block shadow-lg w-full`}>
					<label
						className={`${padding} ${bdr} ${borderColor} ${rounded} ${bgColor} ${
							!disabled ? 'cursor-pointer' : ''
						} flex items-center justify-center`}
					>
						{Icon && (
							<Icon className={`${iconTextColor} block mx-2 ${iconSize}`} />
						)}
						<p className={`${textColor} block text-xs md:text-sm`}>
							{placeholder}
						</p>
						<input
							className="h-[1px] opacity-0 w-[1px]"
							disabled={disabled}
							ref={ref}
							required={required}
							type="file"
							{...props}
						/>
					</label>
				</div>
				{value && (
					<p
						className={`font-semibold italic mt-1 text-gray-600 ${textSize}`}
					>
						{String(value)}
					</p>
				)}
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
			</div>
		);
	}
);

File.defaultProps = {
	accept: '*',
	bg: 'bg-blue-600 hover:bg-blue-500',
	bdr: 'border',
	bdrColor: 'border-gray-300',
	errorSize: 'text-xs',
	iconColor: 'text-gray-100',
	iconSize: 'text-xs',
	labelColor: 'text-gray-600',
	labelSize: 'text-xs md:text-sm',
	padding: 'px-3 py-2',
	required: true,
	requiredColor: 'text-red-500',
	rounded: 'rounded',
	textSize: 'text-xs',
};

export default File;
