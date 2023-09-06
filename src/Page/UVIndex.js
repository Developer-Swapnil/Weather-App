import React from "react";
import "./UVIndex.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

const UVIndex = () => {
  const { weatherData } = useSelector((state) => state.weatherStore);

  const divStyle = {
    transform: `rotate(${
      (0.5 / 1.0848) * Object.keys(weatherData).length === 0
        ? 0
        : weatherData.main.pressure / 1000
    }turn)`,
  };
  return (
    <React.Fragment>
      {Object.keys(weatherData).length === 0 ? (
        <div>Loading..</div>
      ) : (
        <div className="sub-weather part-2">
          <div className="part-2-1">Pressure</div>
          <div className="part-2-2">
            <div className="gauge_UVIndex">
              <div className="gauge__body_UVIndex">
                <div className="gauge__fill_UVIndex" style={divStyle}></div>
                <div className="gauge__cover_UVIndex"></div>
              </div>
            </div>
          </div>
          <div className="part-2-3">
            <p style={{ fontSize: "xx-large" }}>
              <strong>{weatherData.main.pressure / 1000}</strong>bar
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default UVIndex;
