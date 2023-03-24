import clsx from 'clsx'
import { FC } from 'react'
import { AiOutlineHeart, AiFillPlusCircle } from 'react-icons/ai'

import Button from '@/components/ui/button/Button'

import styles from './header.module.scss'

interface IProps {
	className: string
}

const Header: FC<IProps> = ({ className, ...props }) => {
	return (
		<header className={clsx('container', styles.header)} {...props}>
			<Button startIcon={<AiFillPlusCircle />} type="primary">
				Add Rental Listing
			</Button>
			
			<AiOutlineHeart cursor={'pointer'} />
			<div>logo</div>
			<Button type="ghost">
				Log in
			</Button>
		</header>
	)
}
export default Header
