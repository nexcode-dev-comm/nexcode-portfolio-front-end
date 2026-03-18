import './projects.css';
import { useEffect, useState } from 'react';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        const fetchProjects = async () => {
            try {
                const response = await fetch("http://localhost:3001/projects");
                const data = await response.json();
                setProjects(data);
                setLoading(false);
                console.log("PROJECTS:", data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        projects.map((project) => (
            <div id='project'>
                <div id='projectPhoto'>
                    <img src={project.photo} alt={project.title} />
                </div>
                <div id='projectInfo'>
                    <p id='title'>{project.title}</p>
                    <p id='de'>{project.description}</p>
                </div>

            </div>
        ),[])
    );
 
}
export default Projects;

