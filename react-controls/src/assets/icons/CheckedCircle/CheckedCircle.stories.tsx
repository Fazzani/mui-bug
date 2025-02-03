import { Meta, StoryObj } from '@storybook/react';
import { CheckedCircle } from './CheckedCircle';

const meta = {
  title: 'Assets/Icons/CheckedCircle',
  component: CheckedCircle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckedCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
