import { useState } from 'react';
import activities from './activity.json';

function BoredomJar() {
   const [activity, setActivity] = useState(' ');

   function randomActivity() {
      const randomIndex = Math.floor(
         Math.random() * activities.activities.length
      );
      const randomActivity = activities.activities[randomIndex];
      setActivity(randomActivity);
   }

   return (
      <>
         <h1>Boredom Jar</h1>
         <p>Let's do something!</p>
         <button onClick={randomActivity}>Pick an activity</button>
         <p>{activity}</p>
      </>
   );
}

export default BoredomJar;
