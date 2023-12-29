import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNav from './AppNav';
import LandingPage from './LandingPage';
import Home from './Home';

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
         </Routes>
      </BrowserRouter>
   );
}

export default App;
