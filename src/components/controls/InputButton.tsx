import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './Button';
import Input, { InputProps } from './Input';

export type InputButtonProps = {
	buttonProps: ButtonProps;
	inputProps: InputProps;
};

export const defaultButtonProps = {
	caps: true,
	// padding: 'px-4 py-[0.565rem]',
	padding: 'px-4 py-[0.475rem]',
	rounded: 'rounded-r-xl',
	titleSize: 'text-sm',
};
export const defaultInputProps = {
	bg: 'bg-white',
	bdr: 'border',
	bdrColor: 'border-primary-500',
	rounded: 'rounded-l-lg',
	required: false,
	textSize: 'text-base',
};

const InputButton = forwardRef<HTMLInputElement | null, InputButtonProps>(
	({ buttonProps, inputProps }, ref) => (
		<div className="flex items-end w-full">
			<div className="w-full">
				<Input {...defaultInputProps} {...inputProps} ref={ref} />
			</div>
			<div>
				<Button {...defaultButtonProps} {...buttonProps} />
			</div>
		</div>
	)
);

export default InputButton;
