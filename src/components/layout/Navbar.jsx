import { useState } from "react"
import { Link } from "react-router-dom"
import Container from "../common/Container"
import Button from "../common/Button"
import profileData from "../../data/profile"

const { name, email } = profileData.profile

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#footer" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-[#111111] bg-ink-deep">
      <Container className="flex h-full items-center justify-between">
        <Link to="/" className="text-heading-5 text-on-dark font-semibold">
          {name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex text-on-dark">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body-sm-medium transition-colors hover:text-slate-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 lg:hidden text-on-dark focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-on-dark transition-transform ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-on-dark transition-opacity ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-on-dark transition-transform ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </Container>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full border-b bg-ink-deep lg:hidden">
          <nav className="flex flex-col gap-4 px-8 py-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-body-md text-steel hover:text-slate-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
