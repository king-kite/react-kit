import React from 'react';
import {
	FaUsers,
	FaUserFriends,
	FaUserShield,
	FaUserTie,
	FaUser,
	FaUserAstronaut,
} from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select2 from '../../components/controls/Select2';
import '../../styles/tailwind.css';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'KiteReactKitComponentLibrary/Select2',
	component: Select2,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
} as ComponentMeta<typeof Select2>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select2> = (args) => (
	<Select2 {...args} />
);

export const KiteSelect2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteSelect2.args = {
	options: [
		{ icon: FaUser, title: 'Janet Johnson', value: 'janet_johnson' },
		{ icon: FaUserFriends, title: 'Peter Hale', value: 'peter_hale' },
		{ icon: FaUserTie, title: 'Gabriel Adams', value: 'gabriel_adams' },
		{ icon: FaUserShield, title: 'Jane Dawson', value: 'jane_dawson' },
		{ icon: FaUsers, title: 'Jonathan Peach', value: 'jonathan_peach' },
		{ icon: FaUserAstronaut, title: 'Sarah Jacobs', value: 'sarah_jacobs' },
	],
	bdr: 'border-2',
	closeOnClick: true,
	disabled: false,
	icon: FaUser,
	label: 'User',
	name: 'user',
	placeholder: 'Select User',
};

export const KiteSelect2Multiple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteSelect2Multiple.args = {
	options: [
		{ icon: FaUser, title: 'Janet Johnson', value: 'janet_johnson' },
		{ icon: FaUserFriends, title: 'Peter Hale', value: 'peter_hale' },
		{ icon: FaUserTie, title: 'Gabriel Adams', value: 'gabriel_adams' },
		{ icon: FaUserShield, title: 'Jane Dawson', value: 'jane_dawson' },
		{ icon: FaUsers, title: 'Jonathan Peach', value: 'jonathan_peach' },
		{ icon: FaUserAstronaut, title: 'Sarah Jacobs', value: 'sarah_jacobs' },
	],
	bdr: 'border-2',
	closeOnClick: true,
	disabled: false,
	icon: FaUser,
	label: 'Supervisor',
	multiple: true,
	name: 'supervisor',
	placeholder: 'Select Supervisor',
};
