import { FC, ReactNode } from 'react'
import clsx from 'clsx'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'
import { Montserrat } from 'next/font/google'

interface IProps {
	children: ReactNode
	className: string
}

const Layout: FC<IProps> = ({ className, children }) => {
	return (
			<div className={clsx(className,styles.wrapper)}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
export default Layout
