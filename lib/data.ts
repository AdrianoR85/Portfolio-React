export const portfolioData = {
  personal: {
    name: "Adriano Rosa",
    role: "Desenvolvedor Full Stack & Analista de Dados",
    tagline: "Construindo experiências digitais com código e dados",
    email: "adrianorosa085@gmail.com",
    phone: "+55 47 996374501",
    github: "https://github.com/AdrianoR85",
    linkedin: "https://www.linkedin.com/in/adriano-rosa-741979182/",
    whatsapp: "https://wa.me/47996374501",
    avatar: "https://github.com/AdrianoR85.png",
    cvUrl: "/Adrino_Rosa_CV.pdf"
  },
  about: {
    intro: "Olá! Sou Adriano Rosa.",
    description: [
      "Estudante de Análise e Desenvolvimento de Sistemas na FAM - Universidade das Américas, com formação técnica em Logística e mais de cinco anos de experiência na área.",
      "Em 2019, fiz um intercâmbio na Nova Zelândia, uma experiência que ampliou minha visão de mundo e fortaleceu minha paixão por aprender e explorar novas tecnologias.",
      "Atualmente, foco em desenvolvimento web com React e Python, além de Business Intelligence com Power BI. Busco sempre unir análise de dados com interfaces modernas e funcionais."
    ],
    interests: ["Desenvolvimento Web", "Análise de Dados", "Automação", "Videogames"]
  },
  education: [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "FAM - Universidade das Américas",
      period: "2024 - Em andamento"
    },
    {
      degree: "Técnico em Logística",
      institution: "Unisociesc",
      period: "2014 - 2015"
    }
  ],
  projects: [
    {
      name: "Kanban Board",
      description: "Aplicação de gerenciamento de tarefas com drag & drop, desenvolvida em React.",
      image: "/img/kanban-desktop.png",
      liveUrl: "https://kanban-board-kb.netlify.app/",
      codeUrl: "https://github.com/AdrianoR85/Kanban",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      name: "Memory Game",
      description: "Jogo da memória com tema Pokémon, utilizando API externa para dados.",
      image: "/img/memory_game.png",
      liveUrl: "https://pokememory00.netlify.app/",
      codeUrl: "https://github.com/AdrianoR85/memory_game",
      tags: ["React", "API", "JavaScript"]
    },
    {
      name: "Logistics Dashboard",
      description: "Dashboard interativo para análise de dados logísticos com Streamlit e Python.",
      image: "/img/logistics_dashboard.png",
      liveUrl: "https://logisticsdashboard-s9azdejg3ai43dp7eawyzz.streamlit.app/",
      codeUrl: "https://github.com/AdrianoR85/Logistics_Dashboard",
      tags: ["Python", "Streamlit", "Data Analysis"]
    },
    {
      name: "Stock Manager",
      description: "Sistema de gerenciamento de estoque desenvolvido em Python.",
      image: "/img/stock_manager.png",
      liveUrl: "https://github.com/AdrianoR85/stock-manager",
      codeUrl: "https://github.com/AdrianoR85/stock-manager",
      tags: ["Python", "SQLite", "Tkinter"]
    },
    {
      name: "Data Lake BI",
      description: "Projeto de Business Intelligence com SQL Server e Data Lake architecture.",
      image: "/img/Reporting Serves.PNG",
      liveUrl: "https://github.com/AdrianoR85/Business-Intelligence-with-SQL-Server",
      codeUrl: "https://github.com/AdrianoR85/Business-Intelligence-with-SQL-Server",
      tags: ["SQL Server", "Power BI", "ETL"]
    }
  ],
  skills: [
    { name: "HTML", level: 85, category: "Frontend" },
    { name: "CSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 70, category: "Frontend" },
    { name: "React", level: 65, category: "Frontend" },
    { name: "Python", level: 75, category: "Backend" },
    { name: "SQL", level: 70, category: "Data" },
    { name: "Power BI", level: 65, category: "Data" },
    { name: "Git", level: 70, category: "Tools" }
  ],
  navItems: [
    { id: "home", label: "Início" },
    { id: "about", label: "Sobre" },
    { id: "projects", label: "Projetos" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contato" }
  ]
}
