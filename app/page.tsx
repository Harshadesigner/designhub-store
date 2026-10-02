import Link from 'next/link';
import { ArrowRight, BadgeCheck, ShieldCheck, Sparkles, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { products, categories, stats } from '@/data/store';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <Hero />

      <section className="mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="text-3xl font-black text-violet-400">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Categories"
          title="Discover design assets for every creative need"
          description="From product mockups to premium UI kits, everything you need to launch faster and look sharper."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <div key={category.name} className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-sky-500/10 p-5 hover:border-violet-400/50 transition-all duration-300">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-xl text-violet-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{category.items} assets</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trending now"
          title="High-converting design packs loved by creators"
          description="Built for startups, agencies, and freelancers who need polished, ready-to-use creative assets."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-violet-500/20 bg-gradient-to-r from-violet-900/80 via-slate-900 to-sky-900/70 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                <Sparkles className="h-4 w-4" /> Top seller
              </p>
              <h2 className="max-w-xl text-3xl font-black text-white md:text-5xl">
                Sell your design work to a global creative audience.
              </h2>
              <p className="mt-4 max-w-lg text-slate-200">
                Launch your storefront, upload premium assets, and start earning from every download.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link href="/sell" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:bg-violet-400">
                  Start selling <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/shop" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Explore marketplace
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-300">Creator earnings</p>
                  <div className="mt-2 text-4xl font-black text-white">$84.6K</div>
                </div>
                <div className="rounded-2xl bg-emerald-500/15 p-3 text-emerald-300">
                  <BadgeCheck className="h-8 w-8" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { label: 'Product sales', value: '$36.8K', color: 'text-violet-300' },
                  { label: 'Monthly downloads', value: '24.1K', color: 'text-sky-300' },
                  { label: 'Avg. customer rating', value: '4.9/5', color: 'text-amber-300' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="text-slate-300">{item.label}</span>
                    <span className={`font-bold ${item.color}`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why designers choose us"
          title="Built for creators who want speed, trust, and conversion"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Secure payments', text: 'Fast checkout with trusted gateways and instant purchase access.', icon: <ShieldCheck className="h-6 w-6" /> },
            { title: 'High-quality discovery', text: 'Curated collections help buyers find your best-selling designs faster.', icon: <Star className="h-6 w-6" /> },
            { title: 'Creator-focused tools', text: 'Upload assets, manage sales, and track performance from a single dashboard.', icon: <Sparkles className="h-6 w-6" /> },
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-2xl bg-violet-500/15 p-3 text-violet-300">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-slate-300">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
