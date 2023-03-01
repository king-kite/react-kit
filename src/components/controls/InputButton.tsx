import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './Button';
import Input, { InputProps } from './Input';

export type InputButtonProps = {
	buttonProps: ButtonProps;
	inputProps: InputProps;
	height?: string;
};

export const defaultButtonProps = {
	caps: true,
	// padding: 'px-4 py-[0.565rem]',
	containerClass: 'h-full',
	padding: 'px-4',
	rounded: 'rounded-r-xl',
	titleSize: 'text-sm',
};
export const defaultInputProps = {
	bg: 'bg-white',
	bdr: 'border',
	bdrColor: 'border-gray-300',
	height: 'h-full',
	padding: 'px-3',
	rounded: 'rounded-l-lg',
	required: false,
	textSize: 'text-base',
};

const InputButton = forwardRef<HTMLInputElement | null, InputButtonProps>(
	({ buttonProps, inputProps, height }, ref) => (
		<div className={`${height || 'h-[2.2rem]'} flex items-end w-full`}>
			<div className="h-full w-full">
				<Input {...defaultInputProps} {...inputProps} ref={ref} />
			</div>
			<div className="h-full">
				<Button {...defaultButtonProps} {...buttonProps} />
			</div>
		</div>
	)
);

export default InputButton;
