import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Showcase } from "@/components/showcase"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Showcase />
      <Features />
      <Pricing />
      <Footer />
    </main>
  )
}
