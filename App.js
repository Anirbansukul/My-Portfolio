import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import "./styles/App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Element } from "react-scroll";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ParallaxProvider>
      <ThemeProvider>
        {loading ? (
          <Preloader onFinish={() => setLoading(false)} />
        ) : (
          <Router>
            <Header />
            <ScrollToTop />
            <Element name="home"><Home /></Element>
            <Element name="about"><About /></Element>
            <Element name="projects"><Projects /></Element>
            <Element name="skills"><Skills /></Element>
            <Element name="contact"><Contact /></Element>
            <Footer />
          </Router>
        )}
      </ThemeProvider>
    </ParallaxProvider>

  );
}

export default App;
