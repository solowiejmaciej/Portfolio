import {
  Code2,
  Terminal,
  Database,
  Container,
  Cloud,
  Book,
} from "lucide-react";

const pl = {
  hero: {
    title: "Programista .NET",
    social: {
      github: "https://github.com/solowiejmaciej",
      linkedin: "https://www.linkedin.com/in/maciej-so%C5%82owiej-9bbb85235/",
    },
    sequence: [
      "Kreatywny",
      3000,
      "Nowoczesny",
      3000,
      "Z pasją",
      3000,
      "Fullstack",
      3000,
    ],
  },
  about: {
    title: "O mnie",
    description:
      "Programista full-stack z doświadczeniem w budowaniu nowoczesnych aplikacji internetowych. Skupiam się na tworzeniu skalowalnych i łatwych w utrzymaniu rozwiązań przy użyciu najnowszych technologii.",
    image: "/me_about.jpg",
  },
  technologies: {
    title: "Technologie i narzędzia",
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
        name: "Bazy danych",
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
    title: "Projekty",
    view: "Dowiedz się więcej",
    list: [
      {
        id: 1,
        title: "DMS",
        description: "System zarządzania urządzeniami IoT",
        image: "/dmsMain.png",
        github: "https://github.com/solowiejmaciej/DMS",
        demo: null,
        tags: [".NET", "Next.js", "PostgreSQL", "Docker", "Azure", "RabbitMQ"],
        details: {
          overview: [
            "System do zarządzania urządzeniami IoT z nowoczesnym i przyjaznym interfejsem.",
            "Podczas pracy nad tym projektem nauczyłem się wiele o urządzeniach IoT i ich zarządzaniu.",
            "Starałem się zaimplementować jak najwięcej funkcjonalności, aby system był jak najbardziej użyteczny.",
          ],
          features: [
            {
              title: "Powiadomienia oparte na zdarzeniach",
              description:
                "Wykorzystałem RabbitMQ do komunikacji z usługą odpowiedzalną za wysyłke powiadomień, gdy użytkownik wykonuje określone akcje.",
            },
            {
              title: "Zdalna kontrola urządzeń",
              description:
                "Wykonywanie predefiniowanych akcji na urządzeniach, takich jak restart czy aktualizacja OTA.",
            },
            {
              title: "Uwierzytelnianie i autoryzacja przez Google",
              description: "Zaimplementowane uwierzytelnianie OAuth Google.",
            },
            {
              title: "Monitoring urządzeń",
              description:
                "Monitorowanie stanu i kondycji urządzeń, w tym użycia CPU i pamięci wraz z logami.",
            },
            {
              title: "Zarządzanie ustawieniami",
              description:
                "Zarządzanie ustawieniami urządzeń. Użytkownik może zmieniać ustawienia urządzeń zdalnie.",
            },
          ],
          technical: [
            {
              type: "frontend",
              title: "Frontend",
              description: "Next.js, Tailwind CSS",
            },
            {
              type: "backend",
              title: "Backend",
              description:
                ".NET, WebAPI, Entity Framework, PostgreSQL, RabbitMQ, Blob Storage",
            },
            {
              type: "database",
              title: "Baza danych",
              description: "PostgreSQL",
            },
          ],
        },
        images: ["/dmsMain.png", "/dmsProfile.png"],
        demo: "https://dms.maciejsolowiej.com/",
      },
      {
        id: 2,
        title: "eLib",
        description: "Nowoczesny system zarządzania biblioteką",
        image: "/elibMain.png",
        github: "https://github.com/solowiejmaciej/eLib",
        demo: null,
        tags: [".NET", "Vue.js", "PostgreSQL", "Docker", "Azure", "RabbitMQ"],
        details: {
          overview: [
            "System zarządzania biblioteką z nowoczesnym i przyjaznym interfejsem.",
            "Zaprojektowanie i rozwój API RESTful do zarządzania książkami i użytkownikami.",
          ],
          features: [
            {
              title: "Konfigurowalne powiadomienia oparte na zdarzeniach",
              description:
                "Zintegrowany RabbitMQ do wysyłania powiadomień, gdy użytkownik wykonuje określone akcje.",
            },
            {
              title: "Uwierzytelnianie i autoryzacja użytkowników",
              description:
                "Zaimplementowane tokeny JWT i tokeny odświeżające do uwierzytelniania i autoryzacji użytkowników.",
            },
            {
              title: "Pipeline CI/CD",
              description:
                "Zautomatyzowane wdrażanie przy użyciu GitHub Actions z Docker i Azure.",
            },
            {
              title: "Skalowalna architektura",
              description:
                "Zaprojektowana architektura mikroserwisów umożliwiająca łatwe skalowanie.",
            },
            {
              title: "Nowoczesny frontend",
              description:
                "Frontend stworzony przy użyciu Vue.js i Tailwind CSS.",
            },
          ],
          technical: [
            {
              type: "frontend",
              title: "Stos Frontend",
              description: "Vue.js, PrimeVue, Tailwind CSS",
            },
            {
              type: "backend",
              title: "Usługi Backend",
              description:
                ".NET, WebAPI, Entity Framework, PostgreSQL, RabbitMQ",
            },
            {
              type: "database",
              title: "Baza danych",
              description: "PostgreSQL",
            },
          ],
        },
        images: ["/elibMain.png", "/elibProfile.png"],
      },
    ],
    swipeHint: "Przesuń by zobaczyć więcej",
    notFound: "Nie znaleziono projektów",
    goBack: "Wróć",
    overview: "Opis",
    features: "Funkcjonalności",
    links: "Linki",
    sourceCode: "Kod źródłowy",
    technicalDetails: "Szczegóły techniczne",
  },
  experience: {
    title: "Doświadczenie zawodowe",
    positions: [
      {
        id: 1,
        title: "Programista .NET",
        company: "eFitness",
        logo: "/efi_logo.jpg",
        period: "Maj 2024 - Obecnie",
        responsibilities: [
          "Rozwój architektury mikroserwisów oraz aplikacji monolitycznych",
          "Projektowanie i implementacja REST API",
          "Praca z usługami Azure",
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
        title: "Programista Fullstack",
        company: "Software studio",
        logo: "/ss_logo.jpg",
        period: "Styczeń 2024 - Maj 2024",
        responsibilities: [
          "Rozwój REST API",
          "Praca nad aplikacjami frontendowymi",
          "Integracja usług zewnętrznych",
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
    contact: "Kontakt",
    description: "Zapraszam do kontaktu",
    quickLinks: "Szybki dostęp",
    about: "O mnie",
    experience: "Doświadczenie",
    projects: "Projekty",
    technologies: "Technologie",
    location: "Lokalizacja",
    locationDetails: "Poznań, Polska",
    remoteWork: "Otwarty na pracę zdalną",
  },
  headers: {
    resume: "CV",
  },
};
export default pl;
