import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SelectButton } from '../../components/controls';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'KiteReactKitComponentLibrary/SelectButton',
	component: SelectButton,
} as ComponentMeta<typeof SelectButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectButton> = (args) => (
	<SelectButton {...args} />
);

export const KiteSelectButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteSelectButton.args = {
	selectProps: {
		placeholder: 'Select option',
		rounded: 'rounded-l-lg',
		options: [
			{ title: 'Mark completed', value: 'mark_completed' },
			{ title: 'Mark not completed', value: 'mark_not_completed' },
			{ title: 'Delete Departments', value: 'delete' },
		],
	},
	buttonProps: {
		caps: true,
		title: 'Proceed',
	},
};
