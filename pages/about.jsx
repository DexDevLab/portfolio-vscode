import styles from "../styles/About.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";

const AboutPage = () => {
  const about = portfolioSettings.aboutHTML;
  return (
    <div className={styles.container}>
      <div className={styles.content}>{about}</div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "about.html" },
  };
}

export default AboutPage;
