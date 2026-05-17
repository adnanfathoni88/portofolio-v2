const Container = ({ children, className = "" }) => (
  <div className={`mx-auto lg:w-3/5 sm:w-full max-w-[1280px] px-8 ${className}`}>
    {children}
  </div>
)

export default Container
