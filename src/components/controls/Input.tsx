import React, {
	forwardRef,
	InputHTMLAttributes,
	useCallback,
	useState,
} from 'react';
import { IconType } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Badge, { BadgeProps } from './Badge';
import Button, { ButtonProps } from './Button';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	badge?: BadgeProps;
	bg?: string;
	bdr?: string;
	bdrColor?: string;
	btn?: ButtonProps;
	color?: string;
	datalist?: {
		id: string;
		list: {
			id?: string;
			value: string;
		}[];
	};
	disabled?: boolean;
	error?: string;
	errorSize?: string;
	helpText?: string;
	helpTextColor?: string;
	helpTextSize?: string;
	icon?: IconType;
	iconColor?: string;
	iconClass?: string;
	iconSize?: string;
	label?: string;
	labelColor?: string;
	labelSize?: string;
	padding?: string;
	placeholderColor?: string;
	requiredColor?: string;
	rounded?: string;
	textSize?: string;
	type?: string;
}

const Input = forwardRef<HTMLInputElement | null, InputProps>(
	(
		{
			badge,
			bg,
			bdr,
			bdrColor,
			btn,
			color,
			datalist,
			disabled,
			error,
			errorSize,
			helpText,
			helpTextColor,
			helpTextSize,
			icon: Icon,
			iconColor,
			iconClass,
			iconSize,
			label,
			labelColor,
			labelSize,
			name,
			padding,
			placeholderColor,
			rounded,
			required,
			requiredColor,
			textSize,
			type,
			value,
			...props
		},
		ref
	) => {
		const [_type, setType] = useState<string>(type || 'text');

		const handlePasswordCheck = useCallback((): void => {
			if (_type === 'password') setType('text');
			else setType('password');
		}, [_type]);

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

		const iconTextColor = disabled ? 'text-white' : iconColor;

		const textColor = disabled
			? placeholderColor
			: type === 'date'
			? value === '' || value === null || value === undefined
				? 'text-gray-400'
				: color
			: color;

		return (
			<>
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
					className={`${borderColor} ${bgColor} ${rounded} ${bdr} flex items-center shadow-lg text-xs w-full`}
				>
					{Icon && (
						<span
							className={`${bgColor} ${iconTextColor} ${iconSize} ${iconClass}`}
						>
							<Icon className={`${iconTextColor} ${iconSize}`} />
						</span>
					)}
					<input
						className={`${bgColor} ${textColor} ${rounded} ${padding} ${
							_type === 'date' ? 'cursor-text' : ''
						} ${textSize} apperance-none leading-tight w-full focus:outline-none focus:shadow-outline`}
						disabled={disabled}
						name={name}
						ref={ref}
						required={required}
						type={_type}
						list={datalist?.id}
						value={value}
						{...props}
					/>
					{type === 'password' && (
						<span
							onClick={handlePasswordCheck}
							className={`${bgColor} cursor-pointer mr-2`}
						>
							{_type === 'password' ? (
								<FaEye className={iconTextColor + ' text-xs'} />
							) : (
								<FaEyeSlash className={iconTextColor + ' text-xs'} />
							)}
						</span>
					)}
				</div>
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
			</>
		);
	}
);

Input.defaultProps = {
	bg: 'bg-transparent',
	bdr: 'border',
	color: 'text-gray-600',
	errorSize: 'text-xs',
	helpTextColor: 'text-gray-400',
	helpTextSize: 'text-xs',
	iconColor: 'text-primary-500',
	iconClass: 'mx-2',
	iconSize: 'text-xs',
	labelSize: 'text-xs md:text-sm',
	padding: 'px-3 py-2',
	placeholderColor: 'placeholder-white text-white',
	required: true,
	requiredColor: 'text-red-500',
	rounded: 'rounded',
	textSize: 'text-xs md:text-sm',
	type: 'text',
};

export default Input;
