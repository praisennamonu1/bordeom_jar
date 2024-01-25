import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/boredom-jar-favicon.png';
import './AppNav.css';

function AppNav() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="nav-container">
         <header className="header">
            <Link to="/" className="logo-text">
               Boredom
               <img className="logo-image" src={logo} alt="" title="Home" />
            </Link>
            {/* <nav className="nav"></nav> */}
            <Link to="/login" className="login" title="Sign In">
               How it works
            </Link>
         </header>
      </div>
   );
}

export default AppNav;
