import styles from "../styles/Badge.module.css";


const Badge = ({ link, src, height, alt, ...pageProps }) => {
  return (
    <div className={styles.container}>
      <a href={link}>
        <img
          src={src}
          height={height}
          alt={alt}
        />
      </a>
    </div>
  );
};

export default Badge;
