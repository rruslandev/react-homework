'use client'

import { FC } from 'react'

import Input from '@/components/Input/Input'
import SelectFilterOption from '@/components/SelectFilterOption/SelectFilterOption'
import { useInputTitle } from './services/useInputTitle'

export const InputTitle: FC = () => {
	const { debouncedValue, onChange } = useInputTitle()

	return (
		<SelectFilterOption label='Название' htmlFor='title'>
			<Input
				id='title'
				value={debouncedValue}
				onChange={onChange}
				placeholder='Введите название'
			/>
		</SelectFilterOption>
	)
}
