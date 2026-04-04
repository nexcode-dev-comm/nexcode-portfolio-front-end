import { useState } from "react";
import "./joinUs.css";

function JoinUs () {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="joinUs">
            { !showForm ? (
              <>
                <h1>READY TO BUILD SOMETHING?</h1>
                <p> the community is free, the code is yours.</p>

                <button onClick={() => setShowForm(true)}>
                    JOIN DISCORD
                </button>

                <button type="viewgithub">
                    VIEW GITHUB
                </button>
              </>
            ) : (
                <>
                  <h1>Join Community</h1>
                
                  <input type="text" placeholder="Your Name" />
                  <input type="text" placeholder="Your Surname" />
                  <input type="text" placeholder="Your Email" />
                  <button type="submit">Submit</button>

                  <button onClick={() => setShowForm(false)}>
                    Bach
                  </button>
                </>
            )}
            
        </div>
    );
}
export default JoinUs;