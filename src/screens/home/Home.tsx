import { FC } from 'react'

import Hero from '@/features/Hero/Hero'
import Locations from '@/features/Locations/Locations'

const Home: FC = () => {
	return (
		<>
			<Hero />
			<Locations />
		</>
	)
}
export default Home
