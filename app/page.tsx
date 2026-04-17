import { FeaturedProjectsSection } from "@/components/sections/featured-projects"
import { HeroSection } from "@/components/sections/hero"
import { SocialLinksSection } from "@/components/sections/social-links"
import { TechStackSection } from "@/components/sections/tech-stack"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger"

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 overflow-x-hidden px-4 pb-24 pt-8 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
      <StaggerGroup className="grid gap-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.32fr)_minmax(24rem,0.78fr)]">
          <StaggerItem className="h-full">
            <HeroSection />
          </StaggerItem>

          <StaggerItem className="h-full">
            <SocialLinksSection />
          </StaggerItem>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(23rem,0.78fr)_minmax(0,1.22fr)]">
          <StaggerItem>
            <TechStackSection />
          </StaggerItem>

          <StaggerItem>
            <FeaturedProjectsSection />
          </StaggerItem>
        </div>
      </StaggerGroup>
    </section>
  )
}
