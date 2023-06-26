import { useEffect, useState } from 'react'

const useCreateHTMLElement = (id: string): HTMLElement => {
	const [mountEl, setMountEl] = useState<HTMLElement>(
		document.getElementById(id)
	)

	useEffect(() => {
		if (!mountEl) {
			const element = document.createElement('div')
			element.setAttribute('id', id)
			document.body.appendChild(element)

			setMountEl(element)

			return () => {
				document.body.removeChild(element)
			}
		}
	}, [id])

	return mountEl
}

export default useCreateHTMLElement

/**Этот хук useCreateHTMLElement служит для создания нового HTML-элемента div с заданным атрибутом id. Он понадобится для создания портала */
