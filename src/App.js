import LandingPage from "./Components/LandingPage";
import SearchPage from './Components/SearchPage';
import SignIn from "./Components/SignIn";

import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/Login" element={<SignIn/>}></Route>
                    
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
