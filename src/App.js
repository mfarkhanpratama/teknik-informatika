import React from "react";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Profil from "./page/Profil/Profil";
import Akademik from "./page/Akademik/Akademik";
import Galeri from "./page/Galeri/galeri";
import Footer from "./components/footer";
import HeadNavbar from "./components/headNavbar";

function App() {
  return (
    <div className="App">
      <HeadNavbar />
      <Navbar />
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/akademik" element={<Akademik />} />
          <Route path="/galeri" element={<Galeri />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
