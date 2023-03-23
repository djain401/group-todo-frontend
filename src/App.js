import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
