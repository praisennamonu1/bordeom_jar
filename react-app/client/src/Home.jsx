import { useState } from 'react';
import activities from './activity.json';
import './Home.css';

function Home() {
   const [activity, setActivity] = useState(' ');

   function randomActivity() {
      const randomIndex = Math.floor(
         Math.random() * activities.activities.length
      );
      const randomActivity = activities.activities[randomIndex];
      setActivity(randomActivity);
   }

   return (
      <div className="container">
         <p className="quote">
            Choose an activity that's <span>not high dopamine</span>
         </p>
         <button
            title="Pick an activity"
            className="cta-button"
            onClick={randomActivity}
         >
            Pick Activity
         </button>
         <input className="cta-text" placeholder={activity} />
      </div>
   );
}

export default Home;
