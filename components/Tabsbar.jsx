import styles from "../styles/Tabsbar.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";
import Tab from "./Tab";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/react_icon.svg" filename="home.jsx" path="/" />
      <Tab icon="/html_icon.svg" filename="about.html" path="/about" />
      {portfolioSettings.contentGithub.enabled && (
        <Tab icon="/markdown_icon.svg" filename="github.md" path="/github" />
      )}
      {portfolioSettings.contentProjects.enabled && (
        <Tab icon="/js_icon.svg" filename="projects.js" path="/projects" />
      )}
      {portfolioSettings.contentArticles.enabled && (
        <Tab icon="/json_icon.svg" filename="articles.json" path="/articles" />
      )}
      {portfolioSettings.contentContact.enabled && (
        <Tab icon="/css_icon.svg" filename="contact.css" path="/contact" />
      )}
    </div>
  );
};

export default Tabsbar;
