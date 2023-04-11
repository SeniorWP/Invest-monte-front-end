import { Montserrat } from 'next/font/google'
import { FC, ReactNode } from 'react'

import Layout from '@/features/Layout/Layout'

interface IPtops {
	children: ReactNode
}

const montserrat = Montserrat({
	weight: ['400', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
})

const MainProvider: FC<IPtops> = ({ children }) => {
	return <Layout className={montserrat.className}>{children}</Layout>
}

export default MainProvider
