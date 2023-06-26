'use client'

import Review from '@/components/Review /Review'
import { Review as ReviewType } from '@/store/services/movieApi.types'
import { FC } from 'react'
interface ReviewsProps {
	reviews: ReviewType[]
}
const Reviews: FC<ReviewsProps> = props => {
	const { reviews } = props
	return (
		<>
			{reviews.map(item => (
				<Review key={item.id} {...item} />
			))}
		</>
	)
}

export default Reviews
