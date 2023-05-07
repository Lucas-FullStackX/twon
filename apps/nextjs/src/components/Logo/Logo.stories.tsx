import type { Meta, StoryObj } from '@storybook/react';
import { Logo, LogoSize, LogoType, LogoVariant } from './Logo';

const meta = {
  title: 'UI Components/Logo',
  component: Logo,
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: LogoSize.sm,
    type: LogoType.complete,
    variant: LogoVariant.light,
  },
};
