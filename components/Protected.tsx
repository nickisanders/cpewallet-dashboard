'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { usePrivy } from '@privy-io/react-auth'

export default function Protected({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const { ready, authenticated } = usePrivy()

    useEffect(() => {
        if (ready && !authenticated) {
            router.replace('/signup')
        }
    }, [ready, authenticated, router])

    if (!ready) {
        return (
            <div className="min-h-screen grid place-items-center">
                <div className="animate-pulse text-gray-500">Loading…</div>
            </div>
        )
    }
    if (!authenticated) return null

    return <>{children}</>
}
