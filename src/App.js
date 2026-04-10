import OurStory from './repostories/ourStory';
import './App.css';
import PartHeader from './repostories/partHeader';
import FeaturedProjects from "./projects/FeaturedProjects";

function App() {
  

  return (
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
         <FeaturedProjects />
      </div>   
    </div>
  );
}

export default App;