import Link from 'next/link';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/store';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-glow">
      <div className="relative">
        <div className="h-52 bg-gradient-to-br from-violet-500/80 via-indigo-500/70 to-sky-500/60 p-4">
          <div className="flex h-full items-end rounded-[22px] border border-white/20 bg-slate-950/30 p-4 text-lg font-black text-white">
            {product.name}
          </div>
        </div>

        <button className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/60 p-2 text-slate-100 backdrop-blur-sm">
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-violet-200">{product.category}</p>
            <h3 className="mt-2 text-xl font-bold text-white">{product.name}</h3>
          </div>
          <span className="rounded-full bg-violet-500/10 px-2 py-1 text-xs font-semibold text-violet-200">{product.tag}</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm text-slate-300">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-amber-300">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-violet-300">${product.price}</div>
            <div className="text-xs text-slate-500 line-through">${product.originalPrice}</div>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <Link href={`/product/${product.id}`} className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10">
            View item
          </Link>
          <button className="rounded-full bg-violet-500 p-3 text-white shadow-glow hover:bg-violet-400">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
