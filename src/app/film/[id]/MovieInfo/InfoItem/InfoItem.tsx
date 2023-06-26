import { FC } from 'react'
import styles from './InfoItem.module.css'
interface InfoItemProps {
	label: string
	text: string | number
}
const InfoItem: FC<InfoItemProps> = props => {
	const { label, text } = props
	return (
		<div className={styles.wrapper}>
			<span className={styles.label}>{label}</span>
			<span>{text}</span>
		</div>
	)
}

export default InfoItem
