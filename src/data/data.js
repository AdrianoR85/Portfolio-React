export const personalInfo = {
  name: "Adriano Rosa",
  role: "Estudante",
  bio: "Estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia, desenvolvimento web e análise de dados. Em transição de carreira, trazendo experiência em logística e supply chain para o mundo tech.",
  email: "adriano_rosa06@live.com",
  phone: "(11) 95555-0000",
  location: "Poá, SP - Brasil",
  github: "https://github.com/AdrianoBispo",
  linkedin: "https://www.linkedin.com/in/adriano-bispo-da-rosa/",
  avatar: "https://avatars.githubusercontent.com/u/103846311",
  cv: "/Curriculo.pdf"
}

export const aboutInfo = {
  description: "Sou estudante de Análise e Desenvolvimento de Sistemas na FAM, atualmente no 5º período. Possuo experiência profissional em logística e estou em transição de carreira para a área de tecnologia, combinando minha expertise em processos e análise com desenvolvimento de software.",
  education: [
    {
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      institution: "FAM",
      period: "2023 - 2025",
      status: "Em andamento"
    }
  ],
  interests: ["Desenvolvimento Web", "Análise de Dados", "Business Intelligence", "Automação de Processos"],
  stats: [
    /*{ label: "Anos de Experiência", value: "5+" },*/
    { label: "Projetos Realizados", value: "10+" },
    { label: "Tecnologias", value: "8+" }
  ]
}

export const projects = [
  {
    id: 1,
    title: "Kanban App",
    description: "Aplicação de gerenciamento de tarefas estilo Kanban com drag and drop, desenvolvida em React.",
    image: "/img/kanban-desktop.png",
    tags: ["React", "JavaScript", "CSS"],
    category: "frontend",
    github: "https://github.com/AdrianoBispo/kanban-app",
    demo: "https://adrianobispo.github.io/kanban-app/"
  },
  {
    id: 2,
    title: "Memory Game",
    description: "Jogo da memória interativo com diferentes níveis de dificuldade e sistema de pontuação.",
    image: "/img/memory_game.png",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    github: "https://github.com/AdrianoBispo/memory-game",
    demo: "https://adrianobispo.github.io/memory-game/"
  },
  {
    id: 3,
    title: "Relatório de Vendas",
    description: "Dashboard de análise de vendas com visualizações interativas desenvolvido em Power BI.",
    image: "/img/relatorio_vendas.png",
    tags: ["Power BI", "DAX", "SQL"],
    category: "data",
    github: "https://github.com/AdrianoBispo/relatorio-vendas"
  },
  {
    id: 4,
    title: "Stock Manager",
    description: "Sistema de gerenciamento de estoque com controle de entrada/saída e relatórios.",
    image: "/img/stock_manager.png",
    tags: ["Python", "SQLite", "Tkinter"],
    category: "backend",
    github: "https://github.com/AdrianoBispo/stock-manager"
  },
  {
    id: 5,
    title: "Dashboard Logística",
    description: "Dashboard interativo para análise de KPIs logísticos desenvolvido em Power BI.",
    image: "/img/logistics_dashboard.png",
    tags: ["Power BI", "DAX", "SQL"],
    category: "data",
    github: "https://github.com/AdrianoBispo/logistics-dashboard"
  }
]

export const skills = [
  { name: "HTML/CSS", level: 85, category: "frontend", color: "#e34c26" },
  { name: "JavaScript", level: 75, category: "frontend", color: "#f7df1e" },
  { name: "React", level: 70, category: "frontend", color: "#61dafb" },
  { name: "Python", level: 65, category: "backend", color: "#3776ab" },
  { name: "SQL", level: 70, category: "backend", color: "#336791" },
  { name: "Power BI", level: 80, category: "data", color: "#f2c811" },
  { name: "Git", level: 70, category: "tools", color: "#f05032" },
  { name: "Excel", level: 85, category: "tools", color: "#217346" }
]

export const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#about", label: "Sobre" },
  { href: "#projects", label: "Projetos" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contato" }
]
