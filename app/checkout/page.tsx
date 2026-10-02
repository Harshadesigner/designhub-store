import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CartPage() {
  const items = [
    { name: 'Creator Brand Kit', price: 39, quantity: 1 },
    { name: 'Social Media Bundle', price: 59, quantity: 2 },
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white">Your cart</h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-5">
                <div>
                  <h3 className="text-lg font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-slate-300">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-violet-300">${item.price * item.quantity}</div>
                  <button className="mt-2 text-sm text-slate-300 hover:text-white">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold text-white">Order summary</h2>

            <div className="mt-6 space-y-3 text-slate-300">
              <div className="flex justify-between"><span>Subtotal</span><span>${total}</span></div>
              <div className="flex justify-between"><span>Service fee</span><span>$6</span></div>
              <div className="flex justify-between"><span>Tax</span><span>$4</span></div>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between text-lg font-bold text-white">
                <span>Total</span>
                <span>${total + 10}</span>
              </div>
            </div>

            <Link href="/checkout" className="mt-8 block rounded-full bg-violet-500 px-6 py-3 text-center font-semibold text-white shadow-glow hover:bg-violet-400">
              Proceed to checkout
            </Link>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
