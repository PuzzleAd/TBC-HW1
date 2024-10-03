import React from "react";
import Header from "./Header/Header";
import Content from "./Main/Content";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Assignment3 from "./Assignment3/Assignment3";
import Blog from "./Blog/Blog";
import Profile from "./Profile/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/assignment3" element={<Assignment3 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
