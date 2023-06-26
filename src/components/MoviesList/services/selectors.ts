import { AppState } from '@/store/store.type'
import { createSelector } from '@reduxjs/toolkit'

export const movieTitleSelector = (state: AppState) => state.home.movieTitle
export const selectedGenreSelector = (state: AppState) =>
	state.home.selectedGenre
export const selectedCinemaIdSelector = (state: AppState) =>
	state.home.selectedCinemaId

export const filterParamsSelector = createSelector(
	[movieTitleSelector, selectedGenreSelector, selectedCinemaIdSelector],
	(title, genre, cinemaId) => ({
		title,
		genre,
		cinemaId,
	})
)
