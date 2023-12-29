import { Link } from 'react-router-dom';
import './LandingPage.css';
import quoteImage from './assets/quote-image.jpg';

function LandingPage() {
   return (
      <div className="container">
         <div className="cta">
            <p className="cta-text">
               Do you get <span>bored often</span> and resort to doing things
               that end up dulling your mind?
            </p>
            <Link to="/boredom-jar" title="Use Boredom Jar">
               <button className="cta-button">Use Boredom Jar</button>
            </Link>
         </div>
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
      </div>
   );
}

export default LandingPage;
