import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Aboutus from "../views/Aboutus";
import Tours from "../views/Tours";
import NewTourView from "../views/dashboard/NewTour";
import DashLayout from "../components/dashboardLayout";
import AllTours from "../views/dashboard/allTours";

const isUserLogedIn = localStorage.getItem("userLogedIn");

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
      {isUserLogedIn ? (
        <DashLayout>
          <Routes>
            <Route path="/dash/newtour" element={<NewTourView />} />
            <Route path="/dash/alltours" element={<AllTours />} />
          </Routes>
        </DashLayout>
      ) : (
        <></>
      )}
    </>
  );
};

export default Index;
