import React from 'react';
import { FaUser } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputButton } from '../../components/controls';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'KiteReactKitComponentLibrary/InputButton',
	component: InputButton,
} as ComponentMeta<typeof InputButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputButton> = (args) => (
	<InputButton {...args} />
);

export const KiteInputButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteInputButton.args = {
	inputProps: {
		bdrColor: 'border-primary-500',
		icon: FaUser,
		placeholder: 'Search Job By Name e.g. accountant',
		rounded: 'rounded-l-lg',
		type: 'search',
	},
	buttonProps: {
		caps: true,
		iconLeft: FaUser,
		title: 'User',
		type: 'submit',
	},
};
