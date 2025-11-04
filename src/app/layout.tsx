import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-384a75ac.vercel.app'),
  title: {
    default: 'Conversational Catalyst | AI Chatbot Solutions for Business',
    template: '%s | Conversational Catalyst'
  },
  description:
    'Freelance AI chatbot specialist crafting custom conversational agents that drive growth, automate support, and delight customers for forward-thinking businesses.',
  openGraph: {
    title: 'Conversational Catalyst | AI Chatbots for Business',
    description:
      'Freelance AI chatbot specialist crafting custom conversational agents that drive growth, automate support, and delight customers for forward-thinking businesses.',
    url: 'https://agentic-384a75ac.vercel.app',
    siteName: 'Conversational Catalyst',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Conversational Catalyst AI Chatbot Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conversational Catalyst | AI Chatbots for Business',
    description:
      'Freelance AI chatbot specialist crafting custom conversational agents that drive growth, automate support, and delight customers.',
    creator: '@chatbotcrafts'
  },
  keywords: [
    'AI chatbot freelancer',
    'business automation',
    'customer support automation',
    'AI assistant development',
    'conversation design'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="bg-white text-slate-900 transition-colors duration-500 dark:bg-dark dark:text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
