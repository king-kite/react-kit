import React from 'react';
import { FaPen } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../../components/controls';

export default {
	title: 'KiteReactKitComponentLibrary/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const KiteButton = Template.bind({});
KiteButton.args = {
	title: 'button',
};

export const KiteIconRightButton = Template.bind({});
KiteIconRightButton.args = {
	iconRight: FaPen,
	title: 'Button With Icon',
};

export const KiteButtonLink = Template.bind({});
KiteButtonLink.args = {
	link: '#',
	title: 'Link Button',
};
