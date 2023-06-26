import { FC, PropsWithChildren } from 'react'

type PendingErrorGuardProps = {
	isLoading: boolean
	isError: boolean
}

const LoadingErrorWrapper: FC<
	PropsWithChildren<PendingErrorGuardProps>
> = props => {
	const { children, isLoading, isError } = props
	return (
		<>
			{isLoading ? (
				<div>{'Загрузка...'}</div>
			) : isError ? (
				<p>{'Произошла ошибка'}</p>
			) : (
				<>{children}</>
			)}
		</>
	)
}

export default LoadingErrorWrapper

/**Обертка, которая обрабатывает состояния загрузки или ошибки */
