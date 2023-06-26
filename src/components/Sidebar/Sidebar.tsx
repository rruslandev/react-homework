'use client'

import { FC } from 'react'

import ContentWrapper from '../ContentWrapper/ContentWrapper'
import Cinemas from './Cinemas/Cinemas'
import Genres from './Genres/Genres'

import { InputTitle } from './InputTitle/InputTitle'
import styles from './Sidebar.module.css'

const Sidebar: FC = () => {
	return (
		<ContentWrapper className={styles.wrapper}>
			<h2 className={styles.title}>{'Фильтр поиска'}</h2>
			<div className={styles.selectors}>
				<InputTitle />
				<Genres />
				<Cinemas />
			</div>
		</ContentWrapper>
	)
}

export default Sidebar
