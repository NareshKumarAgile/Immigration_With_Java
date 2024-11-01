import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path = "/contact" element={<Contact/>} />
        </Routes>
      </>
      
      <Footer />
    </Router>
  );
}

export default App;
