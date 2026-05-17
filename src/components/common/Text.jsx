const tags = {
  "hero-display": "h1",
  "display-lg": "h2",
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  "heading-4": "h4",
  "heading-5": "h5",
  subtitle: "p",
  "body-md": "p",
  "body-md-medium": "p",
  "body-sm": "p",
  "body-sm-medium": "p",
  caption: "span",
  "caption-bold": "span",
  "button-md": "span",
}

const Text = ({ variant = "body-md", as, children, className = "" }) => {
  const Tag = as || tags[variant] || "p"
  return <Tag className={`text-${variant} ${className}`}>{children}</Tag>
}

export default Text
