import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <h1 className="text-3xl font-black text-white">Checkout</h1>

            <form className="mt-8 space-y-6">
              <div>
                <label className="mb-2 block text-sm text-slate-200">Full name</label>
                <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="Alex Morgan" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-200">Email</label>
                <input type="email" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="alex@email.com" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-200">Card number</label>
                <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="4242 4242 4242 4242" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-200">Expiry date</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="08/29" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-slate-200">CVC</label>
                  <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="123" />
                </div>
              </div>

              <button type="submit" className="w-full rounded-full bg-violet-500 px-6 py-3 font-semibold text-white shadow-glow hover:bg-violet-400">
                Pay securely
              </button>
            </form>
          </div>

          <aside className="rounded-[28px] border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-sky-500/10 p-8">
            <h2 className="text-2xl font-bold text-white">Purchase summary</h2>

            <div className="mt-6 space-y-4">
              {[
                { name: 'Brand Identity Kit', price: 39 },
                { name: 'Landing Page Templates', price: 59 },
              ].map((item) => (
                <div key={item.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                  <span className="text-slate-200">{item.name}</span>
                  <span className="font-semibold text-violet-200">${item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 text-slate-200">
              <div className="flex justify-between"><span>Subtotal</span><span>$98</span></div>
              <div className="mt-3 flex justify-between"><span>Tax</span><span>$8</span></div>
              <div className="mt-4 flex justify-between text-xl font-black text-white"><span>Total</span><span>$106</span></div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
