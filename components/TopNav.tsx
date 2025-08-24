'use client'

import Link from 'next/link'
import UserPill from '../components/UserPill'

type Props = {
    earned: number
    total: number
}

export default function TopNav({ earned, total }: Props) {
    const pct = Math.min(100, Math.round((earned / total) * 100))

    return (
        <header className="sticky top-0 z-20 w-full border-b bg-white">
            <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
                {/* Left: Brand + primary nav */}
                <div className="flex items-center gap-6">
                    <Link href="/dashboard" className="flex items-center gap-2">
                        <img src="/branding/cpewallet-cropped-logo.png" alt="CPE Wallet" className="h-6 w-auto" />
                    </Link>
                    <nav className="hidden md:flex items-center gap-5 text-sm text-gray-700">
                        <Link href="/dashboard" className="font-medium text-gray-900">Dashboard</Link>
                        <Link href="/profile" className="hover:text-gray-900">Profile</Link>
                    </nav>
                </div>

                {/* Center: progress meter */}
                <div className="hidden md:flex items-center gap-3 min-w-[320px]">
                    <div className="w-72">
                        <div className="flex items-center justify-between text-[11px] text-gray-600 mb-1">
                            <span>{earned}/{total} TOTAL CPE Credits</span>
                            <span>{pct}%</span>
                        </div>
                        <div className="h-3 rounded-full bg-gray-200 overflow-hidden">
                            <div
                                className="h-full rounded-full bg-gradient-to-r from-[#0479BE] to-[#00B8F1] transition-all"
                                style={{ width: `${pct}%` }}
                                aria-valuenow={pct}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                role="progressbar"
                            />
                        </div>
                    </div>
                    <button className="shrink-0 inline-flex items-center gap-2 rounded-md bg-[#0b3b66] text-white text-sm px-3 py-2 hover:opacity-95">
                        <span className="text-base leading-none">＋</span>
                        Add CPE
                    </button>
                </div>

                {/* Right: user pill */}
                <UserPill />
            </div>
        </header>
    )
}
