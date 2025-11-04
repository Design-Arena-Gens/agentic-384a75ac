import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Differentiators } from '@/components/sections/differentiators';
import { Process } from '@/components/sections/process';
import { CaseStudies } from '@/components/sections/case-studies';
import { Testimonials } from '@/components/sections/testimonials';
import { About } from '@/components/sections/about';
import { FAQ } from '@/components/sections/faq';
import { CTA } from '@/components/sections/cta';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <Differentiators />
      <Process />
      <CaseStudies />
      <Testimonials />
      <About />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
