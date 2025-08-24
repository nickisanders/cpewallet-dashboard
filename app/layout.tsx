import './globals.css'
import PrivyProviders from '@/components/PrivyProvider'

export const metadata = { title: 'CPE Wallet' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PrivyProviders>{children}</PrivyProviders>
      </body>
    </html>
  )
}
