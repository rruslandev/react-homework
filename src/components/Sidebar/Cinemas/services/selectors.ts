import { AppState } from '@/store/store.type'

export const selectedCinemaIdSelector = (state: AppState) =>
	state.home.selectedCinemaId
