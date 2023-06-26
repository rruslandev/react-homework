import { AccordionProvider } from '@/contexts/AccordionContext'
import { FC, PropsWithChildren } from 'react'
import styles from './Accordion.module.css'
import AccordionItems from './AccordionItems/AccordionItems'

interface Accordion {
	AccordionItems?: typeof AccordionItems
}
const Accordion: FC<PropsWithChildren> & Accordion = props => {
	const { children } = props
	return (
		<div className={styles.wrapper}>
			<AccordionProvider>{children}</AccordionProvider>
		</div>
	)
}

Accordion.AccordionItems = AccordionItems

export default Accordion
