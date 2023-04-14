import clsx from 'clsx'
import { Montserrat } from 'next/font/google'
import { FC, ReactNode } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

interface IProps {
	children: ReactNode
	className: string
}

const Layout: FC<IProps> = ({ className, children }) => {
	return (
		<div className={clsx(className, styles.wrapper)}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
export default Layout
