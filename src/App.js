import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { GrGroup } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi"; // Pages
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile"; // Impor komponen Profile

// Components
import Header from "./components/header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} /> {/* Tambahkan rute ke halaman Profile */}
        </Routes>
        <footer>
          <footer>
            <NavLink to="/" className="iconWrapper">
              <div className="Icondetail">
                <BiCameraMovie className="icon" />
                <h3>Movie</h3>
              </div>
            </NavLink>
            <NavLink to="/profile" className="iconWrapper">
              <div className="IconDetail">
                <GrGroup className="icon" />
                <h3>Profile</h3>
              </div>
            </NavLink>
          </footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
