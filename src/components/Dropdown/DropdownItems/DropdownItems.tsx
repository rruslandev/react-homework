import { Portal } from '@/components/Portal'
import useCreateHTMLElement from '@/hooks/useCreateHTMLElement'
import classNames from 'classnames'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import styles from './DropdownItems.module.css'
interface DropdownItemsProps {
	show: boolean
	dropdownStyles: CSSProperties
	items: Record<string, string>
	selectedKey: string
	setSelectedValue: (key: string) => void
}
export const DropdownItems: FC<
	PropsWithChildren<DropdownItemsProps>
> = props => {
	const { show, dropdownStyles, items, selectedKey, setSelectedValue } = props

	const element = useCreateHTMLElement('dropdown')
	return (
		<Portal element={element}>
			<ul
				className={classNames(styles.wrapper, { [styles.hide]: !show })}
				style={dropdownStyles}
			>
				{Object.entries(items).map(([key, value]) => (
					<li
						className={classNames(styles.item, {
							[styles.selected]: selectedKey === key,
						})}
						key={key}
						onClick={() => setSelectedValue(key)}
					>
						{value}
					</li>
				))}
			</ul>
		</Portal>
	)
}
