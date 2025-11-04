import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md">
      <div className="section-container flex items-center justify-between py-6">
        <Link href="#hero" className="flex items-center gap-2 text-lg font-semibold">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-purple-600 text-white shadow-lg">
            AI
          </span>
          <span className="hidden sm:block">Conversational Catalyst</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-primary-500 dark:hover:text-primary-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-primary-500 to-purple-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:from-primary-400 hover:to-purple-500 md:inline-flex"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </header>
  );
}
