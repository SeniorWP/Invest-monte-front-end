import clsx from 'clsx'
import { FC } from 'react'

import styles from './header.module.scss'

interface IProps {
	className: string
}

const Header: FC<IProps> = ({ className, ...props }) => {
	return (
		<header className={styles.header} {...props}>
            <div className={clsx('container', styles.container)}>
					<div>
						button
					</div>
					<div>
						logo
					</div>
					<div>
						button navigation
					</div>
			</div>
		</header>
	)
}
export default Header
