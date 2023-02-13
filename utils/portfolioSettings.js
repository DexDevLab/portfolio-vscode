export const portfolioSettings = {
  titleBarTag: "github.com/dexdevlab - Visual Studio Code",
  repoLocation: "https://github.com/DexDevLab/portfolio-vscode",
  useTitleTag: false,
  projectName: "dexdevlab",
  devName: "DexDevLab",
  devDescription: "Full Stack Developer",
  contentGithub: {
    enabled: true,
    limitRepos: 6,
    calendarTheme: {
      level0: "#1A1B30",
      level1: "#5A11A3",
      level2: "#7D47B3",
      level3: "#A07DD5",
      level4: "#C792EA",
    },
  },
  contentProjects: {
    enabled: false,
    projects: [
      {
        id: 1,
        name: "Driwwwle",
        image: "https://imgur.com/kbGs6zH.png",
        description: "A platform for web developers to showcase their projects",
        tags: ["next", "node", "mongodb", "tailwind", "react-query"],
        source_code: "https://github.com/itsnitinr/driwwwle-v2",
        demo: "https://driwwwle.com/",
      },
      {
        id: 2,
        name: "PCB Cupid",
        image: "https://imgur.com/tAZotn3.png",
        description: "E-commerce website for a PCB manufacturing company",
        tags: ["react", "node", "mongodb", "redux", "razorpay", "material-ui"],
        demo: "https://www.pcbcupid.com/",
      },
      {
        id: 3,
        name: "HealthyWays",
        image: "https://imgur.com/8FFqaX8.png",
        description:
          "A food ordering platform for healthy and home-cooked meals",
        tags: ["react", "node", "mongodb", "redux", "razorpay", "material-ui"],
        source_code: "https://github.com/itsnitinr/healthyways",
        demo: "https://healthyways.herokuapp.com/",
      },
      {
        id: 4,
        name: "VSCode Portfolio",
        image: "https://imgur.com/mKkz0iz.png",
        description:
          "A themeable and developer-centric portfolio based on the VSCode",
        tags: ["next", "css-modules"],
        source_code: "https://github.com/itsnitinr/vscode-portfolio",
        demo: "http://vscode-portfolio.vercel.app/",
      },
    ],
  },
  contentArticles: {
    enabled: false,
    devtoProfileUrl: "https://dev.to/itsnitinr",
  },
  contentContact: {
    enabled: true,
    showContactForm: false,
    socials: [
      {
        social: "email",
        link: "dex.houshi@hotmail.com",
        href: "mailto:dex.houshi@hotmail.com",
      },
      {
        social: "github",
        link: "DexDevLab",
        href: "https://github.com/DexDevLab",
      },
      {
        social: "linkedin",
        link: "Daniel Augusto Almeida",
        href: "https://www.linkedin.com/in/daniel-augusto-almeida/",
      },
    ],
  },
  headMetadata: {
    titleTag: "DexDevLab - Portfólio de Daniel Augusto",
    description:
      "Daniel Augusto é um desenvolvedor focado em aplicações de qualidade e com o melhor da engenharia de software",
    keywords:
      "dexdevlab, dex, dex software developer, mern stack, web development, webdev, web dev, daniel augusto",
  },
};
