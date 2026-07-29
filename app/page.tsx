import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WebinarAccess } from "@/components/webinar-access"
import { BenefitsSection } from "@/components/benefits-section"
import { LearnSection } from "@/components/learn-section"
import { HostSection } from "@/components/host-section"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"
import { SocialProofPopup } from "@/components/social-proof-popup"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <WebinarAccess />
        <BenefitsSection />
        <LearnSection />
        <HostSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <SocialProofPopup />
    </div>
  )
}
