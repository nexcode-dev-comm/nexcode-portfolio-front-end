<<<<<<< HEAD
import OurStory from './repostories/ourStory';
import partHeader from './repostories/partHeader';
import './App.css';
import { useEffect, useState } from 'react';
import PartHeader from './repostories/partHeader';
=======
import './App.css';
import FeaturedProjects from "./projects/FeaturedProjects";
>>>>>>> 78db1f7 (projects part)

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
<<<<<<< HEAD
    <div className='app'>
      <div id='header'> 
        <div className='headernexcode'>
          {pages.map((page) => (
            <button id='pagesButton' key={page.id}   onClick={() => {/* Handle button click */}}>
              {page.title}
            </button>
          ))}
        </div>
      </div>

      <div className='body'>
        <div className='title'>
          <h1 id='nameCommunity'>NEXCODE</h1>
          <p id='devcommunity' > DEV COMMUNITY</p>
          <p id="quote">// build. ship. repeat. _</p>
        </div>
        <PartHeader contend="OUR STORY" />
        <OurStory />
         <PartHeader contend="PROJECTS" />
      </div>
=======
    <div>
      <FeaturedProjects />
      {/* Other components will also appear on green background */}
>>>>>>> 78db1f7 (projects part)
    </div>
  );
}

export default App;