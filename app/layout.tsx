import './globals.css'
import PrivyProviders from '../components/PrivyProvider'
import MuiProvider from '../components/MuiProvider'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat'
})

export const metadata = {
  title: 'CPE Wallet',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <MuiProvider>
          <PrivyProviders>{children}</PrivyProviders>
        </MuiProvider>
      </body>
    </html>
  )
}
