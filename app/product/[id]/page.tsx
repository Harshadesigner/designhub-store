import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { products } from '@/data/store';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Marketplace"
          title="Explore premium design collections"
          description="Browse best-selling templates, mockups, UI kits, illustrations, and brand assets."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {['All', 'UI Kits', 'Mockups', 'Branding', 'Templates', 'Illustration'].map((filter) => (
            <button
              key={filter}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                filter === 'All'
                  ? 'border-violet-500 bg-violet-500/15 text-violet-200'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-violet-400/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
