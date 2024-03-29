import React, {
	forwardRef,
	Fragment,
	InputHTMLAttributes,
	useCallback,
	useState,
} from 'react';
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
	padding?: string;
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
			padding,
			placeholderColor,
			required,
			requiredColor,
			requirements,
			rounded,
			shadow,
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
			: 'border-transparent';

		const _labelColor = disabled
			? 'text-gray-500'
			: error
			? 'text-red-500'
			: labelColor
			? labelColor
			: 'text-gray-600';

		const iconTextColor = disabled ? 'text-white' : iconColor;

		const textColor = disabled
			? value || defaultValue
				? 'text-white'
				: 'placeholder-white text-white'
			: type === 'date'
			? !!value && !!defaultValue
				? `text-gray-400 ${placeholderColor}`
				: `${color} ${placeholderColor}`
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
					className={`${borderColor} ${bgColor} ${rounded} ${bdr} ${shadow} flex ${height} items-center w-full`}
				>
					{Icon && (
						<span
							className={`${bgColor} ${iconTextColor} ${iconSize} ${iconClass}`}
						>
							<Icon className={`${iconTextColor} ${iconSize}`} />
						</span>
					)}
					<input
						className={`${bgColor} ${extraClasses} ${textColor} ${rounded} ${padding} ${
							_type === 'date' ? 'cursor-text' : ''
						} ${textSize} ${focus} h-full w-full`}
						defaultValue={defaultValue}
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
							className={`${bgColor} cursor-pointer mx-2`}
						>
							{_type === 'password' ? (
								<FaEye className={iconTextColor + ' text-xs'} />
							) : (
								<FaEyeSlash className={iconTextColor + ' text-xs'} />
							)}
						</span>
					)}
				</div>
				{datalist && (
					<datalist id={datalist.id}>
						{datalist.list?.map((item) => (
							<option id={item.id} value={item.value} />
						))}
					</datalist>
				)}
				{error && (
					<p
						className={`font-secondary font-semibold italic mt-1 text-red-500 ${errorSize}`}
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

Input.defaultProps = {
	bg: 'bg-transparent',
	bdr: 'border',
	bdrColor: 'border-gray-300',
	color: 'text-gray-600',
	errorSize: 'text-xs',
	extraClasses: 'appearance-none leading-tight',
	focus: 'focus:outline-none focus:shadow-outline',
	height: '',
	iconColor: 'text-indigo-900',
	iconClass: 'mx-2',
	iconSize: 'text-xs',
	labelSize: 'text-xs md:text-sm',
	padding: 'px-3 py-2',
	placeholderColor: 'placeholder-gray-400',
	required: true,
	requiredColor: 'text-red-500',
	rounded: 'rounded',
	shadow: 'shadow-lg',
	textSize: 'text-xs md:text-sm',
	type: 'text',
};

export default Input;
