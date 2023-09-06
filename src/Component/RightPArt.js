// import { GoogleApiWrapper } from "google-maps-react";
import React from "react";
import TomTomMap from "../Page/Map.js";
import TodaysStatus from "../Page/TodaysStatus";
import "./RightPart.css";
const RightPArt = () => {
  return (
    <div className="right-part">
      <div className="box-rightpart">
        <TodaysStatus />
      </div>
      <div className="box-rightpart">
        <TomTomMap />
      </div>
    </div>
  );
};

export default RightPArt;
