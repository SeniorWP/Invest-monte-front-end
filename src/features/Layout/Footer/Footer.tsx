import clsx from 'clsx'
import { FC } from 'react'

import Logo from '@/components/ui/Logo/Logo'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={clsx('container', styles.footer)}>
				<Logo />
			</div>
		</footer>
	)
}
export default Footer
