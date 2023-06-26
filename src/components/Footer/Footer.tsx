import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.css'
const Footer: FC = () => {
	return (
		<footer className={styles.wrapper}>
			<Link className={styles.link} href={'/faq'}>
				{'Вопросы-ответы'}
			</Link>
			<Link className={styles.link} href={'/about'}>
				{'О нас'}
			</Link>
		</footer>
	)
}

export default Footer
