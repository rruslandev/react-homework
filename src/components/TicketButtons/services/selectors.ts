import { AppState } from '@/store/store.type'

export const countSelector = (state: AppState, id: string) =>
	state.cart[id] || 0
