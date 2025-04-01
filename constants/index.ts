export const NAV_LINKS = [
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "about", label: "About us" },
  { href: "/", key: "blogs", label: "Blogs" },
  { href: "/", key: "case studies ", label: "Case Studies" },
];

const BASE_URL = "http://3.7.81.243:3253";

export const API_ENDPOINTS = {
  CONTACT: `${BASE_URL}/api/contact/send`,
  BLOGS: `${BASE_URL}/api/blog`,
  SETTINGS: `${BASE_URL}/api/settings/fetch-frontend-details`,
};
