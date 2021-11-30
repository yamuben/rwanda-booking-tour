import React,{useState} from "react";

import { Drawer } from "antd";
import "antd/dist/antd.css";
import SingleTour from "./SingleTour";



const TourCard = ({tour}) => {

  const [drawerVisible,setDrawerVisible] = useState(false);

const handleClickDrawerVisible = ()=>{
  setDrawerVisible(true);
}

const closeDrawerVisible = ()=>{
  setDrawerVisible(false);
}

  return (
    <>

<Drawer title="Basic Drawer" placement="left" visible={drawerVisible} width={720} onClose={()=>closeDrawerVisible()}>
<SingleTour tour={tour} />
      </Drawer>

    <div className="TourCard-container">
      <img src={tour?.images[0]} width="50%"></img>
      <div
        style={{
          background: "whiteSmoke",
          width: "50%",
          height: "100%",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 onClick={()=> handleClickDrawerVisible()}>{tour?.title}</h1>
        <p style={{ fontSize: "10px", color: "black" }}>
         {tour.description}
        </p>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <label style={{ textAlign: "left", marginTop: "20px" }} for="value">
            Date Scheduled: <h6 id="value"> {tour?.dateScheduled}</h6>{" "}
          </label>

          <label style={{ textAlign: "left", marginTop: "20px" }} for="value">
            Due Date Scheduled: <h6 id="value"> {tour.dueDate}</h6>{" "}
          </label>
        </span>
        <span style={{ display: "flex", justifyContent: "space-between" }}>
          <label style={{ textAlign: "left", marginTop: "20px" }} for="value">
            Seats Available: <h6 id="value"> {tour.available}/ {tour.seats}</h6>{" "}
          </label>

          <label style={{ textAlign: "left", marginTop: "20px" }} for="value" onClose={()=>closeDrawerVisible()}>
            <a href="#" id="value"  >
              {" "}
              Read more...
            </a>{" "}
          </label>
        </span>
      </div>
    </div>
    </>
  );
};

export default TourCard;
