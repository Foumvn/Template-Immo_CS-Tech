import { Hero } from '@/components/home/hero';
import { FeaturedProperties } from '@/components/home/featured-properties';
import { Features } from '@/components/home/features';
import { Stats } from '@/components/home/stats';
import { CTA } from '@/components/home/cta';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main>
        <Hero />
        <Stats />
        <FeaturedProperties />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}