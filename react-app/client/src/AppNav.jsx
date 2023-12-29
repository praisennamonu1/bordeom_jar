import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/boredom-jar-favicon.png';
import './AppNav.css';

function AppNav() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <nav className="nav-container">
         <h1 className="title">Boredom </h1>
         <Link to="/">
            <img className="logo" src={logo} alt="" title="Home" />
         </Link>
      </nav>
   );
}

export default AppNav;
