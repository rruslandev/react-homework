import { useEffect, useRef } from 'react'

const useOnClickOutside = <T extends HTMLElement>(
	callback: () => void,
	ignoreNodeId?: string
): React.MutableRefObject<T> => {
	const innerRef = useRef<T>()

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			const target = e.target
			const block = document.getElementById(ignoreNodeId)
			const path = e.composedPath()
			if (
				innerRef.current &&
				!innerRef.current.contains(target) &&
				!path.includes(block)
			) {
				callback()
			}
		}

		document.addEventListener('mousedown', handleClick)

		return () => {
			document.removeEventListener('mousedown', handleClick)
		}
	}, [innerRef])

	return innerRef
}
export default useOnClickOutside

/**Этот хук useOnClickOutside используется для определения кликов за пределами дропдауна и модалки. При клике вне этих элементов будет закрываться модальное окно или выпадающий список */
