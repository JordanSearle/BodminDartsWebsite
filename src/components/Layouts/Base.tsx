import type { ReactNode } from "react"
import clsx from 'clsx'
import NavBar from "../NavBar/NavBar"
import Spinner from "../Spinner/Spinner"
import Logo from "../../assets/logo.jpg"

export type BaseLayoutProps = {
    children: ReactNode
    className?: string
    isLoading?: boolean
}

export default function BaseLayout ({children, className, isLoading}: BaseLayoutProps) {
    return (
        <div className={clsx(["d-flex flex-column min-vh-100", className])}>
            <NavBar>
                <NavBar.Brand href="/">
                    <div className="d-flex align-items-center gap-2">
                        <img src={Logo} width={48} height={48} className="rounded" />
                        Bodmin Darts League
                    </div>
                </NavBar.Brand>

                <NavBar.Toggle />

                <NavBar.Collapse>
                    <NavBar.Links>
                    <NavBar.Item href="/">
                        Home
                    </NavBar.Item>

                    <NavBar.Item href="/results">
                        Results
                    </NavBar.Item>

                    <NavBar.Item href="/tables">
                        Tables
                    </NavBar.Item>

                    <NavBar.Item href="/about">
                        About
                    </NavBar.Item>
                    </NavBar.Links>
                </NavBar.Collapse>
            </NavBar>

            {isLoading && (
                <div className="flex-grow-1 d-flex justify-content-center align-items-center">
                    <Spinner />
                </div>
            )}

            {!isLoading && (
                <div className="container-lg">
                    {children}
                </div>
            )}
        </div>
    )
}