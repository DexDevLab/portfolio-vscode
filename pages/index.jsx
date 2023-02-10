import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <h1>{portfolioSettings.devName}</h1>
        <h2>{portfolioSettings.devDescription}</h2>
      </div>
      <div className={styles.foreground}>
        <div style={{ width: "100%" }}>
          <h1 className={styles.name}>{portfolioSettings.devName}</h1>
          <h6 className={styles.bio}>{portfolioSettings.devDescription}</h6>
          <div className={styles.content}>
            {portfolioSettings.contentGithub.enabled && (
              <Link href="/github">
                <button className={styles.button}>Projetos</button>
              </Link>
            )}
            {portfolioSettings.contentContact.enabled && (
              <Link href="/contact">
                <button className={styles.outlined}>Contato</button>
              </Link>
            )}
          </div>
        </div>
        <Illustration className={styles.illustration} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { title: "home.jsx" },
  };
}
