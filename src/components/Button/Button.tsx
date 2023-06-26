import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.css'
interface ButtonProps {
	theme: 'primary' | 'secondary' | 'primarySmall'
	disabled?: boolean
	onClick: () => void
}
const Button: FC<PropsWithChildren<ButtonProps>> = props => {
	const { theme, disabled, onClick, children } = props
	return (
		<button
			className={classNames(styles.wrapper, styles[theme], {
				[styles.disabled]: disabled,
			})}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button

/**Общий компонент кнопки для всего проекта */
