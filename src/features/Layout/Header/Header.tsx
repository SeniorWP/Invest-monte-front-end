import clsx from 'clsx'
import { FC } from 'react'
import {
	AiFillPlusCircle,
	AiOutlineBell,
	AiOutlineHeart,
	AiOutlineMessage,
} from 'react-icons/ai'

import Button from '@/components/ui/Button/Button'
import Logo from '@/components/ui/Logo/Logo'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={clsx('container', styles.container)}>
				<Button icon={<AiFillPlusCircle />} variant="primary">
					Add Rental Listing
				</Button>
				<Logo />
				<div className={styles.buttonGroup}>
					<div className={styles.buttonsNavigations}>
						<AiOutlineMessage />
						<AiOutlineHeart />
						<AiOutlineBell />
					</div>
					<Button small variant="ghost">
						Log in
					</Button>
				</div>
			</div>
		</header>
	)
}
export default Header
