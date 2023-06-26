import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '@/store/cart'
import { AppState } from '@/store/store.type'
import { countSelector } from './selectors'

interface IUseCounterButton {
	count: number
	disabledDecrement: boolean
	disabledIncrement: boolean
	showModal: boolean
	onPlusClick: () => void
	onMinusClick: () => void
	onSuccess: () => void
	onCloseClick: () => void
	onCloseModal: () => void
}

export const useCounterButton = (id: string): IUseCounterButton => {
	const count = useSelector((state: AppState) => countSelector(state, id))

	const [showModal, setShowModal] = useState(false)

	const dispatch = useDispatch()

	const onPlusClick = useCallback(
		() => dispatch(actions.incrementFilmCount(id)),
		[]
	)
	const onMinusClick = useCallback(() => {
		if (count === 1) {
			setShowModal(true)
		} else {
			dispatch(actions.decrementFilmCount(id))
		}
	}, [count])
	const onSuccess = useCallback(() => dispatch(actions.deleteFilm(id)), [])

	const onCloseClick = useCallback(() => setShowModal(true), [])

	const onCloseModal = useCallback(() => setShowModal(false), [])

	const disabledDecrement = count === 0
	const disabledIncrement = count === 30

	return {
		count,
		disabledDecrement,
		disabledIncrement,
		showModal,
		onCloseClick,
		onMinusClick,
		onPlusClick,
		onSuccess,
		onCloseModal,
	}
}

//**Этот  хук useCounterButton упрощает управление поведением кнопок увеличения и уменьшения количества фильма в корзине и модального окна. А также отрабатывает всю логику, которая связана с кнопками */
