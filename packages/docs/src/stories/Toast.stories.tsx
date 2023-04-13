import type { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps } from '@qwwerty/react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'Scheduling done',
    description: 'Wednesday, October 23rd at 4pm',
    duration: 5000,
  },
  argTypes: {
    open: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
