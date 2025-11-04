import { services } from '@/data/content';
import { Icon } from '@/components/icons';

export function Services() {
  return (
    <section id="services" className="section-container">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Services</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Chatbots engineered for measurable outcomes</h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          From discovery workshops to ongoing optimization, every engagement is designed to reduce response times, unlock new revenue, and protect brand trust.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="relative flex h-full flex-col gap-5 rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-primary-400/60 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500">
              <Icon name={service.icon} className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
            </div>
            <ul className="mt-auto space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
