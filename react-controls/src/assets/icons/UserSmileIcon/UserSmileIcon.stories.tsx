import { Meta, StoryObj } from '@storybook/react';
import { UserSmileIcon } from './UserSmileIcon';

const meta = {
  title: 'Assets/Icons/UserSmile',
  component: UserSmileIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserSmileIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Orange: Story = {
  args: {
    color: '#F59100',
  },
};

export const Big: Story = {
  args: {
    size: 256,
  },
};
