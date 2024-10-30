import ProjectCard from '../ProjectCard/ProjectCard';
import styles from '../ProjectList/ProjectList.module.css'

const ProjectList = () => {

    const projects = [
      {
        id: "1",
        title: "Project one",
        description: "Description for project one.",
        imageUrl: "url",
        link: "/projects/project-one",
      },
      {
        id: "2",
        title: "Project two",
        description: "Descroption for project two",
        imageUrl: "url",
        link: "/projects/project-two",
      },
      {
        id: "3",
        title: "Project three",
        description: "Descroption for project three",
        imageUrl: "url",
        link: "/projects/project-three",
      },
      {
        id: "4",
        title: "Project four",
        description: "Description for project four.",
        imageUrl: "url",
        link: "/projects/project-four",
      },
      {
        id: "5",
        title: "Project five",
        description: "Descroption for project five",
        imageUrl: "url",
        link: "/projects/project-five",
      },
      {
        id: "6",
        title: "Project six",
        description: "Descroption for project six",
        imageUrl: "url",
        link: "/projects/project-six",
      },
    ];
  return (
    <div className={styles['project-list']}>
        {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
        ))}
        
    </div>
  )
}

export default ProjectList