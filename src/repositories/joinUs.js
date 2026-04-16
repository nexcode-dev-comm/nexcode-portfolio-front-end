import { useState } from "react";
import "./joinUs.css";

function JoinUs () {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className= 'joinUsContainer'>
            <span className="corner-dot tl"></span>
            <span className="corner-dot tr"></span>
            <span className="corner-dot bl"></span>
            <span className="corner-dot br"></span>
            <div className='header'>
                <h1 id="contend" >READY TO BUILD SOMETHING?</h1>  
            </div>
            <p id='devcommunity'> //the community is free, the code is yours.</p>
            <div className="button-group">
                <button onClick={() => setShowForm(true)}>
                    JOIN DISCORD
                </button>

                <button>
                    VIEW GITHUB
                </button>
            </div>
        </div>
    );
}
export default JoinUs;