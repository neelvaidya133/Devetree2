import React from "react";
import { Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Form from "./Components/Form/Form";
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle } from "./Constant/global";
import LandingPage from "./LandingPage";
import PageNotFound from "./Pages/404/PageNotFound";
import Contact from "./Pages/Contact/Contact";
import Product from "./Pages/Product/Product";
import ServicePage from "./Pages/ServicePage/ServicePage";
import { navVisible } from "./Recoil/store";
import Test from "./Test";

const App = () => {
  const nav = useRecoilValue(navVisible);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
