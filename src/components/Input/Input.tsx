import { ChangeEvent, FC, useCallback } from 'react'
import styles from './Input.module.css'
interface InputProps {
	value: string
	placeholder: string
	onChange: (value: string) => void
	disabled?: boolean
	id?: string
}
const Input: FC<InputProps> = props => {
	const { value, placeholder, onChange, disabled, id } = props

	const onChangeInput = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
		[onChange]
	)
	return (
		<div>
			<input
				disabled={disabled}
				id={id}
				type='text'
				value={value}
				placeholder={placeholder}
				onChange={onChangeInput}
				className={styles.wrapper}
			/>
		</div>
	)
}

export default Input

/**Общая логик инпута для проекта */
