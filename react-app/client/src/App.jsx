import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNav from './AppNav';
import BoredomJar from './BoredomJar';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <>
                     <AppNav />
                     <BoredomJar />
                  </>
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
