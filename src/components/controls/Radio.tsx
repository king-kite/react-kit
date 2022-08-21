import React, {
	forwardRef,
	Fragment,
	InputHTMLAttributes,
	useState,
} from 'react';
import Badge, { BadgeProps } from './Badge';
import Button, { ButtonProps } from './Button';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
	active?: boolean;
	activeColor?: string;

	badge?: BadgeProps;
	bg?: string;
	bdr?: string;
	bdrColor?: string;
	btn?: ButtonProps;
	color?: string;
	error?: string;
	errorSize?: string;

	helpText?: string;
	helpTextColor?: string;
	helpTextSize?: string;

	label?: string;
	labelColor?: string;
	labelSize?: string;

	padding?: string;

	requiredColor?: string;
	rounded?: string;

	titleSize?: string;
}

const Radio = forwardRef<HTMLInputElement | null, RadioProps>(
	(
		{
			active,
			activeColor,
			badge,
			bg,
			bdr,
			bdrColor,
			btn,
			color,
			disabled,
			error,
			errorSize,
			helpText,
			helpTextColor,
			helpTextSize,
			id,
			label,
			labelColor,
			labelSize,
			name,
			padding,
			required,
			rounded,
			requiredColor,
			title,
			titleSize,
			...props
		},
		ref
	) => {
		const [hovering, setHovering] = useState<boolean>(false);

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

		const textColor = disabled
			? 'text-white'
			: hovering || active
			? activeColor
			: color;

		const radioStyle = `${bgColor} ${bdr} ${borderColor} ${rounded} ${
			disabled ? 'cursor-not-allowed' : 'cursor-pointer'
		} ${padding} flex items-center shadow-lg w-full`;
		const labelStyle = `inline-block mx-3 ${textColor} ${titleSize}`;

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
				<label
					onMouseEnter={() => setHovering(true)}
					onMouseLeave={() => setHovering(false)}
					className={`${active ? 'bg-gray-400' : ''} ${radioStyle}`}
					htmlFor={id}
				>
					<input
						id={id}
						name={name}
						type="radio"
						required={required}
						ref={ref}
						{...props}
					/>
					<span className={labelStyle}>{title || label}</span>
				</label>
				{error && (
					<p
						className={`font-secondary font-semibold italic mt-1 text-red-500 ${errorSize}`}
					>
						{error}
					</p>
				)}
				{helpText && (
					<p
						className={`font-secondary font-semibold mt-1 px-1 ${helpTextColor} ${helpTextSize}`}
					>
						{helpText}
					</p>
				)}
			</Fragment>
		);
	}
);

Radio.defaultProps = {
	active: false,
	activeColor: 'text-primary-500',
	bg: 'bg-transparent hover:bg-gray-400',
	bdr: 'border',
	bdrColor: 'border-gray-400',
	color: 'text-gray-500',
	errorSize: 'text-xs',
	helpTextColor: 'text-gray-400',
	helpTextSize: 'text-xs',
	labelSize: 'text-xs md:text-sm',
	padding: 'p-4',
	required: true,
	requiredColor: 'text-red-500',
	rounded: 'rounded-md',
	titleSize: 'font-semibold text-xs md:text-sm',
};

export default Radio;
