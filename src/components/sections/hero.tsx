'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const highlights = [
  { metric: '40%+', label: 'Average cost savings per assistant' },
  { metric: '3-6 wks', label: 'Typical launch timeline' },
  { metric: '95%+', label: 'Intent detection accuracy' }
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-80" aria-hidden />
      <div className="absolute inset-0 grid-overlay bg-grid-light opacity-50 dark:bg-grid-dark" aria-hidden />
      <div className="section-container relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-white/80 px-4 py-1 text-sm font-medium text-primary-600 shadow-sm backdrop-blur dark:bg-slate-900/70 dark:text-primary-300"
          >
            Freelance AI Chatbot Strategist
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
          >
            Build AI assistants that unlock growth and elevate every customer conversation.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300"
          >
            I partner with modern teams to design, build, and optimize AI chatbots that automate support, qualify leads, and deliver on-brand experiences across the entire customer journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary-500 to-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:from-primary-400 hover:to-purple-500"
            >
              Start a Project
            </Link>
            <Link
              href="#case-studies"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/40 px-8 py-3 text-base font-semibold text-slate-700 transition hover:border-primary-400 hover:text-primary-500 dark:border-white/10 dark:text-slate-200"
            >
              View Outcomes
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative flex w-full max-w-md flex-col gap-4 rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/80"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">Playbook</span>
            <span className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-semibold text-primary-600 dark:text-primary-300">LLM Ops</span>
          </div>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Conversational strategy, guardrails, training data, integrations, measurement. Ship assistants that deliver ROI and stay on-brand once deployed.
          </p>
          <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary-500" />Voice, tone, escalation scripting</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary-500" />Hybrid retrieval + reasoning workflows</li>
            <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-primary-500" />Human-in-the-loop dashboards</li>
          </ul>
          <div className="grid grid-cols-3 gap-4 rounded-2xl bg-slate-100/60 p-4 text-center text-sm font-semibold text-slate-700 dark:bg-white/5 dark:text-slate-200">
            {highlights.map((item) => (
              <div key={item.metric}>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{item.metric}</p>
                <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
