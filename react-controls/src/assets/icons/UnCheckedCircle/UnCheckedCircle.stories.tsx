import { Meta, StoryObj } from '@storybook/react';
import { UnCheckedCircle } from './UnCheckedCircle';

const meta = {
  title: 'Assets/Icons/UnCheckedCircle',
  component: UnCheckedCircle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UnCheckedCircle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
