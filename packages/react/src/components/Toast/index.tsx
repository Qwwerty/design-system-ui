import { ComponentProps } from 'react'
import { ToastProvider } from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import {
  ToastContainer,
  ToastDescription,
  ToastTitle,
  ToastClose,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ title, description, ...rest }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastContainer {...rest}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastClose>
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}
