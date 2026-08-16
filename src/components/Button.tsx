import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Button as BootstrapButton } from 'react-bootstrap'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: string
}

const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <BootstrapButton variant={variant} {...props}>
      {children}
    </BootstrapButton>
  )
}

export default Button