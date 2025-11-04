import Link from 'next/link';

export function CTA() {
  return (
    <section className="section-container">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-purple-600 to-blue-600 p-10 text-white shadow-2xl">
        <div className="absolute -top-20 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" aria-hidden />
        <div className="relative z-10 grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">Get started</span>
            <h2 className="mt-4 text-3xl font-bold">Ready to ship an AI assistant that feels on-brand?</h2>
            <p className="mt-4 max-w-xl text-base text-white/80">
              Tell me about your current workflows, goals, and tech stack. I’ll come prepared with quick win ideas and a roadmap for sustainable automation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-primary-600 shadow-lg transition hover:shadow-xl"
            >
              Book a Strategy Call
            </Link>
            <Link
              href="mailto:hello@conversationalcatalyst.ai"
              className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
            >
              hello@conversationalcatalyst.ai
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
