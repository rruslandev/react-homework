'use client'

import { FC } from 'react'

import { QAText } from '@/common/constantsText'
import Accordion from '@/components/Accordion/Accordion'
import ContentWrapper from '@/components/ContentWrapper/ContentWrapper'
import styles from './page.module.css'

const Faq: FC = () => {
	return (
		<section className={styles.wrapper}>
			<ContentWrapper>
				<h1 className={styles.title}>{'Вопросы-ответы'}</h1>
			</ContentWrapper>
			<Accordion>
				{QAText.map((item, i) => (
					<Accordion.AccordionItems key={i} id={i} {...item} />
				))}
			</Accordion>
		</section>
	)
}

export default Faq
