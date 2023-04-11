import { FC, ReactNode } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

interface IProps {
	className: string
	children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
export default Layout
