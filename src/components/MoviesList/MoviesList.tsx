'use client'
import { FC } from 'react'

import LoadingErrorWrapper from '../LoadingErrorWrapper/LoadingErrorWrapper'
import TicketCard from '../TicketCard/TicketCard'
import styles from './MoviesList.module.css'
import { useMoviesList } from './services/useMoviesList'
const MoviesList: FC = () => {
	const { filteredData, isFetching, isError } = useMoviesList()
	return (
		<div className={styles.wrapper}>
			<LoadingErrorWrapper isLoading={isFetching} isError={isError}>
				{filteredData.map(movie => (
					<TicketCard withDeleteButton={false} key={movie.id} movie={movie} />
				))}
			</LoadingErrorWrapper>
		</div>
	)
}

export default MoviesList
