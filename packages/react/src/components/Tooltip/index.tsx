import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipContent, TooltipArrow } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof RadixTooltip.Root> {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...rest }: TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...rest}>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
