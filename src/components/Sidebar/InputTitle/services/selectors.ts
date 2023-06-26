import { AppState } from '@/store/store.type'

export const titleSelector = (state: AppState) => state.home.movieTitle
