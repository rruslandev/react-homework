import Image from 'next/image'
import { FC } from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import styles from './Review.module.css'

interface ReviewProps {
	name: string
	text: string
	rating: number
}
const Review: FC<ReviewProps> = props => {
	const { name, text, rating } = props
	return (
		<ContentWrapper className={styles.wrapper}>
			<div className={styles.photo}>
				<Image src='/icons/photo.svg' width={26} height={22} alt='photo' />
			</div>
			<h3 className={styles.name}>{name}</h3>
			<p className={styles.comment}>{text}</p>
			<div className={styles.rating}>
				<span>{'Оценка: '}</span>
				<span className={styles.number}>{rating}</span>
			</div>
		</ContentWrapper>
	)
}

export default Review
