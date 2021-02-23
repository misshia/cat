import './App.css';
import Weather from "./Weather";
import Header from "./Header";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import SearchForm from "./SearchForm";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather />
        <Temperature />
        <img src="images/13n.png" id="icon" alt="weatherCatIcon" />
        <Humidity />
        <SearchForm />
        <Forecast />
        <Footer />
      </div>
    </div>
  );
}

export default App;
