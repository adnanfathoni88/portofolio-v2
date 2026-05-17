import { useState } from "react"
import Container from "../components/common/Container"
import skillCategories from "../data/skills"
import iconMap from "../utils/iconMap"

const SkillsSection = () => {
  const [selected, setSelected] = useState(skillCategories[0].category)
  const activeCategory = skillCategories.find((c) => c.category === selected)

  return (
    <section id="skills" className="bg-ink-deep">
      <Container className="border-y py-10 border-[#111111]">
        <h2 className="text-heading-2 mb-8 text-start text-on-dark">Skills</h2>

        <div className="mb-8 flex flex-wrap gap-3">
          {skillCategories.map(({ category, label }) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`rounded-md px-4 py-2 text-caption-bold transition-colors ${selected === category
                ? "bg-white/10 text-on-primary"
                : "text-on-dark/70 hover:bg-white/20 hover:text-on-dark"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        {activeCategory && (
          <div className="grid w-full grid-cols-3 gap-3">
            {activeCategory.items.map(({ name, icon }) => {
              const IconComponent = iconMap[icon]
              return (
                <span
                  key={name}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-white/10 px-4 py-3 text-caption-bold text-on-dark/80"
                >
                  {IconComponent && <IconComponent size={16} />}
                  {name}
                </span>
              )
            })}
          </div>
        )}
      </Container>
    </section>
  )
}

export default SkillsSection
