import Link from 'next/link'
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={ styles.navigation }>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/posts">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  )
}
