import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
