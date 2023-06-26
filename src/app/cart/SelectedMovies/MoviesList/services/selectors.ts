import { AppState } from '@/store/store.type'
import { createSelector } from '@reduxjs/toolkit'

const selector = (state: AppState) => state.cart

export const selectedMoviesSelector = createSelector([selector], item => item)
