import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar'
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <div>
        <Navbar></Navbar>
        <HomePage></HomePage>
        <CountryDetailsPage></CountryDetailsPage>
      </div>
    </div>
  );
}

export default App;
