'use client'

import { useEffect, useState } from 'react'
import { useLogin, usePrivy } from '@privy-io/react-auth'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginCard() {
    const router = useRouter()
    const params = useSearchParams()
    const { ready, authenticated } = usePrivy()
    const [pending, setPending] = useState(false)

    // Prefetch targets so the redirect feels instant
    useEffect(() => {
        router.prefetch('/dashboard')
        router.prefetch('/onboarding')
    }, [router])

    const { login } = useLogin({
        onComplete: ({ isNewUser }) => {
            setPending(false)
            const returnTo = params.get('returnTo')
            const dest = returnTo || (isNewUser ? '/onboarding' : '/dashboard')
            // replace so back button does not return to /signup
            router.replace(dest)
        },
        onError: (err) => {
            console.error('Privy login failed:', err)
            setPending(false)
            // show a toast or inline error if you want
        },
    })

    // If the user is already authenticated, skip the button entirely
    useEffect(() => {
        if (ready && authenticated) {
            router.replace('/dashboard')
        }
    }, [ready, authenticated, router])

    const disabled = !ready || pending || authenticated

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md text-center">
            <h1 className="text-2xl font-semibold mb-3">Log in or sign up</h1>
            <p className="text-gray-600 text-sm mb-6">Continue with email, socials, or a wallet</p>

            <button
                onClick={() => { setPending(true); login() }}
                disabled={disabled}
                aria-busy={pending}
                className="w-full bg-black text-white py-2 rounded-md disabled:opacity-50"
            >
                {pending ? 'Opening…' : 'Continue'}
            </button>

            <p className="text-xs text-gray-500 mt-4">Protected by Privy</p>
        </div>
    )
}
