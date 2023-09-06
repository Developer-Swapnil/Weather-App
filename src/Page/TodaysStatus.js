import React from "react";
import "./TodayStatus.css";
import WindStatus from "./WindStatus";
import UVIndex from "./UVIndex";
import SunriseSunset from "./Sunrise&Sunset";
import "material-icons/iconfont/material-icons.css";
import "material-symbols";
import { useSelector } from "react-redux/es/hooks/useSelector";

const TodaysStatus = () => {
  const { weatherData } = useSelector((state) => state.weatherStore);

  return (
    <div className="today-status">
      <div className="weather">
        <WindStatus />
        <UVIndex />
        <SunriseSunset />
      </div>
      <React.Fragment>
        {Object.keys(weatherData).length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="wind">
            <div className="sub-wind sub-wind-part-1">
              <div className="part-4-1">
                <p>Humidity</p>
                <span class="material-symbols-outlined">humidity_low</span>
              </div>
              <div className="part-4-2">
                <p>
                  <strong>{weatherData.main.humidity}</strong>
                </p>
                %
              </div>
            </div>
            <div className="sub-wind sub-wind-part-2">
              <div className="part-5-1">
                <p>Visibility</p>
                <span class="material-symbols-outlined">visibility</span>
              </div>
              <div className="part-5-2">
                <p>{weatherData.visibility / 1000} KM</p>
              </div>
            </div>
            <div className="sub-wind sub-wind-part-3">
              <div className="part-6-1">
                <p>Feels Like</p>
                <span class="material-symbols-outlined">device_thermostat</span>
              </div>
              <div className="part-6-2">
                <p>{Math.round(weatherData.main.feels_like - 273.15)}&deg;</p>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default TodaysStatus;
