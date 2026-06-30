import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import TechnologyDistribution from "./pages/TechnologyDistribution";
import MarineProjectSupport from "./pages/MarineProjectSupport";
import DigitalProducts from "./pages/DigitalProducts";
import Brands from "./pages/Brands";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/business" element={<Business />} />
            <Route path="/business/technology-distribution" element={<TechnologyDistribution />} />
            <Route path="/business/marine-project-support" element={<MarineProjectSupport />} />
            <Route path="/business/digital-products" element={<DigitalProducts />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
