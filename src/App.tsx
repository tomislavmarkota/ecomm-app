import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { fetchProducts } from "./features/productSlice";
// router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Home from "./components/Home";
import MensClothing from "./components/MensClothing";
import WomensClothing from "./components/WomensClothing";
import Jewelry from "./components/Jewelry";
import Electronics from "./components/Electronics";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import Cart from "./components/cart/Cart";
import { calculate } from "./features/cartSlice";
// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  const cart = useAppSelector((state) => state.cart.cart);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculate());
  }, [dispatch, cart]);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={1500} />
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<MensClothing />} />
        <Route path="/womens" element={<WomensClothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
