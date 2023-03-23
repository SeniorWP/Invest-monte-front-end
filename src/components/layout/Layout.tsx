import { FC, ReactNode } from 'react'

import styles from './Layout.module.scss'
import Footer from './footer/Footer'
import Header from './header/Header'

interface IProps {
	className: string
	children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
	return (
			<div className={styles.wrapper}>
				<Header className={styles.header} />
					<main className={styles.main}>{children}</main>
				<Footer className={styles.footer} />
			</div>
	)
}
export default Layout
