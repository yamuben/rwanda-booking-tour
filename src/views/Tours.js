import React,{useState} from "react";
import HomeLayout from "../components/HomeLayout";
import TourCard from "../components/TourCard";
import allToursData from "../assets/constants/tours.json";

const ToursView = () => {



  return (
    <>

      <HomeLayout>
        <div className="tours-container">
          {allToursData.map((data) => (
            <TourCard tour={data}/>
          ))}
        </div>
      </HomeLayout>
    </>
  );
};

export default ToursView;
