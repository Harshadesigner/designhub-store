import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SellPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Header />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-violet-500/20 bg-gradient-to-br from-violet-500/15 to-sky-500/10 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-violet-200">Sell your work</p>
            <h1 className="mt-3 text-4xl font-black text-white">Monetize your creative assets</h1>
            <p className="mt-4 text-slate-300">
              Upload premium templates, mockups, and digital products to reach buyers worldwide.
            </p>

            <div className="mt-8 space-y-4">
              {['Create a seller profile', 'Upload your design files', 'Set pricing and categories', 'Start getting sales'].map((step) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
            <form className="space-y-6">
              <div>
                <label className="mb-2 block text-sm text-slate-200">Product title</label>
                <input className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-violet-400" placeholder="Modern SaaS Dashboard Kit" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-200">Category</label>
                <select className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400">
                  <option>UI Kit</option>
                  <option>Branding</option>
                  <option>Mockup</option>
                  <option>Template</option>
                  <option>Illustration</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-200">Price</label>
                <input type="number" className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="49" />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-200">Description</label>
                <textarea rows={5} className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-violet-400" placeholder="Describe the design, features, and included files..." />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-200">Upload files</label>
                <div className="rounded-2xl border border-dashed border-violet-400/40 bg-slate-900 px-4 py-8 text-center text-slate-300">
                  Drag and drop files here or browse
                </div>
              </div>

              <button type="submit" className="w-full rounded-full bg-violet-500 px-6 py-3 font-semibold text-white shadow-glow hover:bg-violet-400">
                Publish product
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
