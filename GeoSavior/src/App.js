import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/About-us";
import Charaties from "./components/pages/Charity-OFM";
import MyAccount from "./components/pages/My-Account";
import Contactus from "./components/pages/Contact-us";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact-us" element={<Contactus />} />
          <Route path="/Contact-us/admin" element={<Contactus isAdmin={true}/>} />
          <Route path="/About-us" element={<AboutUs />} />
          <Route path="/Charity-OFM" element={<Charaties />} />
          <Route path="/My-Account" element={<MyAccount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
