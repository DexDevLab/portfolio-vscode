import { portfolioSettings } from "../../utils/portfolioSettings";

export default (req, res) => {
  const projects = portfolioSettings.contentProjects.projects;
  res.json(projects);
};
