import { CtaSection } from '@/components/forest/cta-section'
import { Hero } from '@/components/forest/hero'
import { ImpactSection } from '@/components/forest/impact-section'
import { ProblemSection } from '@/components/forest/problem-section'
import { SiteFooter } from '@/components/forest/site-footer'
import { SiteHeader } from '@/components/forest/site-header'
import { SolutionsSection } from '@/components/forest/solutions-section'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <ImpactSection />
        <SolutionsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
