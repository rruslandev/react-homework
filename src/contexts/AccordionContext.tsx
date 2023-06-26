import {
	FC,
	PropsWithChildren,
	createContext,
	useCallback,
	useContext,
	useState,
} from 'react'

interface AccordionContext {
	activeItemId: number
	switchActiveItemId: (id: number) => void
}

const AccordionContext = createContext<AccordionContext>(null)

export const useAccordionContext = (): AccordionContext =>
	useContext(AccordionContext)

export const AccordionProvider: FC<PropsWithChildren> = props => {
	const { children } = props

	const [activeItemId, setActiveItemId] = useState(0)

	const switchActiveItemId = useCallback(
		(id: number) => setActiveItemId(id),
		[]
	)

	return (
		<AccordionContext.Provider value={{ activeItemId, switchActiveItemId }}>
			{children}
		</AccordionContext.Provider>
	)
}
