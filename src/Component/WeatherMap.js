import React, { useState } from "react";
import TomTomMap from "../Page/Map";
import { useDispatch } from "react-redux";
import { DaysForecast, weather } from "../Action/WeatherAction";

const WeatherMap = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState("");

  const GetDataHandler = (e) => {
    e.preventDefault();
    if (data === "") {
      dispatch(weather("delhi"));
      dispatch(DaysForecast("delhi"));
    } else {
      dispatch(weather(data));
      dispatch(DaysForecast(data));
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "90vw",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "10px",
        }}
      >
        <input
          placeholder="Search Location"
          onChange={(e) => setData(e.target.value)}
          style={{ height: "20px" }}
        ></input>
        <button
          style={{ height: "25px" }}
          type="submit"
          onClick={(e) => GetDataHandler(e)}
        >
          Submit
        </button>
        <span class="material-symbols-outlined" style={{ cursor: "pointer" }}>
          search
        </span>
      </div>
      <div style={{ height: "100vh", width: "90vw" }}>
        <TomTomMap />
      </div>
    </div>
  );
};

export default WeatherMap;
