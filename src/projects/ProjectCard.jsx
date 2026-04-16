import '../projects/FeaturedProjects.css';



  function ProjectCard({ project }) {
     return (
        <div className="project-card">
            <div className="card-header">
                <h3 id='projectName'>{project.name}</h3>
                <span className="lang-badge">{project.lang}</span>
            </div>
            <p id='projectDescription'>{project.description}</p>
            <div className="card-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;