import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNav from './AppNav';
import LandingPage from './LandingPage';
import Home from './Home';
import About from './About';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
               path="*"
               element={
                  <>
                     <AppNav />
                     <Routes>
                        <Route path="/boredom-jar" element={<Home />} />
                     </Routes>
                  </>
               }
            />
            <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
