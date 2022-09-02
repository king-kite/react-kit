import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './Button';
import Input, { InputProps } from './Input';

export type InputButtonProps = {
	buttonProps: ButtonProps;
	inputProps: InputProps;
};

export const defaultButtonProps = {
	caps: true,
	padding: 'px-4 py-[0.475rem] sm:py-2 md:py-[0.475rem] lg:py-[0.485rem]',
	rounded: 'rounded-r-xl',
};
export const defaultInputProps = {
	bg: 'bg-white',
	bdr: 'border',
	bdrColor: 'border-primary-500',
	rounded: 'rounded-l-lg',
	required: false,
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
