export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
] as const;

export const ENQUIRY_TYPES = [
  { value: "product", label: "Product Enquiry" },
  { value: "franchise", label: "Franchise Enquiry" },
  { value: "distribution", label: "Distribution Enquiry" },
  { value: "general", label: "General Enquiry" },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;
