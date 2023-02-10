import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Explorer.module.css";

const ExplorerItem = ({
  path,
  itemName,
  icon,
  spacing,
  active,
  ...pageProps
}) => {
  const css = {
    paddingLeft: `${spacing}`,
    color: `${active ? "unset" : "gray"}`,
  };
  return (
    <div style={css} {...pageProps}>
      <Link href={path}>
        <div className={styles.file}>
          <Image src={`/${icon}`} alt={itemName} {...pageProps} />{" "}
          <p>{itemName}</p>
        </div>
      </Link>
    </div>
  );
};

export default ExplorerItem;
