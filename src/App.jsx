import React from "react";
import Header from "./Header/Header";
import Content from "./Main/Content";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
