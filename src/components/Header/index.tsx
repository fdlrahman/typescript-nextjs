import Link from "next/link"
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.container}>
        <ul className={styles.list}>
          <li><Link className={styles.link} href="/">Home</Link></li>
          <li><Link className={styles.link} href="/blog">Blog</Link></li>
          <li><Link className={styles.link} href="/users">Users</Link></li>
        </ul>
      </header>
  )
}
