import React, { useEffect, useState } from "react";
// import sunny from "../image/—Pngtree—3d sunny cloudy weather icon_8926212.png";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import "./CurrentWeather.css";
// import rain from "../image/Rain_Drops_Falling_Heavy_rainstorm_background__4k_animation_3 - Trim.mp4";
import { DaysForecast, weather } from "../Action/WeatherAction";
import { useDispatch, useSelector } from "react-redux";

const CurrentWeather = () => {
  const { weatherData } = useSelector((state) => state.weatherStore);
  console.log(weatherData);
  console.log(Object.keys(weatherData).length === 0);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  const ClickHandler = () => {
    setClick(!click);
  };
  useEffect(() => {
    if (data === "") {
      dispatch(weather("delhi"));
      dispatch(DaysForecast("delhi"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    <div className="main">
      {/* <video src={rain} autoPlay loop muted /> */}
      {Object.keys(weatherData).length !== 0 ? (
        <div className="content">
          <div className="image-div">
            <div className="input">
              <input
                placeholder="Search Location"
                className={click ? "visible" : "hidden"}
                onChange={(e) => setData(e.target.value)}
              ></input>
              <button
                className={click ? "visible" : "hidden"}
                type="submit"
                onClick={(e) => GetDataHandler(e)}
              >
                Submit
              </button>
              <span
                class="material-symbols-outlined"
                style={{ cursor: "pointer" }}
                onClick={ClickHandler}
              >
                search
              </span>
            </div>
            <div className="image">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="sunny"
              />
            </div>
          </div>
          <div className="temp">
            <div className="temperature">
              <p style={{ fontSize: "xx-large" }}>
                {Math.round(weatherData.main.temp - 273.15)}&deg;c
              </p>
            </div>
            <div className="status">
              <p>
                <span class="material-symbols-outlined">cloud</span>
                {weatherData.weather[0].main}
              </p>
            </div>
          </div>
          <div className="location">
            <div className="place">
              <p>
                <span class="material-symbols-outlined">location_on</span>
                {weatherData.name},{weatherData.sys.country}
              </p>
            </div>
            <div className="time">
              <p>
                <span class="material-symbols-outlined">calendar_month</span>
                {new Date().toDateString()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default CurrentWeather;
