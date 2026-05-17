import Container from "../common/Container"
import profileData from "../../data/profile"

import { FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"

const { name, location, role, linkedin, email, wa } = profileData.profile

const Footer = () => (
  <footer className="border-t bg-ink-deep py-section px-8" id="footer">
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 border-y border-[#111111] py-12">
        <div>
          <h3 className="mb-3 text-heading-5 text-on-dark">{name}</h3>
          <p className="text-body-sm text-on-dark-muted">{role}</p>
          <p className="text-body-sm text-on-dark-muted">{location}</p>
        </div>
        <div className="flex text-white items-center lg:justify-end rounded-lg">
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl mx-2 hover:text-slate-300">
            <FaLinkedin />
          </a>
          <a href={`mailto:${email}`} className="text-2xl mx-2 hover:text-slate-300">
            <FaEnvelope />
          </a>
          <a href={`https://wa.me/${wa.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" className="text-2xl mx-2 hover:text-slate-300">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="mt-section-sm text-center text-body-sm text-on-dark-muted">
        &copy; {new Date().getFullYear()} {name}. All rights reserved.
      </div>
    </Container>
  </footer>
)

export default Footer
