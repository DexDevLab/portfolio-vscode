import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";
import AccountIcon from "./icons/AccountIcon";
import CodeIcon from "./icons/CodeIcon";
import FilesIcon from "./icons/FilesIcon";
import GithubIcon from "./icons/GithubIcon";
import MailIcon from "./icons/MailIcon";
import PencilIcon from "./icons/PencilIcon";
import SettingsIcon from "./icons/SettingsIcon";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
    enabled: true,
  },
  {
    Icon: GithubIcon,
    path: "/github",
    enabled: portfolioSettings.contentGithub.enabled,
  },
  {
    Icon: CodeIcon,
    path: "/projects",
    enabled: portfolioSettings.contentProjects.enabled,
  },
  {
    Icon: PencilIcon,
    path: "/articles",
    enabled: portfolioSettings.contentArticles.enabled,
  },
  {
    Icon: MailIcon,
    path: "/contact",
    enabled: portfolioSettings.contentContact.enabled,
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path, enabled }, index) => {
          return (
            <Link
              href={enabled ? path : ""}
              key={"link" + "-" + path + "-" + index}
            >
              <div
                className={`${styles.iconContainer} ${
                  router.pathname === path && styles.active
                }`}
                key={"div" + "-" + path + "-" + index}
              >
                <Icon
                  fill={
                    router.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                  className={styles.icon}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }, index) => (
          <div
            className={styles.iconContainer}
            key={"div" + "-" + path + "-" + index}
          >
            <Link href={path} key={"link" + "-" + path + "-" + index}>
              <a>
                <Icon
                  fill={
                    router.pathname === path
                      ? "rgb(225, 228, 232)"
                      : "rgb(106, 115, 125)"
                  }
                  className={styles.icon}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
