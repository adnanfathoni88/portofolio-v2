import Container from "../components/common/Container"
import aboutMe from "../data/aboutMe"
import profileData from "../data/profile"

const { name } = profileData.profile
const { description, location } = aboutMe

const AboutSection = () => (
  <section id="about" className="bg-ink-deep py-section-lg">
    <Container className="mx-auto max-w-3xl text-center">
      <h2 className="text-heading-2 mb-4 text-ink">About Me</h2>
      <p className="text-body-md mb-6 text-slate leading-relaxed">
        {description}
      </p>
      <div className="flex items-center justify-center gap-2 text-body-sm text-steel">
        <span>{name}</span>
        <span className="text-hairline-strong">&bull;</span>
        <span>{location}</span>
      </div>
    </Container>
  </section>
)

export default AboutSection
