export interface Movie {
	title: string
	posterUrl: string
	releaseYear: number
	description: string
	genre: string
	id: string
	rating: number
	director: string
	reviewIds: string[]
}

export interface Cinema {
	id: string
	name: string
	movieIds: string[]
}

export interface Review {
	id: string
	name: string
	text: string
	rating: number
}

export interface MovieInfo {
	movie: Movie
	reviews: Review[]
}
