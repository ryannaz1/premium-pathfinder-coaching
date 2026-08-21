export const site = {
  name: "Yes We Do Your Projects",
  tagline: "Premium academic coaching for ambitious university students",
  email: "ryannazha@gmail.com",
  whatsappNumber: "+34 667 641 491",
  whatsappDigits: "34667641491",
  instagram: "https://www.instagram.com/yeswedoyourprojects/",
  facebook: "https://www.facebook.com/share/1Qo9ponNjD/",
  whatsappMessage: "Hi, I'd like to learn more about your academic coaching services.",
};

export const whatsappHref = `https://wa.me/${site.whatsappDigits}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Academic coaching enquiry",
)}`;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Who We Help", to: "/who-we-help" },
  { label: "Locations", to: "/locations" },
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;
