import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/test">Test</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </main>
    )
}

// export default Component
export default Layout