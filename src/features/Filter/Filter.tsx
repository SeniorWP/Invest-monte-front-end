import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { BsFillMapFill } from 'react-icons/bs'

import Button from '@/components/ui/Button/Button'

import styles from './Filter.module.scss'

const DynamicSelect = dynamic(() => import('@/components/ui/Select/Select'), {
	ssr: false,
})

interface IProps {
	className: string
}
const homeType = [
	{
		value: 'apartments',
		label: 'Apartments',
	},
	{
		value: 'houses',
		label: 'Houses',
	},
]

const bedrooms = [
	{
		value: '1',
		label: '1',
	},
	{
		value: '2',
		label: '2',
	},
	{
		value: '3',
		label: '3',
	},
	{
		value: '4+',
		label: '4+',
	},
]

const location = [
	{
		value: 'budva',
		label: 'Budva',
	},
	{
		value: 'kotor',
		label: 'Kotor',
	},
	{
		value: 'podgorica',
		label: 'Podgorica',
	},
	{
		value: 'tivat',
		label: 'Tivat',
	},
	{
		value: 'hercegNovi',
		label: 'Herceg Novi',
	},
]

const price = [
	{
		value: '100',
		label: '100',
	},
	{
		value: '500',
		label: '500',
	},
	{
		value: '1000',
		label: '1000',
	},
	{
		value: '1500+',
		label: '1500',
	},
]

interface IForm {
	city: string[]
	homeType: string[]
	
}


const Filter: FC<IProps> = ({ className,  ...props }) => {
	const { register, handleSubmit, control, reset, formState } =
		useForm<IForm>()

	const onSubmit: SubmitHandler<IForm> = (data) => {
		console.log(data)
		reset()
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		if ((event.target as HTMLButtonElement).name === 'submitForm') {
			handleSubmit(onSubmit)()
		} else {
			console.log('aaaaaaaaa')
		}

		event.preventDefault()
	}

	return (
		<form className={clsx(className)} {...props}>
			<div className={clsx(className, 'container', styles.container)}>
				<div className={styles.selectsGroup}>
					<Controller
						name="homeType"
						control={control}
						render={({ field }) => (
							<DynamicSelect
								field={field}
								options={homeType}
								placeholder="Home type"
							/>
						)}
					/>
					<Controller
						name="city"
						control={control}
						render={({ field }) => (
							<DynamicSelect
								field={field}
								options={bedrooms}
								placeholder="City"
								isMulti
							/>
						)}
					/>
					<Controller
						name="city"
						control={control}
						render={({ field }) => (
							<DynamicSelect
								field={field}
								options={location}
								placeholder="City"
								isMulti
							/>
						)}
					/>
					<Controller
						name="city"
						control={control}
						render={({ field }) => (
							<DynamicSelect
								field={field}
								options={price}
								placeholder="City"
								isMulti
							/>
						)}
					/>
				</div>

				<div className={styles.buttonsGroup}>
					<Button
						icon={<BsFillMapFill />}
						variant="ghost"
						name="otherButton"
						onClick={handleClick}
					>
						Map Search
					</Button>
					<Button
						variant="primary"
						name="submitForm"
						onClick={handleClick}
					>
						{' '}
						Search{' '}
					</Button>
				</div>
			</div>
		</form>
	)
}
export default Filter
