import { Movie } from '@/store/services/movieApi.types'

export const getFilteredMovies = (
	data: Movie[],
	genre: string,
	title: string
): Movie[] =>
	data
		? data.filter(
				item =>
					item.title.toLowerCase().includes(title.toLowerCase()) &&
					(genre === 'all' || genre === item.genre)
		  )
		: []
