'use client'

import Link from 'next/link'
import { FC } from 'react'
import Cart from '../Cart/Cart'
import styles from './Header.module.css'
const Header: FC = () => {
	return (
		<header className={styles.wrapper}>
			<Link className={styles.title} href={'/'}>
				{'Билетопоиск'}
			</Link>
			<Cart />
		</header>
	)
}

export default Header
