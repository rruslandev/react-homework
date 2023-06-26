import { useEffect } from 'react'

export const useHiddenOverflow = <T>(deps: T[]) => {
	useEffect(() => {
		document.body.setAttribute('style', 'overflow:hidden')

		return () => {
			document.body.removeAttribute('style')
		}
	}, [...deps])
}

/**Хук нужен только для модалки.Просто применяет CSS-стиль 'overflow:hidden' к тегу body когда появляется модалка*/
