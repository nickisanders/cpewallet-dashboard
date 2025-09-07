'use client'

import { useMemo } from 'react'
import { usePrivy, useLinkAccount } from '@privy-io/react-auth'
import { Box, Button, Typography, Chip } from '@mui/material'
import { AccountBalanceWallet, Logout } from '@mui/icons-material'

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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {walletAddrs.length > 0 ? (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Chip
                        icon={<AccountBalanceWallet />}
                        label={
                            <Box>
                                <Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
                                    {short(walletAddrs[0])}
                                </Typography>
                                {walletAddrs.length > 1 && (
                                    <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>
                                        +{walletAddrs.length - 1} more
                                    </Typography>
                                )}
                            </Box>
                        }
                        variant="outlined"
                        sx={{
                            backgroundColor: 'success.light',
                            color: 'success.contrastText',
                            borderColor: 'success.main',
                            '& .MuiChip-icon': {
                                color: 'success.main'
                            }
                        }}
                    />
                </Box>
            ) : (
                <Button
                    variant="outlined"
                    startIcon={<AccountBalanceWallet />}
                    onClick={() => linkWallet()}
                    sx={{
                        textTransform: 'none',
                        fontSize: '0.875rem',
                        borderColor: 'grey.300',
                        color: 'text.primary',
                        '&:hover': {
                            backgroundColor: 'grey.50',
                            borderColor: 'grey.400',
                        }
                    }}
                >
                    Link a wallet
                </Button>
            )}

            <Button
                variant="contained"
                endIcon={<Logout />}
                onClick={() => logout()}
                sx={{
                    backgroundColor: 'grey.900',
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                        backgroundColor: 'grey.800',
                    }
                }}
            >
                Logout
            </Button>
        </Box>
    )
}
