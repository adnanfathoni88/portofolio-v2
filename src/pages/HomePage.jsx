import HeroSection from "../sections/HeroSection"
import AboutSection from "../sections/AboutSection"
import ExperienceSection from "../sections/ExperienceSection"
import ProjectsSection from "../sections/ProjectsSection"
import SkillsSection from "../sections/SkillsSection"

const HomePage = () => (
  <>
    <div className="flex flex-col">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  </>
)

export default HomePage
