type SiteConfig = {
  name: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resume: string;
  resumeAvailable: boolean;
};

export const site: SiteConfig = {
  name: "Lakshith S Lokesh",
  title: "Data Science | Machine Learning | Data Analytics",
  location: "Bengaluru, India",
  email: "lakshithlokesh06@gmail.com",
  github: "https://github.com/lakshithlokesh06",
  linkedin: "https://www.linkedin.com/in/lakshith-lokesh-927b47343/",
  resume: "/resume/Lakshith-S-Lokesh-Resume.pdf",
  resumeAvailable: true,
};

export const navigationItems = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
] as const;
