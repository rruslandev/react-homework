'use client'

import { FC } from 'react'
import { useSelector } from 'react-redux'

import { cartItemsLengthSelector } from './services/selectors'

import ContentWrapper from '@/components/ContentWrapper/ContentWrapper'
import styles from './Summary.module.css'

export const Summary: FC = () => {
	const cartItemsLength = useSelector(cartItemsLengthSelector)

	return (
		<ContentWrapper className={styles.wrapper}>
			<span>{'Итого билетов:'}</span>
			<span>{cartItemsLength}</span>
		</ContentWrapper>
	)
}
