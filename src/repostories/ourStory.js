import './ourStory.css';
import { useEffect, useState } from 'react';

function OurStory() {
    const [story, setStory] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await fetch("http://localhost:3001/story");
                const data = await response.json();
                setStory(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching story:", error);
                setLoading(false);
            }
        };
        fetchStory();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        < div className= 'storyFunction'>
            
            
       
           <div className= 'story-cornerDots'>
                <span className="corner-dot tl"></span>
                <span className="corner-dot tr"></span>
                <span className="corner-dot bl"></span>
                <span className="corner-dot br"></span>
                { story.map((item) => (                        
                    <div className='story-mission'>
                        <div id ='dollar-title'>
                            <span id='dollarSighn'>$</span> <tab/>
                            <span id='titleOf-story-mission'>{item.title}</span>                     
                        </div>
                        <p id='storyContent'>{item.story}</p>  
                    </div>
            
                ), [])}
           </div>
        
        </div>
        
    );
}
export default OurStory;