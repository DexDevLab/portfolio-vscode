import Image from "next/image";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { PuffLoader } from "react-spinners";
import ReactTooltip from "react-tooltip";
import RepoCard from "../components/RepoCard";
import styles from "../styles/GithubPage.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";

const GithubPage = ({ ...props }) => {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const { user, repos } = data;

  useEffect(async () => {
    if (data != "") {
      setLoading(false);
    } else {
      githubApi();
    }
  }, [data]);

  const labels = {
    months: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    weekdays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    totalCount: "{{count}} contribuições em {{year}}",
    legend: {
      less: "Menos",
      more: "Mais",
    },
  };

  const githubApi = async () => {
    const userRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
        },
      }
    );
    const user = await userRes.json();

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
        },
      }
    );
    const repoJson = await repoRes.json();
    let repoDates = await Promise.all(
      Array.from(repoJson).map(async (repo, index) => {
        const commitsRes = await fetch(
          `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/commits`,
          {
            headers: {
              Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_KEY}`,
            },
          }
        );
        const commits = await commitsRes.json();
        return {
          id: repo.id,
          repoName: repo.name,
          repoDate: commits[0].commit.author.date,
        };
      })
    );
    repoDates = Array.from(repoDates)
      .sort((a, b) => new Date(b.repoDate) - new Date(a.repoDate))
      .slice(0, portfolioSettings.contentGithub.limitRepos);

    const repos = Array.from(repoJson)
      .map((item, idx) => {
        const filt = Array.from(repoDates).filter((item2) => {
          return item2.id === item.id;
        });
        if (filt.length > 0) {
          return {
            repoDate: filt[0].repoDate,
            ...item,
          };
        }
      })
      .filter((i) => i)
      .sort((a, b) => new Date(b.repoDate) - new Date(a.repoDate));

    setData({ user, repos });
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
        <div className={styles.githubMain}
        >
          <div className={styles.user}>
            <div>
              <Image
                src={user.avatar_url}
                className={styles.avatar}
                alt={user.login}
                width={65}
                height={65}
                style={{ borderRadius: "50px" }}
              />
              <h3 className={styles.username}>{user.login}</h3>
            </div>
            <div>
              <h3>{user.public_repos} repositórios</h3>
            </div>
            <div>
              <h3>{user.followers} seguidores</h3>
            </div>
          </div>
          <div>
            <div>
              <h4>Atualmente trabalhando em:</h4>
            </div>
          </div>
          <div className={styles.container}>
            {repos.map((repo, idx) => (
              <RepoCard key={repo.id + "-" + idx} repo={repo} />
            ))}
          </div>
          <div className={styles.contributions}>
            <GitHubCalendar
              username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
              theme={portfolioSettings.contentGithub.calendarTheme}
              labels={labels}
              dateFormat={"dd/MM/yyyy"}
              showWeekdayLabels
              blockSize={20}
              blockRadius={20}
              // hideColorLegend
              // hideMonthLabels
            >
              <ReactTooltip html />
            </GitHubCalendar>
          </div>
        </div>
      )}
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "github.md" }
  };
}

export default GithubPage;
