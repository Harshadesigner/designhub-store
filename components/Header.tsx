import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashboardPage() {
  const cards = [
    { label: 'Total Sales', value: '$18,240', tone: 'text-violet-300' },
    { label: 'Downloads', value: '8,420', tone: 'text-sky-300' },
    { label: 'Top Product', value: 'Brand Kit', tone: 'text-amber-300' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-200">Creator dashboard</p>
            <h1 className="mt-2 text-4xl font-black text-white">Performance overview</h1>
          </div>
          <button className="rounded-full bg-violet-500 px-5 py-3 font-semibold text-white shadow-glow hover:bg-violet-400">
            Upload new asset
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.label} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-slate-300">{card.label}</p>
              <div className={`mt-4 text-3xl font-black ${card.tone}`}>{card.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold text-white">Recent sales</h2>
            <div className="mt-6 space-y-4">
              {['Brand Identity Kit', 'Website Landing Kit', 'Minimal Social Pack'].map((sale, index) => (
                <div key={sale} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-slate-200">
                  <span>{sale}</span>
                  <span className="text-violet-300">${[39, 59, 24][index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-violet-500/10 to-sky-500/10 p-6">
            <h2 className="text-xl font-bold text-white">Seller notes</h2>
            <ul className="mt-6 space-y-4 text-slate-200">
              <li>• Best conversion from UI kit category.</li>
              <li>• 12 new reviews this week.</li>
              <li>• Add bundle discount to increase average order value.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
