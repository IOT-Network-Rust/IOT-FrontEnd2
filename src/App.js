import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tracker from "./pages/Tracker";

import TopNav from "./components/basic/TopNav";
import Footer from "./components/basic/Footer";

function App() {
  return (
    <>
      <TopNav />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/tracker" element={<Tracker />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
