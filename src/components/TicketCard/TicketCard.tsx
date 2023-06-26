import { genresMap } from '@/common/genresMap'
import { Movie } from '@/store/services/movieApi.types'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import TicketButtons from '../TicketButtons/TicketButtons'
import styles from './TicketCard.module.css'
interface TicketCardProps {
	movie: Movie
	withDeleteButton: boolean
}
const TicketCard: FC<TicketCardProps> = props => {
	const { movie, withDeleteButton } = props
	return (
		<ContentWrapper className={styles.wrapper}>
			<Image
				loading='lazy'
				className={styles.poster}
				src={movie.posterUrl}
				width={100}
				height={120}
				alt='poster'
			/>
			<div className={styles.description}>
				<Link href={`/film/${movie.id}`} className={styles.title}>
					{movie.title}
				</Link>
				<p className={styles.genre}>{genresMap[movie.genre]}</p>
			</div>
			<TicketButtons withDeleteButton={withDeleteButton} id={movie.id} />
		</ContentWrapper>
	)
}

export default TicketCard

//**Карточка фильма */
