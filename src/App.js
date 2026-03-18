import Projects from './projectrepo/projects.js';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await fetch("http://localhost:3001/pages");
        const data = await response.json();
        setPages(data);
        console.log("DATA FROM /pages:", data);

      } catch (error) {
        console.error("Error fetching pages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div id='app'>
      <div id='header'> 
        <div id='headernexcode'>
          {pages.map((page) => (
            <button id='pages' key={page.id}   onClick={() => {/* Handle button click */}}>
              {page.title}
            </button>
          ))}
        </div>
      </div>

      <div id='body'>
        <h1 id='name'>NexCode IT Community</h1>
        <p id='projectsWord'>Projects</p>

       <Projects/>
       
        
      </div>
    </div>
  );
}

export default App;
