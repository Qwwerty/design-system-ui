import type { StoryObj, Meta } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@qwwerty/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    content: '26 de Outubro - Disponível',
    children: (
      <button
        style={{
          width: '4.125rem',
          height: '3.625rem',
          padding: '1rem 1.625rem',
          backgroundColor: '#323238',
          borderRadius: '6px',
          outline: 'none',
          border: 0,
          color: '#fff',
        }}
      >
        26
      </button>
    ),
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
