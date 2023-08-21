import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/HomePage';
import Forecast from './components/Forecast';
import CurrentLocation from "./components/CurrentLocation";
function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url('https://www.survivingwithandroid.com/wp-content/uploads/2014/11/android_weather_app.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
        <Route path="/current" element={<CurrentLocation />} />
        {/* <Home /> */}

        {/* <Forecast /> */}
      </Routes>
      {/* <>
        <div
          class="text-center p-4"
          style={{}}
        >
          © 2023 Copyright:
          <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
            Shipmnts
          </a>
        </div>
      </> */}
    </div>
  );
}

export default App;
