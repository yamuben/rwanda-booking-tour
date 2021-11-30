import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Aboutus from "../views/Aboutus";
import Tours from "../views/Tours";
import NewTourView from "../views/dashboard/NewTour";


const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/tours" element={<Tours />} />
      <Route path="/dash/newtour" element={<NewTourView />} />
    </Routes>
  );
};

export default Index;
