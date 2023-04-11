import Image from 'next/image'
import { FC } from 'react'

import Card from '@/components/ui/Card/Card'

import MainImage from '@/assets/images/main.jpg'

import Filter from '../Filter/Filter'

import styles from './Hero.module.scss'

const Hero: FC = () => {
	return (
		<div className={styles.main}>
			<Image
				alt="Mountains"
				src={MainImage}
				placeholder="blur"
        		quality={100}
				sizes="100vw"
				style={{
					height: '678px',
					width: '100%',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					position: 'absolute',
				}}
			/>
			<Filter className={styles.filter}/>
		</div>
	)
}
export default Hero
