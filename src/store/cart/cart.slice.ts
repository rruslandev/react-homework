import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initState } from './cart.state'

export const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: initState,
	reducers: {
		incrementFilmCount: (state, { payload }: PayloadAction<string>) => {
			const count = state[payload] || 0

			if (count === 30) {
				return
			}

			state[payload] = count + 1
		},
		decrementFilmCount: (state, { payload }: PayloadAction<string>) => {
			const count = state[payload]

			if (!count) {
				return
			}

			if (count === 1) {
				return
			}

			state[payload] = count - 1
		},
		deleteFilm: (state, { payload }: PayloadAction<string>) => {
			delete state[payload]
		},
	},
})

export const actions = cartSlice.actions

export const cart = cartSlice.reducer
