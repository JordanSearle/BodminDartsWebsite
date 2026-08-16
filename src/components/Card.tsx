import type { ReactNode } from 'react'
import { Card as BootstrapCard } from 'react-bootstrap'

interface CardProps {
  children: ReactNode
  className?: string
}

interface CardHeadProps {
  children: ReactNode
  className?: string
}

interface CardBodyProps {
  children: ReactNode
  className?: string
}

const Card = ({ children, className }: CardProps) => {
  return (
    <BootstrapCard className={className}>
      {children}
    </BootstrapCard>
  )
}

const Header = ({ children, className }: CardHeadProps) => {
  return (
    <BootstrapCard.Header className={className}>
      {children}
    </BootstrapCard.Header>
  )
}

const Body = ({ children, className }: CardBodyProps) => {
  return (
    <BootstrapCard.Body className={className}>
      {children}
    </BootstrapCard.Body>
  )
}

Card.Header = Header
Card.Body = Body

export default Card