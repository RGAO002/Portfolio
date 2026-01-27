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
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
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
        company: "Freelance / Contract Projects",
        timeframe: "June 2023 - Aug 2024",
        role: "Independent Software Developer",
        achievements: [
          <>
            Built and iterated on Lync, a specialized social platform, integrating AI-assisted matching 
            logic and a scalable backend to handle complex user data and real-time updates.
          </>,
          <>
            Worked on end-to-end feature development for commercial clients, with a focus on PostgreSQL 
            database design and reliable API endpoints to support a stable user experience.
          </>,
        ],
        images: [],
      },
      {
        company: "Snapbrillia",
        timeframe: "Dec 2021 - June 2023",
        role: "Full-Stack Web Engineer",
        achievements: [
          <>
            Implemented backend endpoints and services using Java and Spring Boot to support product 
            features and analytics workflows used by a large active user base.
          </>,
          <>
            Improved performance and reliability by refactoring backend services, tightening 
            request/response contracts, and strengthening authentication with JWT-based security.
          </>,
          <>
            Tuned PostgreSQL schemas and queries to reduce latency on frequently accessed paths, 
            and collaborated across product/design/engineering to deliver changes safely.
          </>,
        ],
        images: [],
      },
      {
        company: "Global Fertility Group",
        timeframe: "June 2019 - Aug 2020",
        role: "Software Engineering Internship",
        achievements: [
          <>
            Improved internal patient management UI using React.js, focusing on faster rendering 
            and cleaner interaction flows for daily use by staff.
          </>,
          <>
            Worked with backend engineers to integrate secure RESTful APIs and ensure consistent 
            handling of sensitive records.
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
