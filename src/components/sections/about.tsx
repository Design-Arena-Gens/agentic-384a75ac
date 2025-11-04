export function About() {
  return (
    <section className="section-container">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">About</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Hey, I’m Isabella Chen — your conversational catalyst</h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            I’ve shipped AI chatbot initiatives for venture-backed startups and global enterprises across SaaS, fintech, retail, and operations. With a background in conversation design and full-stack engineering, I translate complex processes into natural, measurable customer experiences.
          </p>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Whether you need a proof-of-value pilot or a multi-channel rollout, I plug into your team as a strategic partner focused on long-term impact.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              '7+ years building AI products',
              'HubSpot, Zendesk, Salesforce certified',
              'LLM safety & evaluation stack',
              'Workshops + enablement for your teams'
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200/60 bg-white/80 p-4 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-primary-500/20 blur-3xl" aria-hidden />
          <div className="absolute -right-10 bottom-10 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-2xl dark:border-white/10 dark:bg-slate-900/70">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Working together looks like:</h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li>Discovery session to align on goals, users, tech stack, and constraints.</li>
              <li>Conversation blueprints, safety rails, and integration architecture.</li>
              <li>Rapid prototyping with evaluation checkpoints and stakeholder reviews.</li>
              <li>Launch support, team training, and ongoing optimization roadmap.</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
