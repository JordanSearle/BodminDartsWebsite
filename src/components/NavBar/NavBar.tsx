import clsx from 'clsx'
import type { ReactNode } from 'react'
import {
  Navbar as BootstrapNavbar,
  Container,
  Nav,
} from 'react-bootstrap'

interface NavBarProps {
  children: ReactNode
  className?: string
  expand?: boolean | string
}

interface BrandProps {
  children: ReactNode
  href?: string
}

interface NavItemProps {
  children: ReactNode
  href?: string
  active?: boolean
}

const NavBar = ({
  children,
  className,
  expand = 'lg',
}: NavBarProps) => {
  return (
    <BootstrapNavbar
      expand={expand}
      bg="primary" 
      data-bs-theme="dark"
      className={className}
    >
      <Container>
        {children}
      </Container>
    </BootstrapNavbar>
  )
}

const Brand = ({ children, href = '/' }: BrandProps) => {
  return (
    <BootstrapNavbar.Brand href={href}>
      {children}
    </BootstrapNavbar.Brand>
  )
}

const Toggle = () => {
  return <BootstrapNavbar.Toggle />
}

const Collapse = ({ children }: { children: ReactNode }) => {
  return (
    <BootstrapNavbar.Collapse>
      {children}
    </BootstrapNavbar.Collapse>
  )
}

const Links = ({ children }: { children: ReactNode }) => {
  return <Nav>{children}</Nav>
}

const Item = ({
  children,
  href,
  active,
}: NavItemProps) => {
  return (
    <Nav.Link href={href} active={active}>
      {children}
    </Nav.Link>
  )
}

NavBar.Brand = Brand
NavBar.Toggle = Toggle
NavBar.Collapse = Collapse
NavBar.Links = Links
NavBar.Item = Item

export default NavBar