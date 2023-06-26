import { FC, PropsWithChildren } from 'react'
import styles from './SelectFilterOption.module.css'

interface SelectFilterOptionProps {
	label: string
	htmlFor?: string
}
const SelectFilterOption: FC<
	PropsWithChildren<SelectFilterOptionProps>
> = props => {
	const { label, children, htmlFor } = props
	return (
		<div className={styles.wrapper}>
			<label htmlFor={htmlFor} className={styles.label}>
				{label}
			</label>
			{children}
		</div>
	)
}

export default SelectFilterOption

//**Обертка для фильтров поиска сайдбара со стилями */
