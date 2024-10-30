import ProjectList from "../../components/ProjectList/ProjectList";
import styles from '../ProjectListPage/ProjectListPage.module.css';

const ProjectListPage = () => {
  return (
    <div className={styles.container}>
      <h1>MY PROJECTS</h1>
      <ProjectList />
    </div>
  );
};

export default ProjectListPage;
