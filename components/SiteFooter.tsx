export default function SiteFooter() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
                <div className="space-y-3">
                    <img src="/branding/privy-login-logo.png" alt="CPE Wallet" className="h-6 w-auto" />
                    <nav className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                        <a href="#">Careers</a>
                        <a href="#">Referral Program</a>
                        <a href="#">Press</a>
                    </nav>
                    <div className="flex gap-3 text-gray-400 pt-2">
                        <a href="#" aria-label="Twitter">𝕏</a>
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="YouTube">▶︎</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <div className="max-w-md ml-auto">
                        <h4 className="font-semibold text-gray-900 mb-2">Get the latest updates</h4>
                        <p className="text-sm text-gray-600 mb-3">about CPE’s new features and product updates.</p>
                        <form className="flex gap-3">
                            <input
                                type="email"
                                placeholder="Enter Email address"
                                className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B8F1]"
                            />
                            <button type="submit" className="rounded-md bg-[#0b3b66] text-white px-4 py-2 text-sm">Subscribe</button>
                        </form>
                        <div className="mt-4 text-xs text-gray-500 flex gap-4">
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
