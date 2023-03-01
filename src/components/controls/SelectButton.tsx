import React, { forwardRef } from 'react';
import Button, { ButtonProps } from './Button';
import Select, { SelectProps } from './Select';

export type SelectButtonProps = {
	buttonProps: ButtonProps;
	selectProps: SelectProps;
};

export const defaultButtonProps = {
	caps: true,
	padding: 'px-4 py-[0.53rem]',
	rounded: 'rounded-r-xl',
	titleSize: 'text-sm',
};
export const defaultSelectProps = {
	bg: 'bg-white',
	bdr: 'border',
	bdrColor: 'border-gray-300',
	rounded: 'rounded-l-lg',
	required: false,
	textSize: 'text-base',
};

const SelectButton = forwardRef<HTMLSelectElement | null, SelectButtonProps>(
	({ buttonProps, selectProps }, ref) => (
		<div className="flex items-end w-full">
			<div className="w-full">
				<Select {...defaultSelectProps} {...selectProps} ref={ref} />
			</div>
			<div>
				<Button {...defaultButtonProps} {...buttonProps} />
			</div>
		</div>
	)
);

export default SelectButton;
