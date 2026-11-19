export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  capabilities: string[];
  techStack: string[];
  deliverables: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  slogan: string;
  statement: string;
  vision: string;
  motto: string;
  status: "Flagship Live" | "In Development" | "Research & Lab";
  description: string;
  pillars: {
    word: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  audience: string;
  ctaText: string;
  demoUrl?: string;
}

export interface TechItem {
  name: string;
  category: "Frontend & Mobile" | "Backend & Database" | "AI & Intelligent Workflows" | "Cloud & Automation";
  description: string;
  highlight?: boolean;
}

export const siteConfig = {
  name: "RK TECHNOCRAFT",
  legalName: "RK Technocraft",
  tagline: "INNOVATING PRODUCTS • SCALING SERVICES",
  heroHeadline: "Ideas Deserve More Than Just Ideas. They Deserve Engineering.",
  heroSubheadline:
    "We design, develop and engineer digital products and intelligent solutions that move businesses forward.",
  aboutHeadline: "Engineering Ideas Into Impact.",
  aboutSummary:
    "RK TECHNOCRAFT is a modern technology company operating at the intersection of high-velocity product innovation and mission-critical technology services. We build our own digital products while partnering with businesses, startups, and entrepreneurs to architect scalable digital solutions.",
  founder: {
    name: "Rahim Khan",
    role: "Founder",
    title: "A Message From the Founder",
    quote: "Engineering isn't merely writing lines of code; it is the discipline of turning ambitious thoughts into enduring, scalable reality.",
    socials: {
      linkedin: "https://www.linkedin.com/in/rahim-khan-a4386838b/",
      instagram: "https://www.instagram.com/mr_rahim_1111/"
    },
    note: [
      "When we founded RK TECHNOCRAFT, the vision was clear: to avoid becoming another superficial software vendor, and instead build an authentic engineering powerhouse that creates real digital products while providing organizations with the technical rigor they need to scale.",
      "In a technology landscape full of hype, true business value is created through dependable architectures, clean design, and purpose-built solutions. Whether we are building our flagship products like CampusGrow or collaborating with visionary founders on their MVPs, our standard remains uncompromising.",
      "We treat every line of code, every system design, and every product interaction as an engineering craft. If you have a bold idea that demands genuine technical execution, we are here to build it with you."
    ]
  },
  socials: {
    email: "support.rk.technocraft@gmail.com",
    linkedin: "https://www.linkedin.com/in/rk-technocraft-47a462450/",
    instagram: "https://www.instagram.com/rk_technocraft.official/"
  },
  contact: {
    heading: "Have an Idea? Let's Build It.",
    subheading: "Whether you need a full-stack product, an AI-powered pipeline, or a high-velocity startup MVP, let's discuss your engineering requirements.",
    emailPlaceholder: "support.rk.technocraft@gmail.com",
    location: "Global Engineering & Technology Operations",
    services: [
      "Full-Stack Development",
      "AI Solutions & RAG",
      "Startup MVP Development",
      "Custom Enterprise Engineering"
    ]
  }
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" }
];

export const services: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full-Stack Development",
    subtitle: "Enterprise Platforms & Scalable Systems",
    tag: "Core Engineering",
    description:
      "We architect, build, and deploy high-performance web applications, resilient backend architectures, and custom digital platforms engineered to scale seamlessly under heavy user demand.",
    capabilities: [
      "Modern Web Applications (Next.js, React, TypeScript)",
      "High-Throughput APIs & Microservices (Node.js, Express, REST/GraphQL)",
      "Relational & Document Databases (PostgreSQL, Supabase)",
      "Cloud Infrastructure, Containerization & CI/CD Pipelines",
      "Robust Performance Optimization & Security Hardening"
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
    deliverables: [
      "End-to-end production source code with TypeScript safety",
      "Scalable database schemas & automated migration pipelines",
      "Comprehensive API documentation & integration specs",
      "Automated deployment & observability configuration"
    ]
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    subtitle: "RAG Systems & Intelligent Automation",
    tag: "Applied Intelligence",
    description:
      "We empower business workflows with real-world artificial intelligence, designing Retrieval-Augmented Generation (RAG) engines, cognitive automation agents, and custom LLM integrations.",
    capabilities: [
      "Retrieval-Augmented Generation (RAG) & Semantic Knowledge Retrieval",
      "LLM Application Orchestration (LangChain, Custom Agent Frameworks)",
      "Intelligent Workflow Automation & Multi-System Glue (n8n, Event Hooks)",
      "Vector Embeddings, Hybrid Search & Enterprise Data Connectors",
      "Private & Secure AI Model Deployments with Strict Privacy Guards"
    ],
    techStack: ["LangChain", "RAG", "n8n", "Vector DBs", "PostgreSQL pgvector", "Next.js"],
    deliverables: [
      "Production-ready RAG pipelines connected to company data",
      "Automated autonomous multi-step workflow routines",
      "Semantic search interfaces & custom conversational assistants",
      "Cost-optimized inference benchmarks & token guardrails"
    ]
  },
  {
    id: "startup-mvp",
    title: "Startup MVP Development",
    subtitle: "From Concept to Market-Ready Product",
    tag: "High-Velocity Launch",
    description:
      "We partner with ambitious startups and founders to transform raw concepts into scalable, investor-ready MVPs through disciplined roadmap planning, rapid sprint execution, and user-centric iteration.",
    capabilities: [
      "Product Architecture & Technical Feasibility Scoping",
      "Rapid Agile Sprint Development with Core Feature Focus",
      "Scalable Foundation (Zero throwaway code when transitioning to V1)",
      "Authentication, Payments, Analytics & User Onboarding Flows",
      "Post-Launch Feedback Loops, Metrics & Iteration Roadmaps"
    ],
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Node.js", "Stripe/Payments", "Flutter"],
    deliverables: [
      "Functional, polished MVP ready for user onboarding and seed pitch",
      "Modular codebase prepared for rapid future feature scaling",
      "Configured production telemetry & user analytics tracking",
      "Complete deployment setup with zero vendor lock-in"
    ]
  }
];

export const products: ProductItem[] = [
  {
    id: "campusgrow",
    name: "CampusGrow",
    tagline: "Your Personal Learning Companion for Your Engineering Journey.",
    slogan: "Grow Beyond the Classroom.",
    statement:
      "Engineering education should be more than attending lectures, memorizing concepts, and preparing for examinations. Students should have the opportunity to explore, experiment, build, and turn their ideas into reality.",
    vision:
      "To empower every engineering student to become a confident creator, independent learner, and problem solver — equipped with the practical skills to turn ideas into impact.",
    motto: "Learn beyond theory. Build beyond imagination. Grow beyond the classroom.",
    status: "Flagship Live",
    audience: "Engineering Students, Aspiring Developers & Academic Communities",
    description:
      "CampusGrow is a student-focused learning platform created to bridge the gap between theoretical education and practical technology skills. Our goal is to help engineering students learn beyond their academic curriculum, explore technologies, develop practical knowledge, and gain the confidence to create their own digital products. Whether a student is taking their first steps into programming or exploring full-stack development, CampusGrow aims to make the learning journey more approachable, structured, and engaging.",
    pillars: [
      {
        word: "Learn",
        description: "Build a stronger understanding of technology and programming."
      },
      {
        word: "Explore",
        description: "Discover technologies beyond the traditional classroom curriculum."
      },
      {
        word: "Build",
        description: "Develop the confidence to turn ideas into practical projects."
      },
      {
        word: "Grow",
        description: "Progress continuously as a learner and future technology creator."
      }
    ],
    features: [
      {
        title: "Curated Engineering Curriculum",
        description:
          "Structured learning paths designed by practitioners, breaking complex engineering subjects into progressive, digestible modules."
      },
      {
        title: "Practical Learning Milestones",
        description:
          "Hands-on project tracks that transition students from theoretical rote learning into tangible, GitHub-ready software artifacts."
      },
      {
        title: "Skill Mastery Tracking",
        description:
          "Intelligent competency analytics giving learners a clear visual benchmark of their technical proficiencies and career readiness."
      },
      {
        title: "Engineering Resource Hub",
        description:
          "Centralized repository of curated code repositories, cheat sheets, API references, and open-source contributions."
      }
    ],
    ctaText: "Explore CampusGrow",
    demoUrl: "https://campus-grow.vercel.app"
  }
];

export const technologies: TechItem[] = [
  {
    name: "Next.js",
    category: "Frontend & Mobile",
    description: "App Router, Server Components, and Turbopack for lightning-fast corporate platforms.",
    highlight: true
  },
  {
    name: "Tailwind CSS",
    category: "Frontend & Mobile",
    description: "Utility-first design engine delivering bespoke, sleek, responsive design systems.",
    highlight: true
  },
  {
    name: "Flutter",
    category: "Frontend & Mobile",
    description: "Cross-platform native mobile applications with single-codebase velocity and fluidity.",
    highlight: false
  },
  {
    name: "Node.js",
    category: "Backend & Database",
    description: "High-concurrency asynchronous runtime powering scalable APIs and microservices.",
    highlight: true
  },
  {
    name: "Supabase",
    category: "Backend & Database",
    description: "Open source Firebase alternative: Instant Auth, Realtime Postgres, and Edge Functions.",
    highlight: true
  },
  {
    name: "PostgreSQL",
    category: "Backend & Database",
    description: "Enterprise-grade relational database with ACID compliance and vector extension support.",
    highlight: true
  },
  {
    name: "APIs & Microservices",
    category: "Backend & Database",
    description: "RESTful endpoints, GraphQL schemas, and webhook bridges designed for interoperability.",
    highlight: false
  },
  {
    name: "LangChain",
    category: "AI & Intelligent Workflows",
    description: "Composing structured LLM prompts, chains, tool-calling agents, and memory stores.",
    highlight: true
  },
  {
    name: "RAG Systems",
    category: "AI & Intelligent Workflows",
    description: "Retrieval-Augmented Generation connecting LLMs with private proprietary databases.",
    highlight: true
  },
  {
    name: "n8n Automation",
    category: "AI & Intelligent Workflows",
    description: "Visual workflow orchestrator integrating webhooks, internal systems, and automated triggers.",
    highlight: true
  },
  {
    name: "DevOps & CI/CD",
    category: "Cloud & Automation",
    description: "GitHub Actions, automated test pipelines, containerization, and zero-downtime rollouts.",
    highlight: true
  }
];

export const whyUsPrinciples = [
  {
    number: "01",
    title: "Product-Focused Thinking",
    description:
      "Because we build and maintain our own proprietary products, we understand user retention, product lifecycle, and business ROI from the inside out — not just as contractors."
  },
  {
    number: "02",
    title: "Business-Oriented Engineering",
    description:
      "We don't engineer complexity for the sake of it. Every architecture decision and technology choice is measured against business viability, speed-to-market, and maintenance efficiency."
  },
  {
    number: "03",
    title: "Practical Innovation",
    description:
      "We avoid artificial intelligence theater and hype. We deploy production-tested AI models, RAG pipelines, and automation flows that solve actual operational friction."
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "From database indexing to serverless edge routing, we architect systems that handle 10x growth without demanding complete code rewrites."
  },
  {
    number: "05",
    title: "Continuous Iteration & Craftsmanship",
    description:
      "Software is a living craft. We champion disciplined code reviews, automated CI/CD safety checks, and relentless refinement across design and execution."
  }
];
