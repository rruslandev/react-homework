import { AppState } from '@/store/store.type'

export const selectedGenreSelector = (state: AppState) =>
	state.home.selectedGenre
