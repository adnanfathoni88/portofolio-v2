const variantStyles = {
  primary:
    "bg-primary text-on-primary hover:bg-primary-pressed active:bg-primary-deep",
  dark: "bg-ink-deep text-on-dark hover:opacity-90",
  secondary:
    "bg-transparent text-ink border border-hairline-strong hover:bg-surface",
  ghost: "bg-transparent text-ink hover:bg-surface",
  link: "bg-transparent text-primary p-0 text-body-sm-medium",
  "on-dark": "bg-on-dark text-ink hover:opacity-90",
  "secondary-on-dark":
    "bg-transparent text-on-dark border border-on-dark-muted hover:opacity-80",
}

const sizeStyles = {
  md: "px-[18px] py-[10px] text-button-md",
  sm: "px-3 py-2 text-body-sm-medium",
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}) => (
  <button
    className={`inline-flex items-center justify-center rounded-md transition-colors font-medium cursor-pointer
      ${variantStyles[variant] || variantStyles.primary}
      ${sizeStyles[size] || sizeStyles.md}
      ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button
