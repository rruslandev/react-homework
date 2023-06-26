import { FC } from 'react'

import Image from 'next/image'
import styles from './EmptyCart.module.css'

const EmptyCart: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Image
				src='/icons/empty-cart.svg'
				width={150}
				height={150}
				alt='empty cart'
			/>
			<p className={styles.text}>Здесь пусто :(</p>
		</div>
	)
}
export default EmptyCart

/**Компонент для пустой корзины */
