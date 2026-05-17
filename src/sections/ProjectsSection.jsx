import { FiGithub, FiExternalLink } from "react-icons/fi"
import Container from "../components/common/Container"
import Button from "../components/common/Button"
import projects from "../data/projects"

const sortedProjects = [...projects].sort((a, b) =>
  a.isFeatured === b.isFeatured ? 0 : a.isFeatured ? -1 : 1
)

const ProjectsSection = () => (
  <section id="projects" className="bg-ink-deep ">
    <Container className="border-t border-[#111111] py-12">
      <h2 className="text-heading-2 mb-12 text-start text-on-dark">Projects</h2>
      <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col overflow-hidden rounded-md border bg-[#111111] transition-shadow hover:shadow-level-2"
          >
            <div className="aspect-[3/2] overflow-hidden bg-[#111111]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-6 pt-5">
              <div className="mb-3 flex items-start justify-between gap-2">
                <h3 className="text-heading-4 text-on-dark">{project.title}</h3>
                {/* {project.isFeatured && (
                  <span className="shrink-0 rounded-full bg-primary px-2.5 py-0.5 text-caption-bold text-on-primary">
                    Featured
                  </span>
                )} */}
              </div>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-[#333333] px-2 py-1 text-caption text-on-dark-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-body-md mb-4 flex-1 text-slate leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto flex gap-3">
                {project.isGithub && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="on-dark" size="sm">
                      <FiGithub className="mr-1.5" />
                      GitHub
                    </Button>
                  </a>
                )}
                {project.isDemo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="on-dark" size="sm">
                      <FiExternalLink className="mr-1.5" />
                      Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  </section>
)

export default ProjectsSection
