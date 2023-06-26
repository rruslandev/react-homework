import { MoviesList } from './MoviesList/MoviesList'
import { Summary } from './Summary/Summary'

import styles from './SelectedMovies.module.css'

export const SelectedMovies = () => (
	<div className={styles.wrapper}>
		<MoviesList />
		<Summary />
	</div>
)
