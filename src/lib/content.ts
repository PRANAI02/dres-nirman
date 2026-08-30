export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export type Discipline = {
  slug: string;
  index: string;
  title: string;
  short: string;
  /** one-line summary used on cards and the home page */
  blurb: string;
  /** full section copy for the discipline's own page */
  overview: string;
  services: string[];
  image: string;
  alt: string;
  hero: string;
  heroAlt: string;
};

export const disciplines: Discipline[] = [
  {
    slug: "civil-engineering",
    index: "01",
    title: "Civil Engineering",
    short: "Civil Engineering",
    blurb: "Civil construction, RCC works and industrial civil packages.",
    overview:
      "We specialize in Civil Construction, RCC Works, and Industrial Civil Works, delivering reliable and high-quality construction solutions tailored to the specific requirements of every project. Our expertise covers foundations, reinforced concrete structures, columns, beams, slabs, industrial flooring, equipment foundations, drainage systems, roads, and associated civil infrastructure. With a strong focus on quality, safety, durability, precision, and timely execution, we are committed to delivering robust structures and dependable civil works that meet project specifications and industry standards.",
    services: [
      "Civil construction",
      "RCC works",
      "Industrial civil works",
      "Foundations & equipment foundations",
      "Columns, beams & slabs",
      "Industrial flooring",
      "Drainage systems & roads",
      "Associated civil infrastructure",
    ],
    image: "/images/civil.jpg",
    alt: "Concrete being placed over reinforcement on a civil works site",
    hero: "/images/civil.jpg",
    heroAlt: "Concrete being placed over reinforcement on a civil works site",
  },
  {
    slug: "peb-and-steel-structures",
    index: "02",
    title: "PEB & Steel Structures",
    short: "PEB & Steel",
    blurb: "Pre-engineered buildings, structural steel, sheds and warehouses.",
    overview:
      "We specialize in PEB Buildings and Structural Steel Solutions, delivering efficient, durable, and cost-effective structures for industrial and commercial applications. Our expertise includes pre-engineered buildings, structural steel structures, industrial sheds, warehouses, and fabrication & erection coordination. From design coordination and fabrication to site erection, we focus on precision, quality, safety, and seamless project execution to deliver reliable steel structures that meet the functional and operational requirements of each project.",
    services: [
      "PEB buildings",
      "Structural steel structures",
      "Industrial sheds",
      "Warehouses",
      "Fabrication & erection coordination",
      "Design coordination",
      "Site erection",
    ],
    image: "/images/peb.jpg",
    alt: "Structural steel portal frames erected against the sky",
    hero: "/images/hero.jpg",
    heroAlt: "Pre-engineered steel building under erection",
  },
  {
    slug: "structural-engineering",
    index: "03",
    title: "Structural Engineering",
    short: "Structural Engineering",
    blurb: "Design, detailing and engineering coordination for steel and RCC.",
    overview:
      "We provide comprehensive Structural Engineering Solutions focused on safety, strength, efficiency, and long-term performance. Our expertise includes structural design for steel and RCC structures, detailed structural detailing, and engineering coordination. We work closely with project teams to develop practical and reliable structural solutions while ensuring alignment between design, detailing, construction requirements, and project specifications.",
    services: [
      "Structural design",
      "Steel structures",
      "RCC structures",
      "Structural detailing",
      "Engineering coordination",
    ],
    image: "/images/steel-joint.jpg",
    alt: "Structural steel connection detail",
    hero: "/images/lattice.jpg",
    heroAlt: "Steel lattice structure seen from below",
  },
  {
    slug: "industrial-projects",
    index: "04",
    title: "Industrial Projects",
    short: "Industrial Projects",
    blurb: "Industrial buildings, plant civil works and maintenance support.",
    overview:
      "We provide comprehensive engineering and construction solutions for industrial projects, supporting the development, execution, and maintenance of industrial facilities. Our expertise includes industrial buildings, plant-related civil works, and industrial maintenance and support services. With a strong focus on safety, durability, precision, and operational efficiency, we deliver practical solutions that support the ongoing requirements and long-term performance of industrial facilities.",
    services: [
      "Industrial buildings",
      "Plant-related civil works",
      "Industrial maintenance & support",
      "Facility development & execution",
    ],
    image: "/images/plant.jpg",
    alt: "Process plant structures and piping",
    hero: "/images/chimneys.jpg",
    heroAlt: "Industrial plant stacks and process structures",
  },
  {
    slug: "architectural-and-planning-coordination",
    index: "05",
    title: "Architectural & Planning Coordination",
    short: "Architectural & Planning",
    blurb: "Design coordination between architecture, structure and site.",
    overview:
      "We provide Architectural & Planning Coordination Solutions to ensure seamless integration between architectural concepts, structural systems, engineering requirements, and construction activities. Our approach focuses on functional planning, design coordination, space optimization, drawing coordination, and constructability, helping project teams achieve efficient and practical solutions. By coordinating across disciplines, we support smooth project execution while maintaining design intent, technical accuracy, and project requirements.",
    services: [
      "Functional planning",
      "Design coordination",
      "Space optimization",
      "Drawing coordination",
      "Constructability review",
      "Cross-discipline integration",
    ],
    image: "/images/frame-sky.jpg",
    alt: "Architectural steel framing against an open sky",
    hero: "/images/roof.jpg",
    heroAlt: "Structural roof framing viewed from below",
  },
  {
    slug: "surveying-mapping-and-geospatial",
    index: "06",
    title: "Surveying, Mapping & Geospatial Coordination",
    short: "Surveying & Geospatial",
    blurb: "DGPS, drone survey, topographical mapping and GIS analysis.",
    overview:
      "We provide comprehensive Surveying, Mapping & Geospatial Solutions to support accurate planning, design, construction, and infrastructure development. Our capabilities include DGPS and high-precision land surveying, drone-based surveys and mapping, topographical and site surveys, GIS-based mapping and analysis, site measurement and setting-out, and survey data processing and documentation. We provide reliable survey support for civil and infrastructure projects, helping project teams make informed decisions through accurate data, precise measurements, and well-organized documentation.",
    services: [
      "DGPS & high-precision land surveying",
      "Drone-based surveys & mapping",
      "Topographical & site surveys",
      "GIS-based mapping & analysis",
      "Site measurement & setting-out",
      "Survey data processing & documentation",
      "Survey support for civil & infrastructure projects",
    ],
    image: "/images/survey-drone.jpg",
    alt: "Surveyor operating a mapping drone on site",
    hero: "/images/survey.jpg",
    heroAlt: "Survey instrument set up on open ground",
  },
  {
    slug: "sustainable-engineering",
    index: "07",
    title: "Sustainable Engineering",
    short: "Sustainable Engineering",
    blurb: "Assessment, strengthening and retrofitting of existing structures.",
    overview:
      "We deliver Sustainable Engineering Solutions focused on improving structural performance, extending asset life, and optimizing the use of resources. Our expertise includes resource-efficient solutions, structural assessment, existing-structure evaluation, sustainable construction practices, structural strengthening, and retrofitting solutions. By combining engineering expertise with practical and sustainable approaches, we help enhance the safety, durability, functionality, and long-term value of existing and new structures.",
    services: [
      "Resource-efficient solutions",
      "Structural assessment",
      "Existing-structure evaluation",
      "Sustainable construction practices",
      "Structural strengthening",
      "Retrofitting solutions",
    ],
    image: "/images/carbon-fibre.jpg",
    alt: "Carbon fibre fabric used for structural strengthening",
    hero: "/images/girders.jpg",
    heroAlt: "An existing steel structure being assessed for strengthening",
  },
];

export const nav: NavItem[] = [
  { href: "/about", label: "about" },
  { href: "/mission", label: "our mission" },
  {
    href: "/expertise",
    label: "expertise",
    children: disciplines.map((d) => ({
      href: `/expertise/${d.slug}`,
      label: d.title,
    })),
  },
  { href: "/approach", label: "approach" },
  { href: "/projects", label: "projects" },
  { href: "/people", label: "people" },
  { href: "/careers", label: "careers" },
  { href: "/contact", label: "contact" },
];

export const capabilities = disciplines.map((d) => d.title);

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
