import ProjectCard from "../components/ProjectCard";
import styles from "../styles/ProjectsPage.module.css";
import { portfolioSettings } from "../utils/portfolioSettings";

const ProjectsPage = () => {
  const projects = portfolioSettings.contentProjects.projects;

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.id + "-" + idx} project={project} />
        ))}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: { title: "projects.js"},
  };
}

export default ProjectsPage;
