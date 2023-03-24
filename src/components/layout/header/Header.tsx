import clsx from 'clsx'
import { FC } from 'react'
import {
	AiFillPlusCircle,
	AiOutlineMessage,
	AiOutlineHeart,
	AiOutlineBell
} from 'react-icons/ai'

import Button from '@/components/ui/button/Button'
import Logo from '@/components/ui/logo/Logo'

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
			<Logo />
			<section className={styles.buttonGroup}>
				<div className={styles.buttonsNavigations}>
					<AiOutlineMessage />
					<AiOutlineHeart/>
					<AiOutlineBell />
				</div>
				<Button type="ghost">Log in</Button>
			</section>
		</header>
	)
}
export default Header
