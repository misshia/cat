import './App.css';
import Weather from "./Weather";

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
