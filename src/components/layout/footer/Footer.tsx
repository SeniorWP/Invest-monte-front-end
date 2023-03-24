import Logo from '@/components/ui/logo/Logo'
import clsx from 'clsx'
import { FC } from 'react'

import styles from './footer.module.scss'

interface IProps {
	className: string
}

const Footer: FC<IProps> = ({ className, ...props }) => {
	return (
		<footer className={styles.footer} {...props}>
			<div className={clsx('container', styles.footer)}>
				<Logo/>
			</div>
		</footer>
	)
}
export default Footer
