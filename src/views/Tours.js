import React, { useState, useEffect } from "react";
import HomeLayout from "../components/HomeLayout";
import TourCard from "../components/TourCard";
// import allToursData from "../assets/constants/tours.json";
import rwandaApis from "../services/rwandaBookingApis";

const ToursView = () => {
  const [allToursData, setAllToursData] = useState([]);

  useEffect(() => {
    rwandaApis.getAllTours().then((res) => setAllToursData(res.data.data));
  }, []);

  return (
    <>
      <HomeLayout>
        <div className="tours-container">
          {allToursData.map((data) => (
            <TourCard tour={data} />
          ))}
        </div>
      </HomeLayout>
    </>
  );
};

export default ToursView;
