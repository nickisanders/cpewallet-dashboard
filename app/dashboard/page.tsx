import Protected from '../../components/Protected'
import TopNav from '../../components/TopNav'
import SidebarProgress from '../../components/SidebarProgress'
import OpportunityCard, { Opportunity } from '../../components/OpportunityCard'

export default function DashboardPage() {
    const earned = 40
    const total = 100
    const tracks = [
        { name: 'Accounting', earned: 6, goal: 7.5 },
        { name: 'Auditing', earned: 1.5, goal: 7.5 },
        { name: 'Taxation', earned: 3, goal: 7.5 },
        { name: 'Ethics', earned: 6, goal: 7.5 },
    ]
    const items: Opportunity[] = [
        { id: '1', title: 'Data Analytics for Financial Professionals', org: 'Deloitte', dateISO: '2025-06-10', credits: 6 },
        // …rest
    ]

    return (
        <Protected>
            <TopNav earned={earned} total={total} />
            <main className="bg-gray-50">
                <div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-[260px,1fr]">
                    <SidebarProgress tracks={tracks} />
                    <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {items.map(i => <OpportunityCard key={i.id} item={i} />)}
                    </section>
                </div>
            </main>
        </Protected>
    )
}
