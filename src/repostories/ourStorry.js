import './ourStorry.css';
import { useEffect, useState } from 'react';

function OurStorry() {
    const [storry, setStorry] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchStorry = async () => {
            try {
                const response = await fetch("http://localhost:3001/storry");
                const data = await response.json();
                setStorry(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching storry:", error);
                setLoading(false);
            }
        };
        fetchStorry();
    }, []);
    if (loading) return <p>Loading...</p>;
    return (
        < div className= 'storryFunction'>
            
            
       
           <div className= 'storry-cornerDots'>
                <span className="corner-dot tl"></span>
                <span className="corner-dot tr"></span>
                <span className="corner-dot bl"></span>
                <span className="corner-dot br"></span>
                { storry.map((item) => (                        
                    <div className='storry-mission'>
                        <div id ='dollar-title'>
                            <span id='dollarSighn'>$</span> <tab/>
                            <span id='titleOf-storry-mission'>{item.title}</span>                     
                        </div>
                        <p id='storryContent'>{item.storry}</p>  
                    </div>
            
                ), [])}
           </div>
        
        </div>
        
    );
}
export default OurStorry;