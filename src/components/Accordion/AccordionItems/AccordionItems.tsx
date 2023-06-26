import ContentWrapper from '@/components/ContentWrapper/ContentWrapper'
import { useAccordionContext } from '@/contexts/AccordionContext'
import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './AccordionItems.module.css'

interface AccordionItemsProps {
	id: number
	question: string
	answer: string
}
const AccordionItems: FC<AccordionItemsProps> = props => {
	const { id, question, answer } = props
	const { activeItemId, switchActiveItemId } = useAccordionContext()

	const showAnswer = activeItemId === id
	return (
		<ContentWrapper className={styles.wrapper}>
			<h3 className={styles.question}>{question}</h3>
			<p
				className={classNames(styles.answer, {
					[styles.hidden]: !showAnswer,
				})}
			>
				{answer}
			</p>
			<div>
				<Image
					onClick={() => switchActiveItemId(id)}
					className={classNames(styles.arrowImg, {
						[styles.active]: showAnswer,
					})}
					src='/icons/arrow.svg'
					width={32}
					height={32}
					alt='arrow'
				/>
			</div>
		</ContentWrapper>
	)
}

export default AccordionItems
