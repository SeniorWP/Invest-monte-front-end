import clsx from 'clsx'
import { FC } from 'react'

import Card from '@/components/ui/Card/Card'

import styles from './Locations.module.scss'

// TODO: Вынести в бэк
const locations = [
	{
		name: 'Budva',
		img: '/budva.jpg',
	},
	{
		name: 'Herveg-Novi',
		img: '/hn.jpg',
	},
	{
		name: 'Kotor',
		img: '/kotor.jpg',
	},
	{
		name: 'Podgorica',
		img: '/podgorica.jpg',
	},
	{
		name: 'Tivat',
		img: '/tivat.jpg',
	},
]

const Locations: FC = () => {
	return (
		<div className={styles.section}>
			<div className={clsx('container', styles.locations)}>
				<h2 className={styles.title}>popular cities</h2>
				<div className={styles.card}>
					{locations.map((location, i) => (
						<Card
							key={location.name}
							className={styles[`card-${i + 1}`]}
							location={location}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
export default Locations
