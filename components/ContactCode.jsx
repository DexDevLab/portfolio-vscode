import styles from "../styles/ContactCode.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";

const contactItems = portfolioSettings.contentContact.socials;

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, idx) => {
        return (
          <p className={styles.line} key={item.social + "-" + idx}>
            &nbsp;&nbsp;&nbsp;{item.social}:{" "}
            <a href={item.href} target="_blank" rel="noopener">
              {item.link}
            </a>
            ;
          </p>
        );
      })}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
