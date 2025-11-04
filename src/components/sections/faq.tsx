import { faqs } from '@/data/content';

export function FAQ() {
  return (
    <section id="faq" className="section-container">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">FAQ</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Answers before we meet</h2>
      </div>
      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200/60 bg-white/70 p-6 shadow-lg transition hover:border-primary-400/60 dark:border-white/10 dark:bg-slate-900/70"
          >
            <summary className="cursor-pointer text-lg font-semibold text-slate-900 transition group-open:text-primary-600 dark:text-white dark:group-open:text-primary-300">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
