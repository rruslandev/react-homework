import classNames from 'classnames'
import { FC, MutableRefObject, PropsWithChildren } from 'react'
import styles from './ContentWrapper.module.css'
interface ContentWrapperProps {
	className?: string
	blockRef?: MutableRefObject<HTMLElement>
}
const ContentWrapper: FC<PropsWithChildren<ContentWrapperProps>> = props => {
	const { children, className, blockRef } = props
	return (
		<section ref={blockRef} className={classNames(styles.wrapper, className)}>
			{children}
		</section>
	)
}

export default ContentWrapper
