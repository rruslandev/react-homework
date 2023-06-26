'use client'

import { FC } from 'react'

import { MovieInfo } from './MovieInfo/MovieInfo'

import LoadingErrorWrapper from '@/components/LoadingErrorWrapper/LoadingErrorWrapper'
import { useGetMovieInfoQuery } from '@/store/services/movieApi'
import Reviews from './Reviews/Reviews'
import styles from './page.module.css'

interface PageProps {
	params: {
		id: string
	}
}

const Page: FC<PageProps> = ({ params: { id } }) => {
	const { data, isLoading, isError } = useGetMovieInfoQuery(id)

	return (
		<div className={styles.wrapper}>
			<LoadingErrorWrapper isLoading={isLoading} isError={isError}>
				{data && (
					<>
						<MovieInfo id={id} movie={data.movie} />
						<Reviews reviews={data.reviews} />
					</>
				)}
			</LoadingErrorWrapper>
		</div>
	)
}

export default Page
