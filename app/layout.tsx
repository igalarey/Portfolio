import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Imanol Galarza | Portfolio',
	description: 'Personal portfolio',
	icons: {
		icon: '/favicon.png'
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
				<link rel='icon' href='/favicon.png' sizes='any' />
			</head>
			<body className={inter.className}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<Header />
					<main className='min-h-screen'>{children}</main>
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
