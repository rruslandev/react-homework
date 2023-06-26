import { roboto } from '@/common/fonts'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { StoreProvider } from '@/store/StoreProvider'
import classNames from 'classnames'
import { Suspense } from 'react'
import './globals.css'
import styles from './layout.module.css'
import Loading from './loading'
export const metadata = {
	title: 'Билетопоиск',
	description: 'shri2023: React homework app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='ru'>
			<body className={classNames(styles.wrapper, roboto.variable)}>
				<StoreProvider>
					<Header />
					<Suspense fallback={<Loading />}>
						<main className={styles.content}>{children}</main>
					</Suspense>
					<Footer />
				</StoreProvider>
			</body>
		</html>
	)
}
