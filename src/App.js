import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error/Error";
import Appartement from "./pages/Appartements/Appartement";


function App() {
  return (
    <div className="App">
      <Router>

        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route exact path="/Appartement/:id" element={<Appartement />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
