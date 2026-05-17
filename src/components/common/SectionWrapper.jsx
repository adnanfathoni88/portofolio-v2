const SectionWrapper = ({ children, className = "", bgColor, id }) => (
  <section id={id} className={`py-section ${bgColor ? `bg-${bgColor}` : ""} ${className}`}>
    {children}
  </section>
)

export default SectionWrapper
