import './ourStory.css';
import { useEffect, useState } from 'react';

function OurStory() {
    const [story, setStory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await fetch("http://localhost:3001/story");
                let data = await response.json();
                setStory(data);
                setLoading(false);
            } catch (error) {
                console.log("Server might be down -> using Fallback Data");
                /* Fallback data */
                setStory([
    {
      "id": "1",
      "title": "cat story.txt",
      "story": "Nexcode started as a small group chat between developers tired of building in isolation. No gatekeeping, no egos just people who love turning ideas into real things."
    },
    {
      "id": "2",
      "title": "cat mission.txt",
      "story": "We believe the best projects are born from collaboration. Our platform exists to showcase what our community builds, celebrate progress, and connect builders at every level."
    }
  ]);
                 
                console.error("Error fetching story:", error);
                setLoading(false);
            }
        };
        fetchStory();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        < div className= 'terminalContainer'>
            
            
       
           <div className= 'story-cornerDots'>
                <span className="corner-dot tl"></span>
                <span className="corner-dot tr"></span>
                <span className="corner-dot bl"></span>
                <span className="corner-dot br"></span>
                { story.map((item) => (                        
                    <div className='story-mission'>
                        <div id ='dollar-title'>
                            <span id='dollarSighn'>$</span> 
                            <span id='titleOf-story-mission'>{item.title}</span>                     
                        </div>
                        <p id='storyContent'>{item.story}</p>  
                    </div>
            
                ), [])}
                <div id="last-dollar-cursor">
                    <span id='lastDollarSign'>$</span>
                    <span id='lastCursor'>_</span>
                </div>
           </div>
        
        </div>
        
    );
}
export default OurStory;