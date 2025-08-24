import Link from 'next/link'

export type Opportunity = {
    id: string
    title: string
    org: string
    dateISO: string
    credits: number
}

function formatDate(iso: string) {
    try {
        const d = new Date(iso)
        return d.toLocaleDateString(undefined, { month: '2-digit', day: '2-digit', year: '2-digit' })
    } catch {
        return iso
    }
}

export default function OpportunityCard({ item }: { item: Opportunity }) {
    return (
        <article className="bg-white rounded-xl border shadow-sm p-4 hover:shadow transition">
            <h4 className="font-semibold text-gray-900 leading-snug mb-1">{item.title}</h4>
            <div className="text-sm text-gray-500">{item.org}</div>

            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                {/* calendar icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M7 2v3M17 2v3M3 9h18M4 6h16a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{formatDate(item.dateISO)}</span>
            </div>

            <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-[#e6f6fd] text-[#0479BE] text-xs font-semibold px-3 py-1">
                    {item.credits} Credits
                </span>

                <Link
                    href={`/opportunities/${item.id}`}
                    className="text-sm font-medium text-[#0b3b66] hover:opacity-90 inline-flex items-center gap-2"
                >
                    Sign Up
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </article>
    )
}
