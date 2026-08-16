import type { ReactNode } from 'react'
import {
  Accordion as BootstrapAccordion,
} from 'react-bootstrap'

interface AccordionProps {
  children: ReactNode
  className?: string
}

interface ItemProps {
  children: ReactNode
  eventKey: string
}

interface HeaderProps {
  children: ReactNode
}

interface BodyProps {
  children: ReactNode
}

const Accordion = ({ children, className }: AccordionProps) => {
  return (
    <BootstrapAccordion className={className}>
      {children}
    </BootstrapAccordion>
  )
}

const Item = ({ children, eventKey }: ItemProps) => {
  return (
    <BootstrapAccordion.Item eventKey={eventKey}>
      {children}
    </BootstrapAccordion.Item>
  )
}

const Header = ({ children }: HeaderProps) => {
  return (
    <BootstrapAccordion.Header>
      {children}
    </BootstrapAccordion.Header>
  )
}

const Body = ({ children }: BodyProps) => {
  return (
    <BootstrapAccordion.Body>
      {children}
    </BootstrapAccordion.Body>
  )
}

Accordion.Item = Item
Accordion.Header = Header
Accordion.Body = Body

export default Accordion