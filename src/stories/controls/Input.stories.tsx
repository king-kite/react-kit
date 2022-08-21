import React from 'react';
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
		padding: 'px-6 py-3',
		title: 'Generate Code',
	},
	error: 'This is an error',
	label: 'Message',
};
