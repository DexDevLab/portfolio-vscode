import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import styles from "../styles/ArticlesPage.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";

const ArticlesPage = ({ ...props }) => {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    if (data != "") {
      setLoading(false);
    } else {
      devtoApi();
    }
  }, [data]);

  const devtoApi = async () => {
    const res = await fetch(
      "https://dev.to/api/articles/me/published?per_page=6",
      {
        headers: {
          "api-key": process.env.DEV_TO_API_KEY,
        },
      }
    );

    const data = await res.json();
    setData(data);
  };

  return (
    <>
      {loading ? (
          <div className={styles.containerLoader}>
            <PuffLoader
              color={portfolioSettings.contentGithub.calendarTheme.level4}
              loading={loading}
              size={200}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
      ) : (
        <>
          <h3>
            Recent Posts from{" "}
            <a
              href={portfolioSettings.contentArticles.devtoProfileUrl}
              target="_blank"
              rel="noopener"
              className={styles.underline}
            >
              dev.to
            </a>
          </h3>
          <div className={styles.container}>
            {data.map((article, idx) => (
              <ArticleCard key={article.id + "-" + idx} article={article} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "articles.json" },
  };
}

export default ArticlesPage;
