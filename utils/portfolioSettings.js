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
  aboutHTML: (
    <div align="center">
      <div style={{ marginBottom: "60px", textAlign: "center" }}>
        <h1>DexDevLab</h1>
      </div>
      <div style={{ textAlign: "center", width: "50%" }}>
        In love with IT. Working since 2001 with hardware and software in
        several areas. Student and Java/JavaScript Fullstack developer with
        modest knowledge in another languages and technologies.
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Languages
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://www.learn-c.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/C-%2300599C.svg?style=plastic&logo=c&logoColor=white"
                height="22"
                alt="C"
              />
            </a>
            <a
              href="https://dotnet.microsoft.com/en-us/languages/csharp"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/C%23-%23239120.svg?style=plastic&logo=c-sharp&logoColor=white"
                height="22"
                alt="C#"
              />
            </a>
            <a href="https://cplusplus.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/C++-%2300599C.svg?style=plastic&logo=c%2B%2B&logoColor=white"
                height="22"
                alt="C++"
              />
            </a>
            <a
              href="https://www.java.com/pt-BR/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://badges.aleen42.com/src/java.svg"
                height="22"
                alt="Java"
              />
            </a>
            <a
              href="https://www.javascript.com"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=plastic&logo=javascript&logoColor=%23F7DF1E"
                height="22"
                alt="JavaScript"
              />
            </a>
            <a
              href="https://www.rust-lang.org"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Rust-%23000000.svg?style=plastic&logo=rust&logoColor=white"
                height="22"
                alt="Rust"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Markup / Styling
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/CSS3-%231572B6.svg?style=plastic&logo=css3&logoColor=white"
                height="22"
                alt="CSS3"
              />
            </a>
            <a href="https://html.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/HTML5-%23E34F26.svg?style=plastic&logo=html5&logoColor=white"
                height="22"
                alt="HTML5"
              />
            </a>
            <a
              href="https://www.markdownguide.org"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Markdown-%23000000.svg?style=plastic&logo=markdown&logoColor=white"
                height="22"
                alt="Markdown"
              />
            </a>
            <a href="https://sass-lang.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/SASS-hotpink.svg?style=plastic&logo=SASS&logoColor=white"
                height="22"
                alt="SASS"
              />
            </a>
            <a href="https://lesscss.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/LESS-2B4C80?style=plastic&logo=less&logoColor=white"
                height="22"
                alt="LESS"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Design
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://www.canva.com/pt_br/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=plastic&logo=Canva&logoColor=white"
                height="22"
                alt="Canva"
              />
            </a>
            <a href="https://www.figma.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Figma-%23F24E1E.svg?style=plastic&logo=figma&logoColor=white"
                height="22"
                alt="Figma"
              />
            </a>
            <a href="https://www.gimp.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/GIMP-657D8B?style=plastic&logo=gimp&logoColor=FFFFFF"
                height="22"
                alt="GIMP"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Frameworks, Platforms and Libraries
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://angular.io" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/angular-%23DD0031.svg?style=plastic&logo=angular&logoColor=white"
                height="22"
                alt="Angular"
              />
            </a>
            <a href="https://angularjs.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/angular.js-%23E23237.svg?style=plastic&logo=angularjs&logoColor=white"
                height="22"
                alt="AngularJs"
              />
            </a>
            <a
              href="https://getbootstrap.com"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=plastic&logo=bootstrap&logoColor=white"
                height="22"
                alt="Bootstrap"
              />
            </a>
            <a href="https://chakra-ui.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=plastic&logo=chakraui&logoColor=white"
                height="22"
                alt="ChakraUI"
              />
            </a>
            <a href="https://jquery.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/jquery-%230769AD.svg?style=plastic&logo=jquery&logoColor=white"
                height="22"
                alt="jQuery"
              />
            </a>
            <a href="https://jwt.io" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/JWT-black?style=plastic&logo=JSON%20web%20tokens"
                height="22"
                alt="JWT"
              />
            </a>
            <a href="https://nextjs.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Next-black?style=plastic&logo=next.js&logoColor=white"
                height="22"
                alt="NextJS"
              />
            </a>
            <a href="https://nodejs.org/en/" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=plastic&logo=node.js&logoColor=white"
                height="22"
                alt="NodeJS"
              />
            </a>
            <a href="https://reactjs.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/react-black?style=plastic&logo=react&logoColor=white"
                height="22"
                alt="ReactJS"
              />
            </a>
            <a href="https://reactnative.dev" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/react_native-%2320232a.svg?style=plastic&logo=react&logoColor=%2361DAFB"
                height="22"
                alt="ReactNative"
              />
            </a>
            <a
              href="https://reactrouter.com/en/main/start/overview"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/React_Router-CA4245?style=plastic&logo=react-router&logoColor=white"
                height="22"
                alt="React Router"
              />
            </a>
            <a
              href="https://react-hook-form.com"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=plastic&logo=reacthookform&logoColor=white"
                height="22"
                alt="ReactHookForm"
              />
            </a>

            <a href="https://redux.js.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=plastic&logo=redux&logoColor=white"
                height="22"
                alt="Redux"
              />
            </a>

            <a href="https://spring.io" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/spring-%236DB33F.svg?style=plastic&logo=spring&logoColor=white"
                height="22"
                alt="Spring"
              />
            </a>
            <a href="https://svelte.dev" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/svelte-%23f1413d.svg?style=plastic&logo=svelte&logoColor=white"
                height="22"
                alt="Svelte"
              />
            </a>
            <a href="https://tailwindcss.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=plastic&logo=tailwind-css&logoColor=white"
                height="22"
                alt="TailwindCSS"
              />
            </a>
            <a href="https://tauri.app" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/tauri-%2320232a.svg?style=plastic&logo=tauri&logoColor=white"
                height="22"
                alt="Tauri"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Databases
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://firebase.google.com/?hl=pt"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Firebase-039BE5?style=plastic&logo=Firebase&logoColor=white"
                height="22"
                alt="Firebase"
              />
            </a>
            <a href="https://mariadb.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/MariaDB-003545?style=plastic&logo=mariadb&logoColor=white"
                height="22"
                alt="MariaDB"
              />
            </a>{" "}
            <a
              href="https://www.microsoft.com/pt-br/sql-server/sql-server-2019"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=plastic&logo=microsoft%20sql%20server&logoColor=white"
                height="22"
                alt="MicrosoftSQLServer"
              />
            </a>
            <a href="https://www.mongodb.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=plastic&logo=mongodb&logoColor=white"
                height="22"
                alt="MongoDB"
              />
            </a>
            <a href="https://www.mysql.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/mysql-%2300f.svg?style=plastic&logo=mysql&logoColor=white"
                height="22"
                alt="MySQL"
              />
            </a>
            <a href="https://redis.io" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/redis-%23DD0031.svg?style=plastic&logo=redis&logoColor=white"
                height="22"
                alt="Redis"
              />
            </a>
            <a
              href="https://www.sqlite.org/index.html"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/sqlite-%2307405e.svg?style=plastic&logo=sqlite&logoColor=white"
                height="22"
                alt="SQLite"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          ORM
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://www.prisma.io" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Prisma-3982CE?style=plastic&logo=Prisma&logoColor=white"
                height="22"
                alt="PrismaIO"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          IDEs / Editors
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://www.eclipse.org/downloads/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Eclipse-FE7A16.svg?style=plastic&logo=Eclipse&logoColor=white"
                height="22"
                alt="Eclipse"
              />
            </a>
            <a
              href="https://netbeans.apache.org"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/NetBeansIDE-1B6AC6.svg?style=plastic&logo=apache-netbeans-ide&logoColor=white"
                height="22"
                alt="NetBeansIDE"
              />
            </a>
            <a
              href="https://notepad-plus-plus.org"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Notepad++-90E59A.svg?style=plastic&logo=notepad%2b%2b&logoColor=black"
                height="22"
                alt="Notepad++"
              />
            </a>
            <a
              href="https://code.visualstudio.com"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=plastic&logo=visual-studio-code&logoColor=white"
                height="22"
                alt="VSCode"
              />
            </a>
            <a
              href="https://visualstudio.microsoft.com/pt-br/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=plastic&logo=visual-studio&logoColor=white"
                height="22"
                alt="VisualStudio"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Building
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://maven.apache.org"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=plastic&logo=Apache%20Maven&logoColor=white"
                height="22"
                alt="Maven"
              />
            </a>
            <a
              href="https://tomcat.apache.org"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=plastic&logo=apache-tomcat&logoColor=black"
                height="22"
                alt="Tomcat"
              />
            </a>
            <a href="https://ant.apache.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Apache%20Ant-A81C7D?style=plastic&logo=Apache%20Ant&logoColor=white"
                height="22"
                alt="Ant"
              />
            </a>
            <a href="https://gradle.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Gradle-02303A.svg?style=plastic&logo=Gradle&logoColor=white"
                height="22"
                alt="Gradle"
              />
            </a>
            <a href="https://www.npmjs.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/NPM-%23000000.svg?style=plastic&logo=npm&logoColor=white"
                height="22"
                alt="NPM"
              />
            </a>
            <a href="https://yarnpkg.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=plastic&logo=yarn&logoColor=white"
                height="22"
                alt="Yarn"
              />
            </a>
            <a href="https://gulpjs.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Gulp-%23CF4647.svg?style=plastic&logo=gulp&logoColor=white"
                height="22"
                alt="Gulp"
              />
            </a>
            <a href="https://babeljs.io" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Babel-F9DC3e?style=plastic&logo=babel&logoColor=black"
                height="22"
                alt="Babel"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Terminal / Scripting
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://learn.microsoft.com/pt-br/powershell/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/PowerShell-%235391FE.svg?style=plastic&logo=powershell&logoColor=white"
                height="22"
                alt="PowerShell"
              />
            </a>
            <a
              href="https://devdocs.io/bash/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/shell_script-%23121011.svg?style=plastic&logo=gnu-bash&logoColor=white"
                height="22"
                alt="Bash"
              />
            </a>
            <a
              href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=plastic&logo=windows-terminal&logoColor=white"
                height="22"
                alt="WindowsTerminal"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Version Control
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://bitbucket.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=plastic&logo=bitbucket&logoColor=white"
                height="22"
                alt="Bitbucket"
              />
            </a>
            <a href="https://git-scm.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/git-%23F05033.svg?style=plastic&logo=git&logoColor=white"
                height="22"
                alt="Git"
              />
            </a>
            <a href="https://gitea.io/pt-br/" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Gitea-34495E?style=plastic&logo=gitea&logoColor=5D9425"
                height="22"
                alt="Gitea"
              />
            </a>
            <a href="https://github.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/github-%23121011.svg?style=plastic&logo=github&logoColor=white"
                height="22"
                alt="GitHub"
              />
            </a>
            <a
              href="https://about.gitlab.com"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/gitlab-%23181717.svg?style=plastic&logo=gitlab&logoColor=white"
                height="22"
                alt="GitLab"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Testing / Tools
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://jestjs.io/pt-BR/"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/-jest-%23C21325?style=plastic&logo=jest&logoColor=white"
                height="22"
                alt="Jest"
              />
            </a>
            <a href="https://eslint.org" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/ESLint-4B3263?style=plastic&logo=eslint&logoColor=white"
                height="22"
                alt="ESLint"
              />
            </a>
            <a
              href="https://insomnia.rest/download"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Insomnia-black?style=plastic&logo=insomnia&logoColor=5849BE"
                height="22"
                alt="Insomnia"
              />
            </a>
            <a href="https://www.postman.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Postman-FF6C37?style=plastic&logo=postman&logoColor=white"
                height="22"
                alt="Postman"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Virtualization / Deploy
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://www.docker.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/docker-%230db7ed.svg?style=plastic&logo=docker&logoColor=white"
                height="22"
                alt="Docker"
              />
            </a>
            <a
              href="https://learn.microsoft.com/pt-br/windows-server/virtualization/hyper-v/hyper-v-technology-overview"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/-Hyper_V-017AD7?logoColor=white&style=plastic"
                height="22"
                alt="HyperV"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Cloud
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://nextcloud.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Next%20Cloud-0B94DE?style=plastic&logo=nextcloud&logoColor=white"
                height="22"
                alt="NextCloud"
              />
            </a>
            <a
              href="https://firebase.google.com/?hl=pt"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=plastic&logo=firebase"
                height="22"
                alt="Firebase"
              />
            </a>
            <a
              href="https://cloud.google.com/?hl=pt-br"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=plastic&logo=google-cloud&logoColor=white"
                height="22"
                alt="GoogleCloud"
              />
            </a>
            <a href="https://www.heroku.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/heroku-%23430098.svg?style=plastic&logo=heroku&logoColor=white"
                height="22"
                alt="Heroku"
              />
            </a>
            <a href="https://www.netlify.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/netlify-%23000000.svg?style=plastic&logo=netlify&logoColor=#00C7B7"
                height="22"
                alt="Netlify"
              />
            </a>
            <a href="https://vercel.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/vercel-%23000000.svg?style=plastic&logo=vercel&logoColor=white"
                height="22"
                alt="Vercel"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Operating Systems
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://ubuntu.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/Ubuntu-E95420?style=plastic&logo=ubuntu&logoColor=white"
                height="22"
                alt="Ubuntu"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/software-download/windows10"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Windows-0078D6?style=plastic&logo=windows&logoColor=white"
                height="22"
                alt="Windows"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Office
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/access"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_Access-A4373A?style=plastic&logo=microsoft-access&logoColor=white"
                height="22"
                alt="MSAccess"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/excel"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_Excel-217346?style=plastic&logo=microsoft-excel&logoColor=white"
                height="22"
                alt="MSExcel"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/microsoft-office"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=plastic&logo=microsoft-office&logoColor=white"
                height="22"
                alt="MSOffice"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/powerpoint"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=plastic&logo=microsoft-powerpoint&logoColor=white"
                height="22"
                alt="MSPowerPoint"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/sharepoint/collaboration"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_SharePoint-0078D4?style=plastic&logo=microsoft-sharepoint&logoColor=white"
                height="22"
                alt="MSSharePoint"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/visio/flowchart-software"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_Visio-3955A3?style=plastic&logo=microsoft-visio&logoColor=white"
                height="22"
                alt="MSVisio"
              />
            </a>
            <a
              href="https://www.microsoft.com/pt-br/microsoft-365/word?activetab=tabs%3afaqheaderregion3"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Microsoft_Word-2B579A?style=plastic&logo=microsoft-word&logoColor=white"
                height="22"
                alt="MSWord"
              />
            </a>
            <a
              href="https://www.notion.so/pt-br"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Notion-%23000000.svg?style=plastic&logo=notion&logoColor=white"
                height="22"
                alt="Notion"
              />
            </a>
            <a
              href="https://slack.com/intl/pt-br"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Slack-4A154B?style=plastic&logo=slack&logoColor=white"
                height="22"
                alt="Slack"
              />
            </a>
            <a
              href="https://trello.com/pt-BR"
              style={{ justifySelf: "center" }}
            >
              <img
                src="https://img.shields.io/badge/Trello-%23026AA7.svg?style=plastic&logo=Trello&logoColor=white"
                height="22"
                alt="Trello"
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: "60px", marginBottom: "30px", textAlign: "left" }}
      >
        <h3
          style={{ marginBottom: "40px", textAlign: "center", width: "100%" }}
        >
          Misc
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gridTemplateRows: "repeat(2, 1fr)",
              columnGap: "15px",
              rowGap: "15px",
            }}
          >
            <a href="https://www.ui.com" style={{ justifySelf: "center" }}>
              <img
                src="https://img.shields.io/badge/ubiquiti-%230559C9.svg?style=plastic&logo=ubiquiti&logoColor=white"
                height="22"
                alt="Ubiquiti"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
};
