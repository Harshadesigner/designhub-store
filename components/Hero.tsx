import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-lg font-black text-white">D</div>
            <div>
              <div className="text-lg font-black text-white">DesignHub</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Marketplace</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-300">Premium digital assets for ambitious brands, creators, and startup teams.</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Explore</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/sell">Sell your design</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Help center</li>
            <li>Licensing</li>
            <li>Refund policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Connect</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>hello@designhub.store</li>
            <li>Instagram</li>
            <li>Behance</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-400">
        © 2026 DesignHub Store. All rights reserved.
      </div>
    </footer>
  );
}
