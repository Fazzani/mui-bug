import { StoryFn } from '@storybook/react';
import { LoadingIcon, LoadingIconProps } from './LoadingIcon';

export default {
  component: LoadingIcon,
  title: 'Assets/Icons/LoadingIcon',
  argTypes: {
    size: { control: { type: 'number', min: 1, max: 30, step: 1 } },
  },
  args: {
    size: 16,
  },
};

const args: LoadingIconProps = {
  size: 16,
};

const Template: StoryFn<LoadingIconProps> = (args: LoadingIconProps) => <LoadingIcon {...args} />;

export const Default = Template.bind({});
Default.args = args;
