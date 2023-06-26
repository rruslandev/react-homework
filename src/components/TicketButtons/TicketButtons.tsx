import Image from 'next/image'
import { FC } from 'react'
import Button from '../Button/Button'
import Modal from '../Modal/Modal'
import styles from './TicketButtons.module.css'
import { useCounterButton } from './services/useCounterButtons'
interface TicketButtonsProps {
	id: string
	withDeleteButton: boolean
}
const TicketButtons: FC<TicketButtonsProps> = props => {
	const { id, withDeleteButton } = props
	const {
		count,
		disabledDecrement,
		disabledIncrement,
		showModal,
		onCloseClick,
		onMinusClick,
		onPlusClick,
		onSuccess,
		onCloseModal,
	} = useCounterButton(id)
	return (
		<div className={styles.wrapper}>
			<div className={styles.counters}>
				<Button
					theme='primarySmall'
					disabled={disabledDecrement}
					onClick={onMinusClick}
				>
					<div>
						<Image src='/icons/minus.svg' alt='minus' width={9} height={9} />
					</div>
				</Button>
				<span className={styles.counter}>{count}</span>
				<Button
					theme='primarySmall'
					disabled={disabledIncrement}
					onClick={onPlusClick}
				>
					<div>
						<Image src='/icons/plus.svg' alt='minus' width={9} height={9} />
					</div>
				</Button>
			</div>
			{withDeleteButton && (
				<div>
					<Image
						src='/icons/close.svg'
						alt='close'
						width={12.5}
						height={12.5}
						onClick={onCloseClick}
						className={styles.closeImg}
					/>
				</div>
			)}
			{showModal && (
				<Modal show={showModal} onClose={onCloseModal} onSuccess={onSuccess} />
			)}
		</div>
	)
}

export default TicketButtons

//** Кликер для билетов. В корзине - появляется крестик */
