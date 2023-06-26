'use client'
import useCreateHTMLElement from '@/hooks/useCreateHTMLElement'
import { useHiddenOverflow } from '@/hooks/useHiddenOverflow'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import Image from 'next/image'
import { FC, useCallback } from 'react'
import Button from '../Button/Button'
import ContentWrapper from '../ContentWrapper/ContentWrapper'
import { Portal } from '../Portal/Portal'
import styles from './Modal.module.css'
interface ModalProps {
	show: boolean
	onSuccess: () => void
	onClose: () => void
}
const Modal: FC<ModalProps> = props => {
	const { show, onSuccess, onClose } = props

	const element = useCreateHTMLElement('modal')

	const ref = useOnClickOutside(onClose)

	useHiddenOverflow([show])

	const onButtonClick = useCallback(() => {
		onSuccess()
		onClose()
	}, [])

	return (
		<Portal element={element}>
			<div className={styles.overflow}>
				<ContentWrapper className={styles.wrapper} blockRef={ref}>
					<div className={styles.text}>
						<h2 className={styles.title}>{'Удаление билета'}</h2>
						<p className={styles.description}>
							{'Вы уверены, что хотите удалить билет?'}
						</p>
						<div>
							<Image
								onClick={onClose}
								className={styles.closeImg}
								src='/icons/close.svg'
								alt='close'
								width={16}
								height={16}
							/>
						</div>
					</div>
					<div className={styles.buttons}>
						<Button theme='primary' onClick={onButtonClick}>
							{'Да'}
						</Button>
						<Button theme='secondary' onClick={onClose}>
							{'Нет'}
						</Button>
					</div>
				</ContentWrapper>
			</div>
		</Portal>
	)
}

export default Modal
