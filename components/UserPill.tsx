'use client'

import { useMemo } from 'react'
import { usePrivy, useLinkAccount } from '@privy-io/react-auth'

function short(addr: string) {
    return addr.slice(0, 6) + '…' + addr.slice(-4)
}

export default function UserPill() {
    const { ready, authenticated, user, logout } = usePrivy()
    const { linkWallet } = useLinkAccount()

    const walletAddrs = useMemo(() => {
        if (!user) return []
        // Prefer convenience fields, then fall back to linkedAccounts
        const set = new Set<string>()
        if ((user as any).wallet?.address) set.add((user as any).wallet.address)
        if ((user as any).smartWallet?.address) set.add((user as any).smartWallet.address)
        for (const acc of user.linkedAccounts ?? []) {
            if ((acc as any).type === 'wallet' && (acc as any).address) set.add((acc as any).address)
            if ((acc as any).type === 'smart_wallet' && (acc as any).address) set.add((acc as any).address)
        }
        return [...set]
    }, [user])

    if (!(ready && authenticated) || !user) return null

    return (
        <div className="flex items-center gap-3">
            {walletAddrs.length > 0 ? (
                <div className="text-sm text-gray-700">
                    Connected&nbsp;
                    <span className="font-medium">{short(walletAddrs[0])}</span>
                    {walletAddrs.length > 1 && (
                        <span className="text-gray-500"> +{walletAddrs.length - 1} more</span>
                    )}
                </div>
            ) : (
                <button
                    onClick={() => linkWallet()}
                    className="text-sm px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50"
                >
                    Link a wallet
                </button>
            )}

            <button
                onClick={() => logout()}
                className="text-sm px-3 py-1 rounded-md bg-gray-900 text-white hover:bg-black"
            >
                Logout
            </button>
        </div>
    )
}
