import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<Image
				src={logoImage}
				width={166}
				height={45}
				alt="Invest Monte"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
