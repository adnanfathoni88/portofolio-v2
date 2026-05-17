import Container from "../components/common/Container"
import experience from "../data/experience"

const ExperienceSection = () => (
  <section id="experience" className="bg-ink-deep text-start">
    <Container className="border-t border-[#111111] py-10">
      <h2 className="text-heading-2 mb-12 text-on-dark">Experience</h2>
      <div className="mx-auto">
        {experience.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 pb-10 last:pb-0">
            {/* {index < experience.length - 1 && (
              <div className="absolute left-[11px] top-2 h-full w-0.5 bg-on-dark-muted" />
            )} */}
            <div className="absolute left-0 top-2 h-[10px] w-[10px] rounded-full border-2 border-on-dark bg-canvas" />
            <div>
              <div className="mb-1 flex flex-wrap items-baseline gap-2">
                <h3 className="text-heading-4 text-on-dark">{exp.company}</h3>
                <span className="text-body-sm-medium text-on-dark-muted">{exp.role}</span>
              </div>
              <p className="text-body-sm mb-3 text-on-dark-muted">{exp.period}</p>
              <ul className="space-y-1.5">
                {exp.tasks.map((task, i) => (
                  <li key={i} className="text-body-md leading-relaxed flex gap-2 text-on-dark-muted">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default ExperienceSection
