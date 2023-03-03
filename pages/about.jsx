import Badge from "../components/Badge";
import styles from "../styles/About.module.css";

const AboutPage = () => {
  const badgesList = [
    {
      sectionLabel: "Languages",
      badges: [
        {
          height: "22",
          alt: "C",
          src: "https://img.shields.io/badge/C-%2300599C.svg?style=flat&logo=c&logoColor=white",
          link: "https://www.learn-c.org",
        },
        {
          height: "22",
          alt: "C#",
          src: "https://img.shields.io/badge/C%23-%23239120.svg?style=flat&logo=c-sharp&logoColor=white",
          link: "https://dotnet.microsoft.com/en-us/languages/csharp",
        },
        {
          height: "22",
          alt: "C++",
          src: "https://img.shields.io/badge/C++-%2300599C.svg?style=flat&logo=c%2B%2B&logoColor=white",
          link: "https://cplusplus.com",
        },
        {
          height: "22",
          alt: "Java",
          src: "https://badges.aleen42.com/src/java.svg",
          link: "https://www.java.com/pt-BR/",
        },
        {
          height: "22",
          alt: "JavaScript",
          src: "https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E",
          link: "https://www.javascript.com",
        },
        {
          height: "22",
          alt: "Rust",
          src: "https://img.shields.io/badge/Rust-%23000000.svg?style=flat&logo=rust&logoColor=white",
          link: "https://www.rust-lang.org",
        },
      ],
    },
    {
      sectionLabel: "Markup / Styling",
      badges: [
        {
          height: "22",
          alt: "CSS3",
          src: "https://img.shields.io/badge/CSS3-%231572B6.svg?style=flat&logo=css3&logoColor=white",
          link: "https://www.w3.org/Style/CSS/Overview.en.html",
        },
        {
          height: "22",
          alt: "HTML",
          src: "https://img.shields.io/badge/HTML5-%23E34F26.svg?style=flat&logo=html5&logoColor=white",
          link: "https://html.com",
        },
        {
          height: "22",
          alt: "Markdown",
          src: "https://img.shields.io/badge/Markdown-%23000000.svg?style=flat&logo=markdown&logoColor=white",
          link: "https://www.markdownguide.org",
        },
        {
          height: "22",
          alt: "SASS",
          src: "https://img.shields.io/badge/SASS-hotpink.svg?style=flat&logo=SASS&logoColor=white",
          link: "https://sass-lang.com",
        },
        {
          height: "22",
          alt: "LESS",
          src: "https://img.shields.io/badge/LESS-2B4C80?style=flat&logo=less&logoColor=white",
          link: "https://lesscss.org",
        },
      ],
    },
    {
      sectionLabel: "Design",
      badges: [
        {
          height: "22",
          alt: "Canva",
          src: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=flat&logo=Canva&logoColor=white",
          link: "https://www.canva.com/pt_br/",
        },
        {
          height: "22",
          alt: "Figma",
          src: "https://img.shields.io/badge/Figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white",
          link: "https://www.figma.com",
        },
        {
          height: "22",
          alt: "GIMP",
          src: "https://img.shields.io/badge/GIMP-657D8B?style=flat&logo=gimp&logoColor=FFFFFF",
          link: "https://www.gimp.org",
        },
      ],
    },
    {
      sectionLabel: "Frameworks, Platforms and Libraries",
      badges: [
        {
          height: "22",
          alt: "ExpressJS",
          src: "https://img.shields.io/badge/Express.js-404D59?style=flat",
          link: "https://expressjs.com/pt-br/",
        },
        {
          height: "22",
          alt: "Nginx",
          src: "https://img.shields.io/badge/nginx-%23009639.svg?style=flat&logo=nginx&logoColor=white",
          link: "https://www.nginx.com",
        },
        {
          height: "22",
          alt: "Angular",
          src: "https://img.shields.io/badge/angular-%23DD0031.svg?style=flat&logo=angular&logoColor=white",
          link: "https://angular.io",
        },
        {
          height: "22",
          alt: "AngularJS",
          src: "https://img.shields.io/badge/angular.js-%23E23237.svg?style=flat&logo=angularjs&logoColor=white",
          link: "https://angularjs.org",
        },
        {
          height: "22",
          alt: "Bootstrap",
          src: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=flat&logo=bootstrap&logoColor=white",
          link: "https://getbootstrap.com",
        },
        {
          height: "22",
          alt: "ChakraUI",
          src: "https://img.shields.io/badge/chakra-%234ED1C5.svg?style=flat&logo=chakraui&logoColor=white",
          link: "https://chakra-ui.com",
        },
        {
          height: "22",
          alt: "jQuery",
          src: "https://img.shields.io/badge/jquery-%230769AD.svg?style=flat&logo=jquery&logoColor=white",
          link: "https://jquery.com",
        },
        {
          height: "22",
          alt: "JWT",
          src: "https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens",
          link: "https://jwt.io",
        },
        {
          height: "22",
          alt: "NextJS",
          src: "https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white",
          link: "https://nextjs.org",
        },
        {
          height: "22",
          alt: "NodeJS",
          src: "https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white",
          link: "https://nodejs.org/en/",
        },
        {
          height: "22",
          alt: "ReactJS",
          src: "https://img.shields.io/badge/react-black?style=flat&logo=react&logoColor=white",
          link: "https://reactjs.org",
        },
        {
          height: "22",
          alt: "ReactNative",
          src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB",
          link: "https://reactnative.dev",
        },
        {
          height: "22",
          alt: "ReactRouter",
          src: "https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white",
          link: "https://reactrouter.com/en/main/start/overview",
        },
        {
          height: "22",
          alt: "ReactHookForm",
          src: "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=flat&logo=reacthookform&logoColor=white",
          link: "https://react-hook-form.com",
        },
        {
          height: "22",
          alt: "ChartJS",
          src: "https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white",
          link: "https://www.chartjs.org",
        },
        {
          height: "22",
          alt: "Redux",
          src: "https://img.shields.io/badge/redux-%23593d88.svg?style=flat&logo=redux&logoColor=white",
          link: "https://redux.js.org",
        },
        {
          height: "22",
          alt: "Spring",
          src: "https://img.shields.io/badge/spring-%236DB33F.svg?style=flat&logo=spring&logoColor=white",
          link: "https://spring.io",
        },
        {
          height: "22",
          alt: "Svelte",
          src: "https://img.shields.io/badge/svelte-%23f1413d.svg?style=flat&logo=svelte&logoColor=white",
          link: "https://svelte.dev",
        },
        {
          height: "22",
          alt: "TailwindCSS",
          src: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white",
          link: "https://tailwindcss.com",
        },
        {
          height: "22",
          alt: "Tauri",
          src: "https://img.shields.io/badge/tauri-%2320232a.svg?style=flat&logo=tauri&logoColor=white",
          link: "https://tauri.app",
        },
        {
          height: "22",
          alt: "ElectronJS",
          src: "https://img.shields.io/badge/Electron-191970?style=flat&logo=Electron&logoColor=white",
          link: "https://www.electronjs.org/pt/",
        },
      ],
    },
    {
      sectionLabel: "Databases",
      badges: [
        {
          height: "22",
          alt: "Firebase",
          src: "https://img.shields.io/badge/Firebase-039BE5?style=flat&logo=Firebase&logoColor=white",
          link: "https://firebase.google.com/?hl=pt",
        },
        {
          height: "22",
          alt: "MariaDB",
          src: "https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white",
          link: "https://mariadb.org",
        },
        {
          height: "22",
          alt: "MicrosoftSQLServer",
          src: 'https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=flat&logo=microsoft%20sql%20server&logoColor=white"',
          link: "https://www.microsoft.com/pt-br/sql-server/sql-server-2019",
        },
        {
          height: "22",
          alt: "MongoDB",
          src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white",
          link: "https://www.mongodb.com",
        },
        {
          height: "22",
          alt: "MySQL",
          src: "https://img.shields.io/badge/mysql-%2300f.svg?style=flat&logo=mysql&logoColor=white",
          link: "https://www.mysql.com",
        },
        {
          height: "22",
          alt: "Redis",
          src: "https://img.shields.io/badge/redis-%23DD0031.svg?style=flat&logo=redis&logoColor=white",
          link: "https://redis.io",
        },
        {
          height: "22",
          alt: "SQLite",
          src: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=flat&logo=sqlite&logoColor=white",
          link: "https://www.sqlite.org/index.html",
        },
      ],
    },
    {
      sectionLabel: "ORM",
      badges: [
        {
          height: "22",
          alt: "PrismaIO",
          src: "https://img.shields.io/badge/Prisma-3982CE?style=flat&logo=Prisma&logoColor=white",
          link: "https://www.prisma.io",
        },
      ],
    },
    {
      sectionLabel: "IDEs / Editors",
      badges: [
        {
          height: "22",
          alt: "Eclipse",
          src: "https://img.shields.io/badge/Eclipse-FE7A16.svg?style=flat&logo=Eclipse&logoColor=white",
          link: "https://www.eclipse.org/downloads/",
        },
        {
          height: "22",
          alt: "NetbeansIDE",
          src: "https://img.shields.io/badge/NetBeansIDE-1B6AC6.svg?style=flat&logo=apache-netbeans-ide&logoColor=white",
          link: "https://netbeans.apache.org",
        },
        {
          height: "22",
          alt: "Notepad++",
          src: "https://img.shields.io/badge/Notepad++-90E59A.svg?style=flat&logo=notepad%2b%2b&logoColor=black",
          link: "https://notepad-plus-plus.org",
        },
        {
          height: "22",
          alt: "VSCode",
          src: "https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=flat&logo=visual-studio-code&logoColor=white",
          link: "https://code.visualstudio.com",
        },
        {
          height: "22",
          alt: "VisualStudio",
          src: "https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=flat&logo=visual-studio&logoColor=white",
          link: "https://visualstudio.microsoft.com/pt-br/",
        },
      ],
    },
    {
      sectionLabel: "Building",
      badges: [
        {
          height: "22",
          alt: "Maven",
          src: "https://img.shields.io/badge/Apache%20Maven-C71A36?style=flat&logo=Apache%20Maven&logoColor=white",
          link: "https://maven.apache.org",
        },
        {
          height: "22",
          alt: "Apache Tomcat",
          src: "https://img.shields.io/badge/apache%20tomcat-%23F8DC75.svg?style=flat&logo=apache-tomcat&logoColor=black",
          link: "https://tomcat.apache.org",
        },
        {
          height: "22",
          alt: "Ant",
          src: "https://img.shields.io/badge/Apache%20Ant-A81C7D?style=flat&logo=Apache%20Ant&logoColor=white",
          link: "https://ant.apache.org",
        },
        {
          height: "22",
          alt: "Gradle",
          src: "https://img.shields.io/badge/Gradle-02303A.svg?style=flat&logo=Gradle&logoColor=white",
          link: "https://gradle.org",
        },
        {
          height: "22",
          alt: "NPM",
          src: "https://img.shields.io/badge/NPM-%23000000.svg?style=flat&logo=npm&logoColor=white",
          link: "https://www.npmjs.com",
        },
        {
          height: "22",
          alt: "Yarn",
          src: "https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat&logo=yarn&logoColor=white",
          link: "https://yarnpkg.com",
        },
        {
          height: "22",
          alt: "Gulp",
          src: "https://img.shields.io/badge/Gulp-%23CF4647.svg?style=flat&logo=gulp&logoColor=white",
          link: "https://gulpjs.com",
        },
        {
          height: "22",
          alt: "BabelJS",
          src: "https://img.shields.io/badge/Babel-F9DC3e?style=flat&logo=babel&logoColor=black",
          link: "https://babeljs.io",
        },
        {
          height: "22",
          alt: "Webpack",
          src: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=flat&logo=webpack&logoColor=black",
          link: "https://webpack.js.org",
        },
      ],
    },
    {
      sectionLabel: "Terminal / Scripting",
      badges: [
        {
          height: "22",
          alt: "Powershell",
          src: "https://img.shields.io/badge/PowerShell-%235391FE.svg?style=flat&logo=powershell&logoColor=white",
          link: "https://learn.microsoft.com/pt-br/powershell/",
        },
        {
          height: "22",
          alt: "Bash",
          src: "https://img.shields.io/badge/shell_script-%23121011.svg?style=flat&logo=gnu-bash&logoColor=white",
          link: "https://devdocs.io/bash/",
        },
        {
          height: "22",
          alt: "Windows Terminal",
          src: "https://img.shields.io/badge/Windows%20Terminal-%234D4D4D.svg?style=flat&logo=windows-terminal&logoColor=white",
          link: "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands",
        },
      ],
    },
    {
      sectionLabel: "Version Control",
      badges: [
        {
          height: "22",
          alt: "BitBucket",
          src: "https://img.shields.io/badge/bitbucket-%230047B3.svg?style=flat&logo=bitbucket&logoColor=white",
          link: "https://bitbucket.org",
        },
        {
          height: "22",
          alt: "Gith",
          src: "https://img.shields.io/badge/git-%23F05033.svg?style=flat&logo=git&logoColor=white",
          link: "https://git-scm.com",
        },
        {
          height: "22",
          alt: "Gitea",
          src: "https://img.shields.io/badge/Gitea-34495E?style=flat&logo=gitea&logoColor=5D9425",
          link: "https://gitea.io/pt-br/",
        },
        {
          height: "22",
          alt: "Github",
          src: "https://img.shields.io/badge/github-%23121011.svg?style=flat&logo=github&logoColor=white",
          link: "https://github.com",
        },
        {
          height: "22",
          alt: "GitLab",
          src: "https://img.shields.io/badge/gitlab-%23181717.svg?style=flat&logo=gitlab&logoColor=white",
          link: "https://about.gitlab.com",
        },
      ],
    },
    {
      sectionLabel: "Testing / Tools",
      badges: [
        {
          height: "22",
          alt: "Jest",
          src: "https://img.shields.io/badge/-jest-%23C21325?style=flat&logo=jest&logoColor=white",
          link: "https://jestjs.io/pt-BR/",
        },
        {
          height: "22",
          alt: "ESLint",
          src: "https://img.shields.io/badge/ESLint-4B3263?style=flat&logo=eslint&logoColor=white",
          link: "https://eslint.org",
        },
        {
          height: "22",
          alt: "Insomnia",
          src: "https://img.shields.io/badge/Insomnia-black?style=flat&logo=insomnia&logoColor=5849BE",
          link: "https://insomnia.rest/download",
        },
        {
          height: "22",
          alt: "Postman",
          src: "https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white",
          link: "https://www.postman.com",
        },
        {
          height: "22",
          alt: "Grafana",
          src: "https://img.shields.io/badge/grafana-%23F46800.svg?style=flat&logo=grafana&logoColor=white",
          link: "https://grafana.com",
        },
      ],
    },
    {
      sectionLabel: "Virtualization / Deploy",
      badges: [
        {
          height: "22",
          alt: "Docker",
          src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=flat&logo=docker&logoColor=white",
          link: "https://www.docker.com",
        },
        {
          height: "22",
          alt: "HyperV",
          src: "https://img.shields.io/badge/-Hyper_V-017AD7?logoColor=white&style=flat",
          link: "https://learn.microsoft.com/pt-br/windows-server/virtualization/hyper-v/hyper-v-technology-overview",
        },
      ],
    },
    {
      sectionLabel: "Cloud",
      badges: [
        {
          height: "22",
          alt: "NextCloud",
          src: "https://img.shields.io/badge/Next%20Cloud-0B94DE?style=flat&logo=nextcloud&logoColor=white",
          link: "https://nextcloud.com",
        },
        {
          height: "22",
          alt: "GoogleCloud",
          src: "https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=flat&logo=google-cloud&logoColor=white",
          link: "https://cloud.google.com/?hl=pt-br",
        },
        {
          height: "22",
          alt: "Heroku",
          src: "https://img.shields.io/badge/heroku-%23430098.svg?style=flat&logo=heroku&logoColor=white",
          link: "https://www.heroku.com",
        },
        {
          height: "22",
          alt: "Netlify",
          src: "https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify&logoColor=#00C7B7",
          link: "https://www.netlify.com",
        },
        {
          height: "22",
          alt: "Vercel",
          src: "https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white",
          link: "https://vercel.com",
        },
      ],
    },
    {
      sectionLabel: "Operating Systems",
      badges: [
        {
          height: "22",
          alt: "Ubuntu",
          src: "https://img.shields.io/badge/Ubuntu-E95420?style=flat&logo=ubuntu&logoColor=white",
          link: "https://ubuntu.com",
        },
        {
          height: "22",
          alt: "Windows",
          src: "https://img.shields.io/badge/Windows-0078D6?style=flat&logo=windows&logoColor=white",
          link: "https://www.microsoft.com/pt-br/software-download/windows10",
        },
      ],
    },
    {
      sectionLabel: "Office",
      badges: [
        {
          height: "22",
          alt: "MSAccess",
          src: "https://img.shields.io/badge/Microsoft_Access-A4373A?style=flat&logo=microsoft-access&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/access",
        },
        {
          height: "22",
          alt: "MSExcel",
          src: "https://img.shields.io/badge/Microsoft_Excel-217346?style=flat&logo=microsoft-excel&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/excel",
        },
        {
          height: "22",
          alt: "MSOffice",
          src: "https://img.shields.io/badge/Microsoft_Office-D83B01?style=flat&logo=microsoft-office&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/microsoft-office",
        },
        {
          height: "22",
          alt: "MSPowerPoint",
          src: "https://img.shields.io/badge/Microsoft_PowerPoint-B7472A?style=flat&logo=microsoft-powerpoint&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/powerpoint",
        },
        {
          height: "22",
          alt: "MSSharePoint",
          src: "https://img.shields.io/badge/Microsoft_SharePoint-0078D4?style=flat&logo=microsoft-sharepoint&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/sharepoint/collaboration",
        },
        {
          height: "22",
          alt: "MSVisio",
          src: "https://img.shields.io/badge/Microsoft_Visio-3955A3?style=flat&logo=microsoft-visio&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/visio/flowchart-software",
        },
        {
          height: "22",
          alt: "MSWord",
          src: "https://img.shields.io/badge/Microsoft_Word-2B579A?style=flat&logo=microsoft-word&logoColor=white",
          link: "https://www.microsoft.com/pt-br/microsoft-365/word?activetab=tabs%3afaqheaderregion3",
        },
        {
          height: "22",
          alt: "Notion",
          src: "https://img.shields.io/badge/Notion-%23000000.svg?style=flat&logo=notion&logoColor=white",
          link: "https://www.notion.so/pt-br",
        },
        {
          height: "22",
          alt: "Slack",
          src: "https://img.shields.io/badge/Slack-4A154B?style=flat&logo=slack&logoColor=white",
          link: "https://slack.com/intl/pt-br",
        },
        {
          height: "22",
          alt: "Trello",
          src: "https://img.shields.io/badge/Trello-%23026AA7.svg?style=flat&logo=Trello&logoColor=white",
          link: "https://trello.com/pt-BR",
        },
      ],
    },
    {
      sectionLabel: "Others",
      badges: [
        {
          height: "22",
          alt: "Ubiquiti",
          src: "https://img.shields.io/badge/ubiquiti-%230559C9.svg?style=flat&logo=ubiquiti&logoColor=white",
          link: "https://www.ui.com",
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <h1>DexDevLab</h1>
        </div>
        <div className={styles.subtitles}>
          In love with IT. Working since 2001 with hardware and software in
          several areas. Student and Java/JavaScript Fullstack developer with
          modest knowledge in another languages and technologies.
        </div>
        {badgesList.map((item, idx) => {
          return (
            <div
              className={styles.badgeSection}
              key={"badge-section-" + item.sectionLabel + "-" + idx}
            >
              <div className={styles.sectionLabel}>
                <h2>{item.sectionLabel}</h2>
              </div>
              <div className={styles.badgeGrid}>
                {item.badges.map((item2, idx2) => {
                  return (
                    <Badge
                      key={"badge-" + item2.alt + "-" + idx2}
                      link={item2.link}
                      height={item2.height}
                      alt={item2.alt}
                      src={item2.src}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "about.html" },
  };
}

export default AboutPage;
