import Container from "../components/common/Container"
import Button from "../components/common/Button"
import profileData from "../data/profile"

const { name, role, headline, resume, startDate, projectsCompleted, wa } = profileData.profile

// get from startDate
const getYearsOfExperience = () => {
  const start = new Date(startDate)
  const now = new Date()
  const years = now.getFullYear() - start.getFullYear()
  return years
}

// contact wa -> redirect to wa link
const contactWa = () => {
  const chat = `Halo, saya ingin bertanya dan berdiskusi mengenai layanan Anda`
  window.open(`https://wa.me/${wa}?text=${encodeURIComponent(chat)}`, "_blank")
}

const HeroSection = () => (
  <section className="bg-ink-deep pt-32" id="about">
    <Container className="flex flex-col items-start text-start">
      <h1 className="text-4xl font-semibold text-on-dark mb-4 max-w-4xl">{name}</h1>
      <p className="text-xl text-on-dark-muted mb-4">{role}</p>
      <p className="text-md mb-10 max-w-2xl text-on-dark-muted text-start">
        {headline}
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="on-dark" as="button" onClick={contactWa}>
          Contact Me
        </Button>
      </div>

      <div className="border-y border-[#111111] mt-10 py-12 w-full">
        {/* years of experience */}
        <div className="flex flex-wrap justify-start gap-10">
          <div className="flex flex-col items-start gap-2">
            <div className="text-3xl font-semibold text-on-dark">{getYearsOfExperience()}+</div>
            <div className="text-sm text-on-dark-muted">Years of Experience</div>
          </div>

          {/* projects completed */}
          <div className="flex flex-col items-start gap-2">
            <div className="text-3xl font-semibold text-on-dark">{projectsCompleted}+</div>
            <div className="text-sm text-on-dark-muted">Projects Completed</div>
          </div>
        </div>
      </div>
    </Container>
  </section >
)

export default HeroSection
