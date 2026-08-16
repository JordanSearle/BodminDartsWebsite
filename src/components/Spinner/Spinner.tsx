import type { HTMLAttributes } from 'react'
import { Spinner as BootstrapSpinner } from 'react-bootstrap'

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm'
  variant?: string
  animation?: 'border' | 'grow'
}

const Spinner = ({
  size,
  variant = 'primary',
  animation = 'border',
  ...props
}: SpinnerProps) => {
  return (
    <BootstrapSpinner
      size={size}
      variant={variant}
      animation={animation}
      {...props}
    />
  )
}

export default Spinner