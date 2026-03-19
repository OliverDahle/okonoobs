'use client'

import StickyNav from '@/components/StickyNav'
import HeroSection from '@/components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import WhyBDOSection from '@/components/WhyBDOSection'
import CustomerSection from '@/components/CustomerSection'
import SolutionSection from '@/components/SolutionSection'
import UseCasesSection from '@/components/UseCasesSection'
import ROISection from '@/components/ROISection'
import RiskSection from '@/components/RiskSection'
import WhyWinSection from '@/components/WhyWinSection'
import FinalSlide from '@/components/FinalSlide'

export default function Home() {
  return (
    <main>
      <StickyNav />
      <HeroSection />
      <ProblemSection />
      <WhyBDOSection />
      <CustomerSection />
      <SolutionSection />
      <UseCasesSection />
      <ROISection />
      <RiskSection />
      <WhyWinSection />
      <FinalSlide />
    </main>
  )
}
