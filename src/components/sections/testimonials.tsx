import { testimonials } from '@/data/content';

export function Testimonials() {
  return (
    <section id="testimonials" className="section-container">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Testimonials</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Client partners on the impact</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/60 bg-white/80 p-8 text-left shadow-lg transition hover:-translate-y-1 hover:border-primary-400/60 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70"
          >
            <blockquote className="text-lg font-medium text-slate-700 dark:text-slate-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
              {testimonial.name} · {testimonial.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
