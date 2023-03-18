import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { FaEye, FaPen } from 'react-icons/fa';

import { Table, TableHeadType, TableRowType } from '../../components';

export default {
	title: 'KiteReactKitComponentLibrary/Table',
	component: Table,
	parameters: {
		layout: 'fullscreen',
	},
} as ComponentMeta<typeof Table>;

const headArgs: TableHeadType = [
	{ value: 'first name' },
	{ value: 'last name' },
	{ value: 'email' },
	{ value: 'age' },
	{ value: 'gender' },
	{ value: 'date' },
	{ type: 'actions', value: 'actions' },
];
const rowArgs: TableRowType[] = [
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
const row2Args: TableRowType[] = [
	{
		id: '1',
		rows: [
			{ link: '#', value: 'John' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '2',
		rows: [
			{ link: '#', value: 'Jane' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '3',
		rows: [
			{ link: '#', value: 'Mark' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '4',
		rows: [
			{ link: '#', value: 'Micheal' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '5',
		rows: [
			{ link: '#', value: 'Jennifer' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '6',
		rows: [
			{ link: '#', value: 'Mark' },
			{ value: 'John' },
			{ value: 'markjohn@gmail.com' },
			{ value: '28' },
			{ value: 'Male' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '7',
		rows: [
			{ link: '#', value: 'Mary' },
			{ value: 'Bell' },
			{ value: 'marybell@gmail.com' },
			{ value: '50' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '8',
		rows: [
			{ link: '#', value: 'Jimmy' },
			{ value: 'Steveson' },
			{ value: 'jimmysteveson@gmail.com' },
			{ value: '15' },
			{ value: 'Male' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '9',
		rows: [
			{ link: '#', value: 'Jane' },
			{ value: 'Watson' },
			{ value: 'janewatson@gmail.com' },
			{ value: '90' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '10',
		rows: [
			{ link: '#', value: 'Mario' },
			{ value: 'Longman' },
			{ value: 'mariolongman@gmail.com' },
			{ value: '44' },
			{ value: 'Male' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '11',
		rows: [
			{ link: '#', value: 'Mariam' },
			{ value: 'White' },
			{ value: 'mariamwhite@gmail.com' },
			{ value: '23' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
	{
		id: '12',
		rows: [
			{ link: '#', value: 'John' },
			{ value: 'Watson' },
			{ value: 'johnwatson@gmail.com' },
			{ value: '36' },
			{ value: 'Male' },
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
					{
						color: 'secondary',
						icon: FaEye,
						link: '#',
					},
				],
			},
		],
	},
];
const row3Args: TableRowType[] = [
	...rowArgs.map((arg) => ({
		...arg,
		onClick(e: React.MouseEvent<HTMLTableRowElement>) {
			const targetName = (
				e.target as HTMLTableRowElement
			).tagName.toLowerCase();
			switch (targetName) {
				case 'input':
				case 'label':
				case 'path':
				case 'section':
				case 'span':
				case 'svg':
					console.log('Do not open!');
					break;
				default:
					console.log('Open Sesami!');
			}
		},
		rows: arg.rows,
	})),
];

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const KiteHoverTable = Template.bind({});

KiteHoverTable.args = {
	heads: headArgs,
	rows: row3Args,
	tick: true,
	options: {
		rows: {
			hover: true,
		},
	},
};

export const KiteTickActionsTable = Template.bind({});

KiteTickActionsTable.args = {
	actions: {
		actions: [
			{
				title: 'Delete all departments',
				value: 'delete_departments',
				onSubmit: (values) => {
					console.log('DELETE ALL :>> ', values);
				},
			},
			{
				title: 'Mark read departments',
				value: 'mark_read_departments',
				onSubmit: (values) => {
					console.log('MARK READ ALL :>> ', values);
				},
			},
			{
				title: 'Mark unread departments',
				value: 'mark_unread_departments',
				onSubmit: (values) => {
					console.log('MARK UNREAD ALL :>> ', values);
				},
			},
		],
	},
	rows: row2Args,
	heads: headArgs,
	tick: true,
};

export const KiteTickTable = Template.bind({});

KiteTickTable.args = {
	rows: row2Args,
	heads: headArgs,
	tick: true,
	getSelectedValues: (values) => {
		console.log(values);
	},
};

export const KiteSplitTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteSplitTable.args = {
	rows: rowArgs,
	heads: headArgs,
	split: {
		actions: [
			{
				active: true,
				onClick: () => window.alert('Show All!'),
				title: 'all',
			},
			{
				active: false,
				onClick: () => window.alert('Show Only Active!'),
				title: 'active',
			},
			{
				active: true,
				onClick: () => window.alert('Show Only On Leave!'),
				title: 'on leave',
			},
			{
				active: false,
				onClick: () => window.alert('Show Inactive!'),
				title: 'inactive',
			},
		],
	},
};

export const KiteTable = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteTable.args = {
	rows: rowArgs,
	heads: headArgs,
};
