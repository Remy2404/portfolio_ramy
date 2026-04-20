import { FeaturedProjectsSection } from "@/components/sections/featured-projects"
import { HeroSection } from "@/components/sections/hero"
import { SocialLinksSection } from "@/components/sections/social-links"
import { TechStackSection } from "@/components/sections/tech-stack"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { BlogSection } from "@/components/sections/blog"
import { PhilosophySection } from "@/components/sections/philosophy"
import { ExperienceSection } from "@/components/sections/experience"
import { ServicesSection } from "@/components/sections/services"
import { AchievementsSection } from "@/components/sections/achievements"
import { ContactSection } from "@/components/sections/contact"
import { OpenSourceSection } from "@/components/sections/opensource"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger"

export default function Home() {
  return (
    <section className="mx-auto flex w-full max-w-[1600px] flex-col gap-8 overflow-x-hidden px-4 pb-24 pt-8 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
      {/* Above-the-fold: render immediately — no animation gate so LCP is detected at first paint */}
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.32fr)_minmax(24rem,0.78fr)]">
        <div className="h-full">
          <HeroSection />
        </div>
        <div className="h-full">
          <SocialLinksSection />
        </div>
      </div>

      {/* Below-the-fold: stagger animate in as the user scrolls down */}
      <StaggerGroup className="grid gap-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(23rem,0.78fr)_minmax(0,1.22fr)]">
          <StaggerItem>
            <TechStackSection />
          </StaggerItem>

          <StaggerItem>
            <FeaturedProjectsSection />
          </StaggerItem>
        </div>

        {/* New sections: Philosophy, Testimonials, Blog */}
        <StaggerItem>
          <PhilosophySection />
        </StaggerItem>

        <StaggerItem>
          <TestimonialsSection />
        </StaggerItem>

        <StaggerItem>
          <BlogSection />
        </StaggerItem>

        {/* New sections from agent team */}
        <StaggerItem>
          <ExperienceSection />
        </StaggerItem>

        <StaggerItem>
          <ServicesSection />
        </StaggerItem>

        <StaggerItem>
          <AchievementsSection />
        </StaggerItem>

        <StaggerItem>
          <OpenSourceSection />
        </StaggerItem>

        <StaggerItem>
          <ContactSection />
        </StaggerItem>
      </StaggerGroup>
    </section>
  )
}
