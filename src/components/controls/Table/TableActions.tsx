import React from 'react';

import { GetSelectedValuesParamType } from './types';
import SelectButton, { SelectButtonProps } from '../SelectButton';

const defaultSelectProps = {
	bdr: 'border',
	bdrColor: 'border-gray-400',
	bg: 'bg-white',
	placeholder: 'Perform an action...',
	rounded: 'rounded-l-sm rounded-tl',
	required: false,
};

const defaultButtonProps = {
	bg: 'bg-gray-400 hover:bg-gray-500',
	caps: true,
	rounded: 'rounded-r-sm rounded-tr',
	title: 'Procced',
};

export type TableActionsProps = {
	actions: {
		title: string;
		value: string;
		onSubmit: (selected: GetSelectedValuesParamType) => void;
	}[];
	classes?: string;
	controls?: SelectButtonProps;
	selected: GetSelectedValuesParamType;
};

const TableActions = ({
	actions = [],
	classes = 'max-w-xs',
	controls,
	selected,
}: TableActionsProps) => {
	const selectRef = React.useRef<HTMLSelectElement>(null);

	const options = actions
		? actions.map((action) => ({
				title: action.title,
				value: action.value,
		  }))
		: [];

	return (
		<form
			className={classes}
			onSubmit={(e) => {
				e.preventDefault();
				if (selectRef.current !== null) {
					const action = actions.find(
						(action) => action.value === selectRef.current?.value
					);
					if (action) action.onSubmit(selected);
				}
			}}
		>
			<SelectButton
				buttonProps={{
					...defaultButtonProps,
					...controls?.buttonProps,
				}}
				selectProps={{
					color: 'text-gray-700,',
					placeholderColor: 'placeholder-gray-700 text-gray-700',
					...defaultSelectProps,
					...controls?.selectProps,
					options,
				}}
				ref={selectRef}
			/>
		</form>
	);
};

TableActions.displayName = 'TableActions';

export default TableActions;
