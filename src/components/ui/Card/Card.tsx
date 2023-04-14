import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Card.module.scss'

interface ILocation {
	name: string
	img: string
}

type Props = {
	className?: string
	location: ILocation
}

const Card = ({ className, location }: Props) => {
	return (
		//<Link href="#">
		<div className={clsx(styles.container, className)}>
			<div className={styles.card}>
				<Image
					width={370}
					height={590}
					className={styles.img}
					alt={location.name}
					src={location.img}
				/>
			</div>
			<h3 className={styles.title}>{location.name}</h3>
		</div>
		//</Link>
	)
}
export default Card
