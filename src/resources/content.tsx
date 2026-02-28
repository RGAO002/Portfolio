import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ruoping",
  lastName: "Gao",
  name: `Ruoping Gao`,
  role: "Software Engineer (AI & Product)",
  avatar: "/images/avatar.jpg",
  email: "rgao002.application@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese", "Spanish (Basic)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My newsletter about software engineering and AI</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/RGAO002",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ruoping-gao-72571717b/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building products with AI & strong engineering</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">CareerOps Pro</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/careeropspro",
  },
  subline: (
    <>
    I'm Ruoping, a software engineer passionate about building customer-facing products. <br /> I work end-to-end—from talking to users to shipping reliable, maintainable software.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Recent M.S. Computer Science graduate (Stevens Institute of Technology, GPA 3.8) who builds 
        customer-facing products with strong engineering fundamentals. I enjoy working end-to-end—from 
        talking to users and clarifying messy requirements to shipping reliable, maintainable software. 
        Hands-on experience across full-stack development and applied AI, including prototyping RAG/LLM 
        workflows and integrating them into production-style systems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Evlin — Early-Stage Homeschooling Platform",
        timeframe: "Jan 2026 – Present",
        role: "Founding / Lead Full-Stack Engineer (Part-time)",
        achievements: [
          <>
            Designed and implemented an early MVP for a homeschooling scheduling and planning platform, focusing on real-world parent and student workflows.
          </>,
          <>
            Built full-stack features including course scheduling (Neo4j), availability matching (Pinecone), and data modeling for students, parents, and instructors.
          </>,
          <>
            Led early technical design across system architecture, data modeling, and API contracts to support rapid iteration.
          </>,
          <>
            Collaborated closely with non-technical stakeholders to translate ambiguous requirements into working product features.
          </>,
        ],
        images: [],
      },
      {
        company: "Freelance / Contract Projects",
        timeframe: "June 2024 – Dec 2025",
        role: "Independent Software Developer",
        achievements: [
          <>
            Lync (iOS): Built and shipped core user-facing features for a customer social product; used lightweight AI assistance to improve match relevance and reduce time-to-discovery by ~40% versus manual filtering.
          </>,
          <>
            Delivered end-to-end product increments for commercial clients shipping UI updates, API endpoints, and PostgreSQL schema changes.
          </>,
        ],
        images: [],
      },
      {
        company: "Snapbrillia",
        timeframe: "Dec 2021 – June 2024",
        role: "Full-Stack Web Engineer",
        achievements: [
          <>
            Shipped user-facing product features for a web platform used by internal teams and customers, building React (TypeScript) components and backend services to support analytics and core workflows.
          </>,
          <>
            Worked closely with product and design to scope, build, and iterate on features end-to-end, translating requirements into clear UI behavior and stable APIs in a fast-moving environment.
          </>,
          <>
            Improved performance and code quality through refactoring, testing, debugging, and profiling; tightened API contracts and hardened JWT-based authentication to reduce integration issues and reliability regressions.
          </>,
          <>
            Optimized PostgreSQL schema and query execution plans (indexing strategy), reducing latency by ~30% on complex data retrieval paths that impacted key product views.
          </>,
          <>
            Shipped and operated production releases on AWS (Docker/EC2) with CI/CD automation and basic observability, supporting 99.9% system reliability and faster iteration cycles.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Fertility Group",
        timeframe: "June 2019 – Aug 2020",
        role: "Internship",
        achievements: [
          <>
            Improved an internal patient management UI using React.js, focusing on responsiveness, clearer interaction flows, and day-to-day usability for clinical staff.
          </>,
          <>
            Partnered with backend engineers to integrate secure REST APIs and ensure HIPAA compliance for sensitive patient records, emphasizing correctness and privacy-by-default behavior.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Stevens Institute of Technology",
        description: <>M.S. in Computer Science | GPA: 3.8 | Sep 2024 - Dec 2025</>,
      },
      {
        name: "California State University, Fresno",
        description: <>B.S. in Computer Science | Sep 2020 - Aug 2021</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Product & AI Engineering",
        description: (
          <>RAG-based workflows, LLM API integration, Vector DBs, lightweight agent pipelines, rapid prototyping</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
        ],
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>Building full-stack applications with Next.js, React, Express.js, and Spring Boot</>
        ),
        tags: [
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "React",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Data & Infrastructure",
        description: (
          <>AWS (EC2, S3, Lambda), PostgreSQL (pgvector), MongoDB, Firebase, Docker</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software engineering and AI...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
