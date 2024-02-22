import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
import Nav from "./Components/Nav";
import HomeFirstCarousel from "./Components/HomePage/HomeFirstCarousel";
import Footer from "./Components/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav";

function App() {
  return (
    <>
    <Nav/>
    <HomePage/>
    <HomeFirstCarousel/>
    <Footer/>
      {/* <BrowserRouter>
        <Routes>
          <Nav />
          <Route exact path="/" element={<HomePage/>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
