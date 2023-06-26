'use client'

import { FC, PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
	element?: HTMLElement
}
export const Portal: FC<PropsWithChildren<PortalProps>> = props => {
	const { element, children } = props
	const mountEl = element ?? document.body
	return createPortal(children, mountEl)
}

/**Этот вспомогательный код оборачивает компонент React, который использует порталы для рендеринга дочерних элементов в DOM-узел, который существует вне  DOM компонента. */
