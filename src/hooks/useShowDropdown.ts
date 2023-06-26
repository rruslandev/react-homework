import { CSSProperties, useCallback, useEffect, useState } from 'react'
import useOnClickOutside from './useOnClickOutside'

interface IUseShowDropdown {
	show: boolean
	blockRef: React.MutableRefObject<HTMLDivElement>
	toggleShow: () => void
	dropdownStyles: CSSProperties
}

const useShowDropdown = (ignoreNodeId: string): IUseShowDropdown => {
	const [show, setShow] = useState<boolean>(false)
	const [dropdownStyles, setDropdownStyles] = useState<CSSProperties>(null)

	const toggleShow = useCallback(() => setShow(prev => !prev), [])

	const blockRef = useOnClickOutside<HTMLDivElement>(
		() => setShow(false),
		ignoreNodeId
	)

	useEffect(() => {
		const bounding = blockRef.current.getBoundingClientRect()
		const elHeight = bounding.height
		const left = bounding.left
		const top = bounding.top + elHeight + 4
		const minWidth = bounding.width
		const width = bounding.width

		setDropdownStyles(prev => ({
			...prev,
			top,
			left,
			minWidth,
			width: prev?.width ?? width,
		}))
	}, [show])

	return {
		show,
		blockRef,
		toggleShow,
		dropdownStyles,
	}
}
export default useShowDropdown

/**Этот хук useShowDropdown нужен для верного отображения дропдауна. Он используется для управления состоянием видимости дропдауна и его стилей. Функция useEffect внутри хука вызывается каждый раз, когда состояние видимости выпадающего списка изменяется. Она вычисляет положение и размеры элемента, на который нажимают для отображения выпадающего списка, и на основе этих данных вычисляет стили, которые должны быть применены к выпадающему списку. */
