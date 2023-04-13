import { keyframes } from '@stitches/react'
import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 32px))',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: 0,
  width: '100%',
  maxWidth: '22.5rem',
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

export const ToastContainer = styled(Toast.Root, {
  width: '100%',
  maxWidth: '22.5rem',
  background: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  padding: '$3 $5',
  listStyle: 'none',
  overflow: 'hidden',
  boxSizing: 'border-box',

  position: 'absolute',
  bottom: '$8',
  right: '$8',
  transform: 'translateX(calc(100% + 32px))',

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-in forwards`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
  lineHeight: 'base',
  width: '90%',
  overflowWrap: 'break-word',
})

export const ToastDescription = styled(Toast.Description, {
  marginTop: '$1',
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$md',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  width: '$5',
  height: '$5',
  color: '$gray200',
  cursor: 'pointer',

  position: 'absolute',
  top: 16,
  right: 16,

  '&:hover': {
    color: '$gray400',
    transition: 'color 0.2s',
  },
})

ToastContainer.displayName = 'Toast'
