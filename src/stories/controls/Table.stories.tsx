import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { FaPen } from 'react-icons/fa';

import { Table, TableHeadType, TableRowType } from '../../components';

export default {
	title: 'KiteReactKitComponentLibrary/Table',
	component: Table,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Table>;

const rowArgs: TableRowType[] = [
	[
		{ value: 'John' },
		{ value: 'Doe' },
		{ value: 'johndoe@gmail.com' },
		{ value: '28' },
		{ value: 'Male' },
		{ value: '12-08-2018' },
		{
			type: 'actions',
			value: [
				{
					color: 'primary',
					onClick: () => window.alert('Table Action that is not disabled'),
				},
				{
					color: 'primary',
					disabled: true,
					onClick: () => window.alert('Table action that is disabled'),
				},
				{
					color: 'primary',
					icon: FaPen,
					onClick: () => window.alert('Table action that is disabled'),
				},
			],
		},
	],
	[
		{ value: 'Jane' },
		{ value: 'Doe' },
		{ value: 'janedoe@gmail.com' },
		{ value: '22' },
		{ value: 'Female' },
		{ value: '02-02-2022' },
		{
			type: 'actions',
			value: [
				{
					color: 'primary',
					onClick: () => window.alert('Table Action that is not disabled'),
				},
				{
					color: 'primary',
					disabled: true,
					onClick: () => window.alert('Table action that is disabled'),
				},
				{
					color: 'primary',
					icon: FaPen,
					onClick: () => window.alert('Table action that is disabled'),
				},
			],
		},
	],
	[
		{ value: 'Mark' },
		{ value: 'Bill' },
		{ value: 'markbill@gmail.com' },
		{ value: '36' },
		{ value: 'Male' },
		{ value: '06-04-2016' },
		{
			type: 'actions',
			value: [
				{
					color: 'primary',
					onClick: () => window.alert('Table Action that is not disabled'),
				},
				{
					color: 'primary',
					disabled: true,
					onClick: () => window.alert('Table action that is disabled'),
				},
				{
					color: 'primary',
					icon: FaPen,
					onClick: () => window.alert('Table action that is disabled'),
				},
			],
		},
	],
	[
		{ value: 'Micheal' },
		{ value: 'Billy' },
		{ value: 'michealbilly@gmail.com' },
		{ value: '40' },
		{ value: 'Male' },
		{ value: '18-07-2022' },
		{
			type: 'actions',
			value: [
				{
					color: 'primary',
					onClick: () => window.alert('Table Action that is not disabled'),
				},
				{
					color: 'primary',
					disabled: true,
					onClick: () => window.alert('Table action that is disabled'),
				},
				{
					color: 'primary',
					icon: FaPen,
					onClick: () => window.alert('Table action that is disabled'),
				},
			],
		},
	],
	[
		{ value: 'Jennifer' },
		{ value: 'Watson' },
		{ value: 'jenniferwatson@gmail.com' },
		{ value: '28' },
		{ value: 'Female' },
		{ value: '29-11-2013' },
		{
			type: 'actions',
			value: [
				{
					color: 'primary',
					onClick: () => window.alert('Table Action that is not disabled'),
				},
				{
					color: 'primary',
					disabled: true,
					onClick: () => window.alert('Table action that is disabled'),
				},
				{
					color: 'primary',
					icon: FaPen,
					onClick: () => window.alert('Table action that is disabled'),
				},
			],
		},
	],
];
const headArgs: TableHeadType = [
	{ value: 'first name' },
	{ value: 'last name' },
	{ value: 'email' },
	{ value: 'age' },
	{ value: 'gender' },
	{ value: 'date' },
	{ type: 'actions', value: 'actions' },
];
const row2Args: TableRowType[] = [
	{
		id: '1',
		rows: [
			{ value: 'John' },
			{ value: 'Doe' },
			{ value: 'johndoe@gmail.com' },
			{ value: '28' },
			{ value: 'Male' },
			{ value: '12-08-2018' },
			{
				type: 'actions',
				value: [
					{
						color: 'primary',
						onClick: () => window.alert('Table Action that is not disabled'),
					},
					{
						color: 'primary',
						disabled: true,
						onClick: () => window.alert('Table action that is disabled'),
					},
					{
						color: 'primary',
						icon: FaPen,
						onClick: () => window.alert('Table action that is disabled'),
					},
				],
			},
		],
	},
	{
		id: '2',
		rows: [
			{ value: 'Jane' },
			{ value: 'Doe' },
			{ value: 'janedoe@gmail.com' },
			{ value: '22' },
			{ value: 'Female' },
			{ value: '02-02-2022' },
			{
				type: 'actions',
				value: [
					{
						color: 'primary',
						onClick: () => window.alert('Table Action that is not disabled'),
					},
					{
						color: 'primary',
						disabled: true,
						onClick: () => window.alert('Table action that is disabled'),
					},
					{
						color: 'primary',
						icon: FaPen,
						onClick: () => window.alert('Table action that is disabled'),
					},
				],
			},
		],
	},
	{
		id: '3',
		rows: [
			{ value: 'Mark' },
			{ value: 'Bill' },
			{ value: 'markbill@gmail.com' },
			{ value: '36' },
			{ value: 'Male' },
			{ value: '06-04-2016' },
			{
				type: 'actions',
				value: [
					{
						color: 'primary',
						onClick: () => window.alert('Table Action that is not disabled'),
					},
					{
						color: 'primary',
						disabled: true,
						onClick: () => window.alert('Table action that is disabled'),
					},
					{
						color: 'primary',
						icon: FaPen,
						onClick: () => window.alert('Table action that is disabled'),
					},
				],
			},
		],
	},
	{
		id: '4',
		rows: [
			{ value: 'Micheal' },
			{ value: 'Billy' },
			{ value: 'michealbilly@gmail.com' },
			{ value: '40' },
			{ value: 'Male' },
			{ value: '18-07-2022' },
			{
				type: 'actions',
				value: [
					{
						color: 'primary',
						onClick: () => window.alert('Table Action that is not disabled'),
					},
					{
						color: 'primary',
						disabled: true,
						onClick: () => window.alert('Table action that is disabled'),
					},
					{
						color: 'primary',
						icon: FaPen,
						onClick: () => window.alert('Table action that is disabled'),
					},
				],
			},
		],
	},
	{
		id: '5',
		rows: [
			{ value: 'Jennifer' },
			{ value: 'Watson' },
			{ value: 'jenniferwatson@gmail.com' },
			{ value: '28' },
			{ value: 'Female' },
			{ value: '29-11-2013' },
			{
				type: 'actions',
				value: [
					{
						color: 'primary',
						onClick: () => window.alert('Table Action that is not disabled'),
					},
					{
						color: 'primary',
						disabled: true,
						onClick: () => window.alert('Table action that is disabled'),
					},
					{
						color: 'primary',
						icon: FaPen,
						onClick: () => window.alert('Table action that is disabled'),
					},
				],
			},
		],
	},
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const KiteTickTable = Template.bind({});

KiteTickTable.args = {
	rows: row2Args,
	heads: headArgs,
	showTicks: true,
	getTickedValues: (values) => {
		console.log(
			'ALL :>> ',
			values.all,
			', INCLUDES :>> ',
			values.includes,
			', EXCLUDES :>> ',
			values.excludes
		);
	},
};

export const KiteTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteTable.args = {
	rows: rowArgs,
	heads: headArgs,
};
