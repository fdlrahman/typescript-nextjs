import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ReactNode } from 'react'
import styles from './Layout.module.css'
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode,
    pageTitle: string
}

export default function Layout(props: LayoutProps) {
    const { children, pageTitle } = props

    return (
        <>
            <Head>
                <title>Next Guide | {pageTitle}</title>
                <meta name='description' content='Website NextJS Basic' />
            </Head>
            <div className={styles.container}>
                <Header />
                <main className={styles.content}>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
