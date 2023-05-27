import React from "react";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home";

import Footer from "./components/footer";
import HeadNavbar from "./components/headNavbar";
import VisiMisi from "./page/Profil/visiMisi";
import Sejarah from "./page/Profil/Sejarah";
import Strategi from "./page/Profil/strategi";
import Sasaran from "./page/Profil/sasaran";
import People from "./page/Profil/DosenTenaga";
import Tujuan from "./page/Profil/tujuan";
import Foto from "./page/Galeri/foto";
import Video from "./page/Galeri/video";
import VirtualTour from "./page/Galeri/virtual";
import Kurikulum from "./page/Akademik/kurikulum";
import JadwalKuliah from "./page/Akademik/jadwalKuliah";
import KalenderAkademik from "./page/Akademik/kalenderAkademik";

function App() {
  return (
    <div className="App">
      <HeadNavbar />
      <Navbar />
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />

          {/* PROFIL PAGE */}
          <Route path="/profil/visi-Misi" element={<VisiMisi />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/Strategi" element={<Strategi />} />
          <Route path="/profil/Sasaran" element={<Sasaran />} />
          <Route path="/profil/people" element={<People />} />
          <Route path="/profil/Tujuan" element={<Tujuan />} />

          {/* AKADEMIK PAGE */}
          <Route path="/akademik/Kurikulum" element={<Kurikulum />} />
          <Route path="/akademik/Jadwal-Kuliah" element={<JadwalKuliah />} />
          <Route
            path="/akademik/Kalender-Akademik"
            element={<KalenderAkademik />}
          />

          {/* GALERI PAGE */}
          <Route path="/galeri/foto" element={<Foto />} />
          <Route path="/galeri/video" element={<Video />} />
          <Route path="/galeri/virtual-tour" element={<VirtualTour />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
