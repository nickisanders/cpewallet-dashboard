type Track = { name: string; earned: number; goal: number }

function Bar({ pct }: { pct: number }) {
    return (
        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-[#0479BE] to-[#00B8F1]"
                style={{ width: `${Math.min(100, Math.max(0, pct))}%` }}
            />
        </div>
    )
}

export default function SidebarProgress({ tracks }: { tracks: Track[] }) {
    return (
        <aside className="bg-white rounded-xl border p-5">
            <h3 className="text-sm font-semibold tracking-wide text-gray-900 mb-4">MY CPE PROGRESS</h3>
            <div className="space-y-5">
                {tracks.map((t) => {
                    const pct = Math.round((t.earned / t.goal) * 100)
                    return (
                        <div key={t.name} className="space-y-1.5">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium text-gray-900">{t.name}</span>
                                <span className="text-gray-600">{pct}%</span>
                            </div>
                            <Bar pct={pct} />
                            <div className="text-xs text-[#0479BE]">{t.earned} CPE Credits</div>
                        </div>
                    )
                })}
            </div>
        </aside>
    )
}
