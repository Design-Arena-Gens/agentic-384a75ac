import { workflow } from '@/data/content';

export function Process() {
  return (
    <section id="process" className="section-container">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Process</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Proven framework to launch and scale AI assistants</h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Collaborative sprints with transparent deliverables, detailed documentation, and measurable milestones at every step.
        </p>
      </div>
      <div className="relative grid gap-6 md:grid-cols-2">
        {workflow.map((stage, index) => (
          <div
            key={stage.phase}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-lg transition hover:-translate-y-1 hover:border-primary-400/60 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/70"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{stage.phase}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{stage.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
