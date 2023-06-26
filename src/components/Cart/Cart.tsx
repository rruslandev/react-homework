import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from './Cart.module.css'
import { cartItemsLengthSelector } from './services/selectors'
const Cart: FC = () => {
	const cartItemsLength = useSelector(cartItemsLengthSelector)
	return (
		<div className={styles.wrapper}>
			{cartItemsLength > 0 && (
				<div className={styles.counter}>{cartItemsLength}</div>
			)}{' '}
			<Link href={'/cart'}>
				<div>
					<Image
						className={styles.cartImg}
						src='/icons/cart.svg'
						width={28}
						height={25}
						alt='cart'
					/>
				</div>
			</Link>
		</div>
	)
}

export default Cart
