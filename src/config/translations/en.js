import {
  Code2,
  Terminal,
  Database,
  Container,
  Cloud,
  Book,
} from "lucide-react";

const en = {
  hero: {
    title: ".NET Developer",
    social: {
      github: "https://github.com/solowiejmaciej",
      linkedin: "https://www.linkedin.com/in/maciej-so%C5%82owiej-9bbb85235/",
    },
    sequence: [
      "Creative",
      3000,
      "Modern",
      3000,
      "Passionate",
      3000,
      "Fullstack",
      3000,
    ],
  },
  about: {
    title: "About Me",
    description:
      "Passionate full-stack developer with experience in building modern web applications. I focus on creating scalable and maintainable solutions using cutting-edge technologies.",
    image: "me_about.jpg",
  },
  technologies: {
    title: "Technologies & Tools",
    list: [
      {
        name: "Backend",
        icon: Terminal,
        tools: [".NET", "RabbitMQ", "Docker", "WebAPI", "Elasticsearch"],
      },
      {
        name: "Frontend",
        icon: Code2,
        tools: ["Vue.js", "Next.js", "React.js", "Tailwind CSS"],
      },
      {
        name: "Databases",
        icon: Database,
        tools: ["T-SQL", "MongoDB", "Redis", "PostgreSQL"],
      },
      {
        name: "DevOps",
        icon: Container,
        tools: ["Docker", "Kubernetes", "GitHub Actions"],
      },
      {
        name: "Cloud",
        icon: Cloud,
        tools: ["Azure", "Google", "Vercel"],
      },
      {
        name: "Scrum",
        icon: Book,
        tools: ["Agile", "Kanban", "User story mapping"],
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    view: "Learn more",
    list: [
      {
        id: 1,
        title: "DMS",
        description: "Device management system",
        image: "/dmsMain.png",
        github: "https://github.com/solowiejmaciej/DMS",
        demo: null,
        tags: [".NET", "Next.js", "PostgreSQL", "Docker", "Azure", "RabbitMQ"],
        details: {
          overview: [
            "System for IoT devices management with a modern and user-friendly interface.",
            "While working on this project I learned a lot about IoT devices and how to manage them.",
            "Tried to implement as many features as possible to make the system as useful as possible.",
          ],
          features: [
            {
              title: "Event based customizable notifications",
              description:
                "Integrated RabbitMQ to send notifications when user performs certain action.",
            },
            {
              title: "Remote device control",
              description:
                "Developed functionality to execute predefined actions on devices such as restart or OTA update.",
            },
            {
              title: "User authentication and authorization via Google",
              description: "Implemented Google OAuth for user authentication.",
            },
            {
              title: "Device monitoring",
              description:
                "Implemented functionality to monitor device status and health, including CPU and memory usage with logs.",
            },
            {
              title: "Settings management",
              description: "Developed functionality to manage device settings.",
            },
          ],
          technical: [
            {
              type: "frontend",
              title: "Frontend Stack",
              description: "Next.js, Tailwind CSS",
            },
            {
              type: "backend",
              title: "Backend Services",
              description:
                ".NET, WebAPI, Entity Framework, PostgreSQL, RabbitMQ",
            },
            {
              type: "database",
              title: "Database",
              description: "PostgreSQL",
            },
          ],
        },
        images: ["/dmsMain.png", "/dmsProfile.png"],
      },
      {
        id: 2,
        title: "eLib",
        description: "Modern library management system",
        image: "/elibMain.png",
        github: "https://github.com/solowiejmaciej/eLib",
        demo: null,
        tags: [".NET", "Vue.js", "PostgreSQL", "Docker", "Azure", "RabbitMQ"],
        details: {
          overview: [
            "Library management system with a modern and user-friendly interface.",
            "Designed and developed RESTful APIs for managing books and users.",
          ],
          features: [
            {
              title: "Event based customizable notifications",
              description:
                "Integrated RabbitMQ to send notifications when user performs certain action.",
            },
            {
              title: "User authentication and authorization",
              description:
                "Implemented JWT tokens and refresh tokens for user authentication and authorization.",
            },
            {
              title: "CI/CD Pipeline",
              description:
                "Automated deployment using GitHub Actions with Docker and Azure.",
            },
            {
              title: "Scalable architecture",
              description:
                "Designed microservices architecture to allow for easy scaling.",
            },
            {
              title: "Modern frontend",
              description: "Developed frontend using Vue.js and Tailwind CSS.",
            },
          ],
          technical: [
            {
              type: "frontend",
              title: "Frontend Stack",
              description: "Vue.js, PrimeVue, Tailwind CSS",
            },
            {
              type: "backend",
              title: "Backend Services",
              description:
                ".NET, WebAPI, Entity Framework, PostgreSQL, RabbitMQ",
            },
            {
              type: "database",
              title: "Database",
              description: "PostgreSQL",
            },
          ],
        },
        images: ["/elibMain.png", "/elibProfile.png"],
      },
    ],
    notFound: "No projects found",
    goBack: "Go back",
    overview: "Overview",
    features: "Features",
    link: "Links",
    sourceCode: "Source code",
    technicalDetails: "Technical details",
  },
  experience: {
    title: "Work Experience",
    positions: [
      {
        id: 1,
        title: ".NET Developer",
        company: "eFitness",
        logo: "/efi_logo.jpg",
        period: "2024 May - Present",
        responsibilities: [
          "Development of microservices architecture as well as monolithic applications",
          "Designing and implementing RESTful APIs",
          "Working with Azure services",
        ],
        technologies: [
          ".NET",
          "WebAPI",
          "MVC",
          "Azure",
          "Docker",
          "Kubernetes",
          "RabbitMQ",
          "Redis",
          "SQL Server",
        ],
      },
      {
        id: 2,
        title: "Fullstack Developer",
        company: "Software studio",
        logo: "/ss_logo.jpg",
        period: "2024 January - 2024 May",
        responsibilities: [
          "Developed RESTful APIs",
          "Worked on frontend applications",
          "Integrated third-party services",
        ],
        technologies: [
          ".NET",
          "WebAPI",
          "SQL Server",
          "Vue.js",
          "Tailwind CSS",
        ],
      },
    ],
  },
  techLogos: [
    {
      name: ".NET Core",
      url: "/tech-logos/dotnet.svg",
    },
    {
      name: "Docker",
      url: "/tech-logos/docker.svg",
    },
    {
      name: "Kubernetes",
      url: "/tech-logos/kubernets.svg",
    },
    {
      name: "React",
      url: "/tech-logos/react.svg",
    },
    {
      name: "Vue.js",
      url: "/tech-logos/vue.svg",
    },
    {
      name: "MongoDB",
      url: "/tech-logos/mongodb.svg",
    },
    {
      name: "PostgreSQL",
      url: "/tech-logos/postgresql.svg",
    },
    {
      name: "Redis",
      url: "/tech-logos/redis.svg",
    },
    {
      name: "RabbitMQ",
      url: "/tech-logos/rabbitmq.svg",
    },
    {
      name: "Azure",
      url: "/tech-logos/azure.svg",
    },
    {
      name: "Google Cloud",
      url: "/tech-logos/google-cloud.svg",
    },
    {
      name: "Elasticsearch",
      url: "/tech-logos/elastic.svg",
    },
    {
      name: "Jetbrains",
      url: "/tech-logos/jetbrains.svg",
    },
    {
      name: "Microsoft sql server",
      url: "/tech-logos/microsoft-sql-server.svg",
    },
    //https://worldvectorlogo.com/
  ],
  projectssql: {
    sequence: [
      `SELECT *
      FROM projects p
      WHERE p.type = "AWESOME";`,
      500,
      "",
    ],
    textColor: "#ff79c6",
    speed: 35,
    showTime: 4300,
    fadeTime: 5500,
  },
  mainPagessql: {
    sequence: [
      `SELECT * from developers
        WHERE name = 'Maciej Sołowiej'
        AND city = 'Poznań'`,
      500,
      "",
    ],
    textColor: "#ff79c6",
    speed: 50,
    showTime: 5300,
    fadeTime: 5500,
  },
  footer: {
    contact: "Contact",
    description: "Feel free to reach out!",
    quickLinks: "Quick Links",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    technologies: "Technologies",
    location: "Location",
    locationDetails: "Poznań, Poland",
    remoteWork: "Open to remote work",
  },
  headers: {
    resume: "CV",
  },
};
export default en;
