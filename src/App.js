import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import NoMatch from "./containers/NoMatch";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}
