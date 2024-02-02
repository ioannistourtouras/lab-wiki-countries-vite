import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar'
import CountryDetailsPage from "./pages/CountryDetailsPage";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
     
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/:countryId" element={<CountryDetailsPage></CountryDetailsPage>}></Route>
        </Routes>
        
      
    </div>
  );
}

export default App;
