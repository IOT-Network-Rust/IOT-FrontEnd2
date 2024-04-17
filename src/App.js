import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Tracker from "./pages/Tracker.tsx";
import TopNav from "./components/basic/TopNav";
import Footer from "./components/basic/Footer";
import DeviceTracker from "./pages/DeviceTracker.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div style={{overflowX: "hidden"}}>
        <TopNav />
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/tracker/:id?" element={<Tracker />}></Route>
            <Route path="/tracker/:id/nodes" element={<DeviceTracker/>}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
