import { differentiators } from '@/data/content';

export function Differentiators() {
  return (
    <section className="section-container">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Why partner</span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            Strategic, full-stack chatbot builds from discovery to scaling
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            I bridge conversation design, ML engineering, and growth strategy to ensure your assistant is delightful for customers and efficient for operators.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200/60 bg-white/70 p-6 shadow-lg dark:border-white/10 dark:bg-slate-900/70">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/50 p-5 dark:bg-white/5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
