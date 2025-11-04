import { caseStudies } from '@/data/content';

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-container">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Results</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Recent wins with forward-thinking teams</h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Each engagement blends quantitative ROI with qualitative brand experience improvements. Here are a few highlights.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {caseStudies.map((project) => (
          <article
            key={project.name}
            className="flex h-full flex-col gap-5 rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-primary-400/60 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70"
          >
            <div>
              <span className="inline-flex items-center rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-300">
                {project.industry}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="mt-2 text-sm font-semibold text-primary-600 dark:text-primary-300">{project.result}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            </div>
            <ul className="mt-auto space-y-2 text-sm text-slate-500 dark:text-slate-400">
              {project.metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-500" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
