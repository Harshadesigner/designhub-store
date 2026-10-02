import Link from 'next/link';
import { ArrowLeft, Check, ShieldCheck, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/data/store';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((item) => item.id === params.id) ?? products[0];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link href="/shop" className="mb-8 inline-flex items-center gap-2 text-sm text-violet-300 hover:text-violet-200">
          <ArrowLeft className="h-4 w-4" /> Back to marketplace
        </Link>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-violet-500/15 via-slate-900 to-sky-500/10 p-6">
            <div className="rounded-[24px] border border-white/10 bg-slate-900 p-8">
              <div className="mb-6 flex items-center justify-between text-sm text-slate-300">
                <span className="rounded-full bg-violet-500/15 px-3 py-1 text-violet-200">{product.category}</span>
                <span>Best seller</span>
              </div>

              <div className="h-[360px] rounded-[24px] bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 p-6 shadow-glow">
                <div className="flex h-full items-center justify-center rounded-[20px] border border-white/20 bg-slate-950/40 text-3xl font-black text-white/90">
                  {product.name}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-amber-300">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium">{product.rating} · {product.sales} sales</span>
            </div>

            <h1 className="mt-4 text-4xl font-black text-white">{product.name}</h1>
            <p className="mt-4 text-lg text-slate-300">{product.description}</p>

            <div className="mt-6 flex items-end gap-4">
              <span className="text-4xl font-black text-violet-300">${product.price}</span>
              <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
            </div>

            <div className="mt-6 flex gap-4">
              <Link href="/checkout" className="inline-flex flex-1 items-center justify-center rounded-full bg-violet-500 px-6 py-3 font-semibold text-white shadow-glow hover:bg-violet-400">
                Buy now
              </Link>
              <Link href="/cart" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10">
                Add to cart
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-emerald-200">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Secure checkout and instant file delivery after payment.
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {['Commercial license included', 'Editable layered files', 'Instant download access', 'Lifetime updates & support'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-200">
                  <div className="rounded-full bg-emerald-500/15 p-1 text-emerald-300">
                    <Check className="h-4 w-4" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
