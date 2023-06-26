import { Dropdown } from '@/components/Dropdown/Dropdown'
import SelectFilterOption from '@/components/SelectFilterOption/SelectFilterOption'
import { FC } from 'react'
import { useCinemas } from './services/useCinemas'

const Cinemas: FC = () => {
	const { cinemas, selectedCinemaId, isLoading, setSelectedValue } =
		useCinemas()

	return (
		<SelectFilterOption label='Кинотеатр'>
			<Dropdown
				selectedKey={selectedCinemaId}
				isLoading={isLoading}
				items={cinemas}
				setSelectedValue={setSelectedValue}
				placeholder='Выберите кинотеатр'
			/>
		</SelectFilterOption>
	)
}

export default Cinemas
