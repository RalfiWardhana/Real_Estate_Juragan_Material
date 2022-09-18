import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  useEffect(() => {
    const data = {
      location: "Jakarta Utara",
      typeOfProperty: "House",
      status: "Rent",
    };

    localStorage.setItem("search", JSON.stringify(data));
  }, []);

  return (
    <>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>

      <Router>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </>
  );
}
