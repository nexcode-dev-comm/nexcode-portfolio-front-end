<<<<<<< HEAD
import OurStory from './repostories/ourStory';
import partHeader from './repostories/partHeader';
import './App.css';
import PartHeader from './repostories/partHeader';
=======
import './App.css';
import FeaturedProjects from "./projects/FeaturedProjects";
>>>>>>> 78db1f7 (projects part)

function App() {
  

  return (
<<<<<<< HEAD
    <div className='app'>

      <div className='body'>
        <div className='title'>
          <h1 id='nameCommunity'>NEXCODE</h1>
          <p id='devcommunity' > DEV COMMUNITY</p>
          <div className='quoteContainer'>
            <p id="quote">// build. ship. repeat. </p>
            <p id="quoteCursor">_</p>
          </div>
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