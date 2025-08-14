import LandingPage from "./Components/LandingPage";
import SearchPage from './Components/SearchPage';
import SignIn from "./Components/SignIn";
import IndividualCamp from "./Components/IndividualCamp";
import AddComment from './Components/AddComment';
import AddCamp from "./Components/AddCamp";
import SignUp from "./Components/SignUp";
import {Routes,Route} from 'react-router-dom';
import HamburgerMenu from "./Components/HamburgerMenu";

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/search" element={<SearchPage/>}></Route>
        <Route path="/Login" element={<SignIn/>}></Route>
        <Route path="/IndividualCamp" element={<IndividualCamp/>}></Route>
        <Route path="/newcomment" element={<AddComment/>}></Route>
        <Route path="/addcamp" element={<AddCamp/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/menu" element={<HamburgerMenu/>}></Route>
                    
      </Routes>
      
      
      
      
    </div>
  );
}

export default App

