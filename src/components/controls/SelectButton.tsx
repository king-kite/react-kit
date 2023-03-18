import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './Button';
import Select, { SelectProps } from './Select';

export type SelectButtonProps = {
	buttonProps: ButtonProps;
	selectProps: SelectProps;
	height?: string;
};

export const defaultButtonProps = {
	caps: true,
	containerClass: 'h-full',
	padding: 'px-4',
	rounded: 'rounded-r-xl',
	titleSize: 'text-sm',
};
export const defaultSelectProps = {
	bg: 'bg-white',
	bdr: 'border',
	height: 'h-full',
	padding: 'px-3',
	rounded: 'rounded-l-lg',
	required: false,
	textSize: 'text-base',
};

const SelectButton = forwardRef<HTMLSelectElement | null, SelectButtonProps>(
	({ buttonProps, height, selectProps }, ref) => (
		<div className={`${height || 'h-[2.2rem]'} flex items-end w-full`}>
			<div className="h-full w-full">
				<Select {...defaultSelectProps} {...selectProps} ref={ref} />
			</div>
			<div className="h-full">
				<Button {...defaultButtonProps} {...buttonProps} />
			</div>
		</div>
	)
);

export default SelectButton;
