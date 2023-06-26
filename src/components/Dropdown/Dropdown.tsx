import useShowDropdown from '@/hooks/useShowDropdown'
import classNames from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Dropdown.module.css'
import { DropdownItems } from './DropdownItems/DropdownItems'

interface DropdownProps {
	placeholder: string
	items: Record<string, string>
	selectedKey: string
	setSelectedValue: (key: string) => void
	isLoading: boolean
}
export const Dropdown: FC<DropdownProps> = props => {
	const { placeholder, items, selectedKey, setSelectedValue, isLoading } = props

	const { show, blockRef, toggleShow, dropdownStyles } =
		useShowDropdown('dropdown')
	return (
		<div className={styles.wrapper} ref={blockRef} onClick={toggleShow}>
			<div className={classNames(styles.text, { [styles.opened]: show })}>
				{items[selectedKey] ? (
					<span>{items[selectedKey]}</span>
				) : (
					<span className={styles.placeholder}>{placeholder}</span>
				)}
				{isLoading ? (
					<span className={styles.placeholder}>{'Загрузка...'}</span>
				) : (
					<div>
						<Image
							className={classNames(styles.arrowImg, {
								[styles.active]: show,
							})}
							width={18}
							height={18}
							alt='arrow'
							src='/icons/arrow.svg'
						/>
					</div>
				)}
			</div>
			{show && (
				<DropdownItems
					show={show}
					dropdownStyles={dropdownStyles}
					items={items}
					selectedKey={selectedKey}
					setSelectedValue={setSelectedValue}
				/>
			)}
		</div>
	)
}
