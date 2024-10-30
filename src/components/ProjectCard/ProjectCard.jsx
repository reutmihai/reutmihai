import { Link } from 'react-router-dom';
import styles from '../ProjectCard/ProjectCard.module.css'

const ProjectCard = ({ project}) => {
  return (
    <div className={styles['project-card']}>
        <img src={project.imageUrl} alt={project.title} />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <Link to={project.link}>View Details</Link>
    </div>
  )
}

export default ProjectCard