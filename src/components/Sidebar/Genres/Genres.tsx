import { genresMap } from '@/common/genresMap'
import { Dropdown } from '@/components/Dropdown/Dropdown'
import SelectFilterOption from '@/components/SelectFilterOption/SelectFilterOption'
import { FC } from 'react'
import { useGenres } from './services/useGenres'

const Genres: FC = () => {
	const { selectedGenre, setSelectedValue } = useGenres()
	return (
		<SelectFilterOption label='Жанр'>
			<Dropdown
				isLoading={false}
				placeholder='Выберите жанр'
				items={genresMap}
				selectedKey={selectedGenre}
				setSelectedValue={setSelectedValue}
			/>
		</SelectFilterOption>
	)
}

export default Genres
