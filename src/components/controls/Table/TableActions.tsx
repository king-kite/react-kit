import React from 'react';

import { GetSelectedValuesParamType } from './types';
import SelectButton, { SelectButtonProps } from '../SelectButton';

const defaultSelectProps = {
	bdr: 'border',
	bdrColor: 'border-gray-400',
	bg: 'bg-white',
	placeholder: 'Perform an action...',
	rounded: 'rounded-none rounded-tl',
	required: false,
};

const defaultButtonProps = {
	bg: 'bg-gray-400 hover:bg-gray-500',
	caps: true,
	rounded: 'rounded-none rounded-tr',
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
	const [value, setValue] = React.useState('');

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
				if (value) {
					const action = actions.find((action) => action.value === value);
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
					...defaultSelectProps,
					...controls?.selectProps,
					onChange: (e) => {
						setValue(e.target.value);
					},
					value,
					options,
				}}
			/>
		</form>
	);
};

TableActions.displayName = 'TableActions';

export default TableActions;
