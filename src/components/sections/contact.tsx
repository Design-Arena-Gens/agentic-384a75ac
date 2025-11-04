'use client';

import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  const handleSubmit = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log('Contact request', Object.fromEntries(formData.entries()));
    setStatus('submitted');
  };

  return (
    <section id="contact" className="section-container">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">Contact</span>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">Let’s scope your chatbot project</h2>
        <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
          Share a snapshot of your goals and current systems. I respond within 24 hours with next steps.
        </p>
      </div>
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200/60 bg-white/80 p-8 shadow-xl dark:border-white/10 dark:bg-slate-900/70">
        {status === 'submitted' ? (
          <div className="rounded-2xl bg-primary-500/10 p-10 text-center text-primary-700 dark:text-primary-200">
            <h3 className="text-2xl font-semibold">Thanks for reaching out!</h3>
            <p className="mt-3 text-base text-primary-800/80 dark:text-primary-100/80">
              Your message is on its way. I’ll follow up with a calendar link and discovery questions shortly.
            </p>
          </div>
        ) : (
          <form action={handleSubmit} className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Name</span>
              <input
                name="name"
                type="text"
                required
                className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Work email</span>
              <input
                name="email"
                type="email"
                required
                className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="you@company.com"
              />
            </label>
            <label className="md:col-span-2 flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Company</span>
              <input
                name="company"
                type="text"
                className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="Company name"
              />
            </label>
            <label className="md:col-span-2 flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">What are you hoping to build?</span>
              <textarea
                name="project"
                required
                rows={4}
                className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                placeholder="Share your goals, use cases, and key integrations."
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Budget range</span>
              <select
                name="budget"
                className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a range
                </option>
                <option>$5k – $10k</option>
                <option>$10k – $25k</option>
                <option>$25k – $50k</option>
                <option>$50k+</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Timeline</span>
              <select
                name="timeline"
                className="rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-200 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
                defaultValue=""
              >
                <option value="" disabled>
                  How soon?
                </option>
                <option>ASAP</option>
                <option>1-2 months</option>
                <option>3-6 months</option>
                <option>Exploratory</option>
              </select>
            </label>
            <button
              type="submit"
              className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:from-primary-400 hover:to-purple-500"
            >
              Submit inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
