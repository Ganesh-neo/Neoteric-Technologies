import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Pages/HomePage";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav";

function App() {
  return (
    <>
    <HomePage/>
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
