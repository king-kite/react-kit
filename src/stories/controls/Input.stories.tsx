import React from 'react';
import { FaUser } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '../../components/controls/Input';
import '../../styles/tailwind.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'KiteReactKitComponentLibrary/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const KiteInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteInput.args = {
	badge: {
		bg: 'danger',
		padding: 'px-4 py-3',
		title: 'Generate Code',
	},
	bdr: 'border-2',
	bdrColor: 'border-green-600',
	datalist: {
		id: 'names',
		list: [
			{ id: '1', value: 'John' },
			{ id: '2', value: 'April' },
			{ id: '3', value: 'June' },
			{ id: '4', value: 'May' },
			{ id: '5', value: 'Jane' },
		],
	},
	disabled: false,
	error: 'This is an error',
	helpText:
		'This is where you place any help text for the users to improve the experience',
	icon: FaUser,
	iconColor: 'text-red-600',
	label: 'Message',
	list: 'names',
	maxLength: 20,
	name: 'name',
	onChange: (e) => console.log(e.target.value),
	placeholder: 'Type in your message',
	type: 'text',
};
