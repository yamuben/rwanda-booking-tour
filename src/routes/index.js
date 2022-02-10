import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "../views/Home";
import Aboutus from "../views/Aboutus";
import Tours from "../views/Tours";
import NewTourView from "../views/dashboard/NewTour";
import DashLayout from "../components/dashboardLayout";
import AllTours from "../views/dashboard/allTours";

import AllUsers from "../components/TableGetAllUsers";
const isUserLogedIn = localStorage.getItem("userLogedIn");

const Index = () => {
  const currentUrl = useLocation().pathname;


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/allusers" element={<AllUsers />} />
      </Routes>
      {isUserLogedIn && currentUrl.includes("/dash")  ? (
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
