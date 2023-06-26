'use client'

import { FC, useMemo } from 'react'
import { useSelector } from 'react-redux'

import LoadingErrorWrapper from '@/components/LoadingErrorWrapper/LoadingErrorWrapper'
import TicketCard from '@/components/TicketCard/TicketCard'
import { useGetMoviesQuery } from '@/store/services/movieApi'
import { selectedMoviesSelector } from './services/selectors'
import { getSelectedMovies } from './services/utils'

export const MoviesList: FC = () => {
	const selectedMovies = useSelector(selectedMoviesSelector)

	const { data, isLoading, isError } = useGetMoviesQuery('')

	const movies = useMemo(
		() => getSelectedMovies(data, selectedMovies),
		[data, selectedMovies]
	)

	return (
		<LoadingErrorWrapper isLoading={isLoading} isError={isError}>
			{movies.map(movie => (
				<TicketCard withDeleteButton={true} key={movie.id} movie={movie} />
			))}
		</LoadingErrorWrapper>
	)
}
