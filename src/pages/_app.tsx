import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'

import MainProvider from '@/provider/AppProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<MainProvider>
				<Component {...pageProps} />
			</MainProvider>
		</>
	)
}
