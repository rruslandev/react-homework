'use client'

import { aboutUsText } from '@/common/constantsText'
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper'
import { FC } from 'react'
import styles from './page.module.css'
const About: FC = () => {
	return (
		<ContentWrapper className={styles.wrapper}>
			<h1 className={styles.title}>{'О нас'}</h1>
			{aboutUsText.map((item, i) => (
				<p className={styles.text} key={i}>
					{item}
				</p>
			))}
		</ContentWrapper>
	)
}

export default About
