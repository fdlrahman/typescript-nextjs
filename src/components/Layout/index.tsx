import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ReactNode } from 'react'
import styles from './Layout.module.css'

interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {
    const { children } = props

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.content}>
                {children}
            </main>
            <Footer />
        </div>
    )
}
