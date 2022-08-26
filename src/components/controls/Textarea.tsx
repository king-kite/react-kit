import React, { forwardRef, Fragment, TextareaHTMLAttributes } from 'react';
import Badge, { BadgeProps } from './Badge';
import Button, { ButtonProps } from './Button';

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
	label?: string;
	labelColor?: string;
	labelSize?: string;
	padding?: string;
	placeholderColor?: string;
	rounded?: string;
	requiredColor?: string;
	requirements?: {
		classes?: string;
		color?: string;
		size?: string;
		value: string;
	}[];
	shadow?: string;
	textSize?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement | null, TextareaProps>(
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
			label,
			labelColor,
			labelSize,
			name,
			padding,
			placeholderColor,
			rounded,
			required,
			requiredColor,
			requirements,
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
			: bdrColor
			? bdrColor
			: 'border-primary-500';

		const _labelColor = disabled
			? 'text-gray-500'
			: error
			? 'text-red-500'
			: labelColor
			? labelColor
			: 'text-primary-500';

		// const textColor = disabled ? placeholderColor : color;
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
								className={`${_labelColor} block font-semibold ${labelSize}`}
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
				<div className={`${borderColor} ${bgColor} ${rounded} ${bdr} w-full`}>
					<textarea
						className={`${bgColor} ${extraClasses} ${padding} ${focus} ${shadow} ${textColor} ${textSize} w-full`}
						disabled={disabled}
						name={name}
						required={required}
						ref={ref}
						value={value}
						{...props}
					/>
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

Textarea.defaultProps = {
	bg: 'bg-transparent',
	bdr: 'border',
	color: 'text-gray-600',
	errorSize: 'text-xs',
	extraClasses: 'appearance-none leading-tight resize',
	focus: 'focus:outline-none focus:shadow-outline',
	labelSize: 'text-xs md:text-sm',
	padding: 'px-3 py-2',
	placeholderColor: 'placeholder-gray-400',
	required: true,
	requiredColor: 'text-red-500',
	rounded: 'rounded',
	shadow: 'shadow-lg',
	textSize: 'text-xs md:text-sm',
};

export default Textarea;
