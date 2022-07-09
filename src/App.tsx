import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Home from "./components/Home";
import MensClothing from "./components/MensClothing";
import WomensClothing from "./components/WomensClothing";
import Jewelry from "./components/Jewelry";
import Electronics from "./components/Electronics";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MensClothing />} />
        <Route path="/womens" element={<WomensClothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
