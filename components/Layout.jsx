import Bottombar from "../components/Bottombar";
import Explorer from "../components/Explorer";
import Sidebar from "../components/Sidebar";
import Titlebar from "../components/Titlebar";
import styles from "../styles/Layout.module.css";
import Tabsbar from "./Tabsbar";

const Layout = ({ title, children, ...pageProps }) => {
  return (
    <>
      <Titlebar title={title} />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div className={styles.subMain}>
          <Tabsbar />
          <main className={styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
