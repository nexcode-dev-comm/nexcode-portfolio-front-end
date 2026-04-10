import './FeaturedProjects.css';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        name: "DEVBOARD",
        description: "A real-time collaboration dashboard for remote dev teams. Built in 72 hours during our first hackathon.",
        tags: ["#react", "#websockets", "#open-source"],
        lang: "TS"
    },
    {
        id: 2,
        name: "CLICRAFT",
        description: "A toolkit for generating beautiful CLI interfaces in Rust. 2k stars and counting.",
        tags: ["#rust", "#cli", "#terminal"],
        lang: "RS"
    },
    {
        id: 3,
        name: "PATCHWORK",
        description: "Automated dependency diff reports with risk scoring. Used by 50+ teams in production.",
        tags: ["#devops", "#automation", "#python"],
        lang: "PY"
    },
    {
        id: 4,
        name: "SIGNALDB",
        description: "Lightweight pub/sub event store for microservices. Zero dependencies, blazing fast.",
        tags: ["#go", "#microservices", "#events"],
        lang: "GO"
    }
];

function FeaturedProjects() {
    return (
        <section className="featured-projects">
            <h2>// FEATURED PROJECTS</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProjects;