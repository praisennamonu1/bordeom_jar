import { useState } from 'react';
import activities from './activity.json';
import './BoredomJar.css';
import quoteImage from './assets/quote-image.jpg';

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
      <div className="container">
         <div className="quote-container">
            <p className="quote">
               If you use <span>high dopamine stuff</span> to solve your{' '}
               <span>boredom problem</span>, you will just end up needing more
               and more of it until there is very little that can satisfy you
               and this will affect your <span>work productivity</span> and{' '}
               <span>other areas of your life</span>.
            </p>
            <div className="speaker-container">
               <img
                  className="speaker-image"
                  src={quoteImage}
                  alt="Toyin Omotoso"
               />
               <a
                  href="https://x.com/toyinomotoso"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Toyin Omotoso on Twitter"
               >
                  <p className="speaker-name">Toyin Omotoso</p>
               </a>
            </div>
         </div>
         <p>Let's do something!</p>
         <button onClick={randomActivity}>Pick an activity</button>
         <p className="activity">{activity}</p>
      </div>
   );
}

export default BoredomJar;
