import { Link } from 'react-router-dom';
import './LandingPage.css';
import logo from './assets/boredom-jar-favicon.png';

function LandingPage() {
   return (
      <div className="lp-container">
         <header className="header">
            <Link to="/" className="logo-text">
               Boredom
               <img className="logo-image" src={logo} alt="" title="Home" />
            </Link>
            {/* <nav className="nav"></nav> */}
            <Link to="/login" className="login" title="Sign In">
               Sign In
            </Link>
         </header>
         <div className="cta">
            <div className="cta-text">
               <div>
                  Bored?
                  <br />
                  That's A <br /> Good Thing.
               </div>
               <p>Use Boredom Jar</p>
            </div>
            <Link to="/boredom-jar" title="Use Boredom Jar">
               <button className="cta-button">Spin the Jar</button>
            </Link>
         </div>
         <footer className="footer">
            <p>&copy; 2023 Boredom Jar</p>
            <nav>
               <ul>
                  <li>
                     <Link to="/about" className="login" title="About">
                        Why Boredom Jar?
                     </Link>
                  </li>
                  <li>
                     <a
                        href="https://praisennamonu1.github.io"
                        className="login"
                        title="Contact"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        Developer
                     </a>
                  </li>
               </ul>
            </nav>
         </footer>
      </div>
   );
}

export default LandingPage;
