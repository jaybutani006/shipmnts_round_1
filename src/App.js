import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/HomePage';
import Forecast from './components/Forecast';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forecast" element={<Forecast />} />
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
