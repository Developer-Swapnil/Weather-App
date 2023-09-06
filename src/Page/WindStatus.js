import React from "react";
import "./WindStatus.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
const WindStatus = () => {
  const { weatherData } = useSelector((state) => state.weatherStore);

  const divStyle = {
    transform: `rotate(${
      (0.5 / 100) *
      Math.round(
        Object.keys(weatherData).length === 0 ? 0 : weatherData.wind.speed
      )
    }turn)`,
  };
  return (
    <React.Fragment>
      {Object.keys(weatherData).length === 0 ? (
        <div>Loading..</div>
      ) : (
        <div className="sub-weather part-1">
          <div className="part-1-1">Wind Status</div>
          <div className="part-1-2">
            <div className="gauge_wind_status">
              <div className="gauge__body_wind_status">
                <div className="gauge__fill_wind_status" style={divStyle}></div>
                <div className="gauge__cover_wind_status"></div>
              </div>
            </div>
          </div>
          <div className="part-1-3">
            <p style={{ fontSize: "larger" }}>
              <strong>{weatherData.wind.speed} km/h</strong>
            </p>
            <p style={{ fontSize: "small" }}>
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default WindStatus;
