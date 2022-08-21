import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Textarea } from '../../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'KiteReactKitComponentLibrary/Textarea',
	component: Textarea,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	// argTypes: {
	//   backgroundColor: { control: 'color' },
	// },
	// parameters: {
	//   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
	//   layout: 'fullscreen',
	// },
} as ComponentMeta<typeof Textarea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Textarea> = (args) => (
	<Textarea {...args} />
);

export const KiteTextarea = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
KiteTextarea.args = {
	error: 'This is an error',
	label: 'Message',
};
