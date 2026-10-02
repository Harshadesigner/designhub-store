import Link from 'next/link';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pt-20">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
            <ShieldCheck className="h-4 w-4" /> Trusted by 50k+ buyers
          </div>

          <h1 className="max-w-xl text-5xl font-black leading-none tracking-tight text-white md:text-6xl lg:text-7xl">
            Buy premium <span className="gradient-text">design assets</span> from creators worldwide.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Discover high-converting templates, brand kits, UI systems, product mockups, and digital products built to accelerate your next launch.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 font-semibold text-white shadow-glow transition hover:bg-violet-400">
              Shop now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/sell" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10">
              <PlayCircle className="h-4 w-4" /> Sell your design
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span>4.9/5 average rating</span>
            <span>Instant digital delivery</span>
            <span>Secure checkout</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-violet-500/20 bg-gradient-to-br from-violet-500/20 via-slate-900 to-sky-500/15 p-5 shadow-glow">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-200">Top seller</span>
                <span className="text-sm text-slate-300">$89</span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="h-60 rounded-[22px] bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 p-4">
                  <div className="flex h-full items-end rounded-[18px] border border-white/20 bg-slate-950/35 p-4 text-xl font-black text-white">
                    UI Kit Pro
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-28 rounded-[22px] bg-gradient-to-br from-sky-500/80 to-violet-500/80 p-4">
                    <div className="flex h-full items-end rounded-[16px] border border-white/20 bg-slate-950/30 p-3 text-lg font-bold text-white">
                      Brand System
                    </div>
                  </div>
                  <div className="h-28 rounded-[22px] border border-white/10 bg-slate-900 p-4">
                    <div className="flex h-full items-end rounded-[16px] bg-gradient-to-br from-slate-800 to-slate-700 p-3 text-lg font-bold text-white">
                      Mockups
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
