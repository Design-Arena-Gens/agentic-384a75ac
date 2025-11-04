import Link from 'next/link';

export function Footer() {
  const nav = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#case-studies' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <footer className="section-container border-t border-slate-200/60 pt-12 dark:border-white/10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-white">Conversational Catalyst</p>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Freelance AI chatbot solutions for modern businesses.</p>
        </div>
        <nav className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-primary-500 dark:hover:text-primary-300">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          <p>hello@conversationalcatalyst.ai</p>
          <p className="mt-1">© {new Date().getFullYear()} Conversational Catalyst</p>
        </div>
      </div>
    </footer>
  );
}
