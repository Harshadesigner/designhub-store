import Link from 'next/link';
import { ShoppingBag, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-sky-500 text-lg font-black text-white shadow-glow">
            D
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white">DesignHub</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Marketplace</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/shop" className="hover:text-white">Shop</Link>
          <Link href="/sell" className="hover:text-white">Sell</Link>
          <Link href="/dashboard" className="hover:text-white">Dashboard</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 md:inline-flex">
            <Search className="h-4 w-4" />
          </button>
          <Link href="/cart" className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 hover:text-white">
            <ShoppingBag className="h-4 w-4" />
          </Link>
          <Link href="/checkout" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-glow hover:bg-violet-400">
            <User className="h-4 w-4" /> Buyer
          </Link>
        </div>
      </div>
    </header>
  );
}
