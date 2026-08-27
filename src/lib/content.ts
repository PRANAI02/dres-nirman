export const nav = [
  { href: "/about", label: "About" },
  { href: "/expertise", label: "Expertise" },
  { href: "/projects", label: "Projects" },
  { href: "/people", label: "People" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const capabilities = [
  "Civil Engineering & Execution",
  "PEB & Steel Structures",
  "Structural Engineering & Design",
  "Industrial & Infrastructure Projects",
  "Architectural & Planning Coordination",
  "Surveying & Geotechnical Coordination",
  "Retrofitting & Structural Strengthening",
  "Sustainable Engineering",
];

export type Discipline = {
  id: string;
  index: string;
  title: string;
  blurb: string;
  services: string[];
  image: string;
  alt: string;
};

export const disciplines: Discipline[] = [
  {
    id: "civil",
    index: "01",
    title: "Civil Engineering & Execution",
    blurb:
      "Ground-up civil delivery backed by decades of site experience — from foundations and RCC frames to industrial civil packages.",
    services: ["Civil construction", "RCC works", "Industrial civil works"],
    image: "/images/rebar.jpg",
    alt: "Reinforcement cages and tower crane on a civil construction site",
  },
  {
    id: "peb",
    index: "02",
    title: "PEB & Steel Structures",
    blurb:
      "Pre-engineered and conventional steel systems engineered for span, speed and long-term serviceability.",
    services: [
      "PEB buildings",
      "Structural steel",
      "Industrial sheds",
      "Warehouses",
      "Fabrication & erection coordination",
    ],
    image: "/images/warehouse.jpg",
    alt: "Interior of a clear-span pre-engineered steel building",
  },
  {
    id: "structural",
    index: "03",
    title: "Structural Engineering & Design",
    blurb:
      "Analysis and design grounded in code, checked against constructability, and detailed for the people who build it.",
    services: [
      "Structural design",
      "Steel structures",
      "RCC structures",
      "Structural detailing",
      "Engineering coordination",
    ],
    image: "/images/lattice.jpg",
    alt: "Steel lattice roof structure seen from below",
  },
  {
    id: "industrial",
    index: "04",
    title: "Industrial & Infrastructure Projects",
    blurb:
      "Plant-side civil and structural work delivered around live operations, tight tolerances and shutdown windows.",
    services: [
      "Industrial buildings",
      "Plant-related civil works",
      "Industrial maintenance & support",
    ],
    image: "/images/plant.jpg",
    alt: "Process plant piping and structures",
  },
  {
    id: "survey",
    index: "05",
    title: "Surveying, Mapping & Geospatial Coordination",
    blurb:
      "High-precision positioning and geospatial data that keeps design, quantities and execution aligned to the ground truth.",
    services: [
      "DGPS & high-precision land surveying",
      "Drone-based surveys & mapping",
      "Topographical & site surveys",
      "GIS-based mapping & analysis",
      "Site measurement & setting-out",
      "Survey data processing & documentation",
      "Survey support for civil & infrastructure projects",
    ],
    image: "/images/survey.jpg",
    alt: "Survey instrument set up on a site",
  },
  {
    id: "sustainable",
    index: "06",
    title: "Sustainable Engineering, Retrofitting & Strengthening",
    blurb:
      "Extending the life of what already stands — assessment, strengthening and resource-efficient engineering decisions.",
    services: [
      "Structural assessment",
      "Existing-structure evaluation",
      "Structural strengthening",
      "Retrofitting solutions",
      "Resource-efficient solutions",
      "Sustainable construction practices",
    ],
    image: "/images/frame-sky.jpg",
    alt: "Steel frame silhouetted against an open sky",
  },
];

export const approach = [
  {
    n: "01",
    title: "Understand",
    body: "Understanding the client's requirements, site and project objectives.",
  },
  {
    n: "02",
    title: "Engineer",
    body: "Developing technically sound and practical solutions.",
  },
  {
    n: "03",
    title: "Plan",
    body: "Planning resources, quantities, schedules and execution.",
  },
  {
    n: "04",
    title: "Execute",
    body: "Coordinating people, materials, technology and site activities.",
  },
  {
    n: "05",
    title: "Deliver",
    body: "Focusing on quality, safety, performance and timely completion.",
  },
];

export const whyDres = [
  {
    title: "Engineering-Led",
    body: "Technical understanding informs our approach to every project.",
  },
  {
    title: "Construction Experience",
    body: "Built on decades of practical construction exposure.",
  },
  {
    title: "Multidisciplinary",
    body: "Bringing engineering, construction, consultancy and execution together.",
  },
  {
    title: "Practical Solutions",
    body: "Solutions designed not only on paper but for real-world execution.",
  },
  {
    title: "Technology Driven",
    body: "Using modern engineering tools and digital workflows.",
  },
  {
    title: "Long-Term Thinking",
    body: "Building relationships and capabilities for sustainable growth.",
  },
];

export const values = [
  "Integrity",
  "Quality",
  "Safety",
  "Innovation",
  "Collaboration",
  "Responsibility",
];

export const team = [
  { name: "Vamshi Krishna Chowdary", role: "Business Associate" },
  { name: "A. Narasimha Reddy", role: "Senior Manager" },
  { name: "A. Prasad", role: "Manager & Planning Engineer" },
  { name: "P. Vinod Kumar Reddy", role: "Supervisor" },
  { name: "J. Nikhil", role: "Site Engineer" },
  { name: "N. Rama Krishna Reddy", role: "Supervisor" },
];

export const contact = {
  company: "DRES NIRMAN PVT. LTD.",
  address:
    "Registered Office — H.No. 4/33/6B, Venkata Ramana Colony, Kurnool, Andhra Pradesh",
  email: "info@dresnirman.com",
  phone: "+91 99088 68456",
  phoneHref: "+919908868456",
  linkedin: "#",
};
