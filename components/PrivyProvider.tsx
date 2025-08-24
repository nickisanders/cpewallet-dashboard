'use client'

import { PrivyProvider } from '@privy-io/react-auth'

export default function PrivyProviders({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID as string}
      config={{
        // Create embedded wallets for users who don’t have one yet
        embeddedWallets: {
          ethereum: { createOnLogin: 'users-without-wallets' },
        },
        // Optional: match modal theme to your brand
        appearance: {
          // Use your brand color or 'light' | 'dark'
          theme: '#0479BE',
          // You can further override colors via CSS variables (see step 6)
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}

