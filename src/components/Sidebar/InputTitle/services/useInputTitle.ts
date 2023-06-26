import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actions } from '@/store/home'
import { titleSelector } from './selectors'

export const useInputTitle = (): {
	debouncedValue: string
	onChange: (value: string) => void
} => {
	const title = useSelector(titleSelector)

	const dispatch = useDispatch()

	const [debouncedValue, setDebouncedValue] = useState(title)

	useEffect(() => {
		return () => {
			dispatch(actions.setMovieTitle(''))
		}
	}, [])

	useEffect(() => {
		const handler = setTimeout(() => {
			dispatch(actions.setMovieTitle(debouncedValue))
		}, 500)

		return () => {
			clearTimeout(handler)
		}
	}, [debouncedValue])

	const onChange = useCallback(
		(value: string): void => setDebouncedValue(value),
		[]
	)

	return { debouncedValue, onChange }
}
