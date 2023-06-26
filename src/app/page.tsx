import MoviesList from '@/components/MoviesList/MoviesList'
import Sidebar from '@/components/Sidebar/Sidebar'
import { FC } from 'react'
import styles from './page.module.css'
const Home: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Sidebar />
			<MoviesList />
		</div>
	)
}

export default Home
