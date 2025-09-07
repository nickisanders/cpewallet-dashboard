'use client'

import Link from 'next/link'
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    LinearProgress,
    Container,
    IconButton,
    useMediaQuery,
    useTheme
} from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import UserPill from '../components/UserPill'

type Props = {
    earned: number
    total: number
}

export default function TopNav({ earned, total }: Props) {
    const pct = Math.min(100, Math.round((earned / total) * 100))
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <AppBar position="sticky" elevation={1}>
            <Container maxWidth="xl">
                <Toolbar
                    sx={{
                        minHeight: '64px !important',
                        px: { xs: 1, sm: 2 },
                        gap: 2,
                        justifyContent: 'space-between'
                    }}
                >
                    {/* Left: Brand + Navigation */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                        <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                            <Box component="img"
                                src="/branding/cpewallet-cropped-logo.png"
                                alt="CPE Wallet"
                                sx={{ height: 24, width: 'auto' }}
                            />
                        </Link>

                        {!isMobile && (
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button
                                    component={Link}
                                    href="/dashboard"
                                    sx={{
                                        color: 'text.primary',
                                        fontWeight: 600,
                                        textTransform: 'none',
                                        fontSize: '0.875rem'
                                    }}
                                >
                                    Dashboard
                                </Button>
                                <Button
                                    component={Link}
                                    href="/profile"
                                    sx={{
                                        color: 'text.secondary',
                                        textTransform: 'none',
                                        fontSize: '0.875rem',
                                        '&:hover': {
                                            color: 'text.primary'
                                        }
                                    }}
                                >
                                    Profile
                                </Button>
                            </Box>
                        )}
                    </Box>

                    {/* Center: Progress Meter */}
                    {!isMobile && (
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            minWidth: 320,
                            maxWidth: 400,
                            flex: 1,
                            justifyContent: 'center'
                        }}>
                            <Box sx={{ width: '100%', maxWidth: 280 }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 0.5
                                }}>
                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                                        {earned}/{total} TOTAL CPE Credits
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                                        {pct}%
                                    </Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate"
                                    value={pct}
                                    sx={{
                                        height: 8,
                                        borderRadius: 4,
                                        backgroundColor: 'grey.200',
                                        '& .MuiLinearProgress-bar': {
                                            borderRadius: 4,
                                            background: 'linear-gradient(90deg, #0479BE 0%, #00B8F1 100%)'
                                        }
                                    }}
                                />
                            </Box>

                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={{
                                    backgroundColor: '#0b3b66',
                                    color: 'white',
                                    textTransform: 'none',
                                    borderRadius: 1,
                                    px: 2,
                                    py: 1,
                                    fontSize: '0.875rem',
                                    fontWeight: 500,
                                    whiteSpace: 'nowrap',
                                    '&:hover': {
                                        backgroundColor: '#094060',
                                    }
                                }}
                            >
                                Add CPE
                            </Button>
                        </Box>
                    )}

                    {/* Right: User Pill */}
                    <UserPill />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
