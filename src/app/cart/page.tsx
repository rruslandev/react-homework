'use client'

import { FC } from 'react'
import { useSelector } from 'react-redux'

import EmptyCart from '@/components/EmptyCart/EmptyCart'
import { SelectedMovies } from './SelectedMovies/SelectedMovies'
import { cartItemsLengthSelector } from './services/selectors'

const Cart: FC = () => {
	const cartItemsLength = useSelector(cartItemsLengthSelector)

	return cartItemsLength > 0 ? <SelectedMovies /> : <EmptyCart />
}

export default Cart
