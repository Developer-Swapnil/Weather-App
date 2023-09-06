import React from "react";
import "./SunriseSunset.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
const SunriseSunset = () => {
  const { weatherData } = useSelector((state) => state.weatherStore);
  // console.log(weatherData.sys.sunrise);
  let Duration =
    Object.keys(weatherData).length === 0
      ? 100
      : weatherData.sys.sunset - weatherData.sys.sunrise;

  const SetTime = () => {
    if (Object.keys(weatherData).length !== 0) {
      if (Math.floor(Date.now() / 1000) >= weatherData.sys.sunset) {
        return weatherData.sys.sunset - weatherData.sys.sunrise;
      } else if (Math.floor(Date.now() / 1000) <= weatherData.sys.sunrise) {
        return 0;
      } else if (
        weatherData.sys.sunrise <
        Math.floor(Date.now() / 1000) <
        weatherData.sys.sunset
      ) {
        return Math.floor(Date.now() / 1000) - weatherData.sys.sunrise;
      }
    }
  };
  let CurrentTime = Object.keys(weatherData).length === 0 ? 0 : SetTime();
  console.log(Duration, CurrentTime);
  let divStyle = {
    transform: `rotate(${
      (0.5 / Duration) *
      Math.round(Object.keys(weatherData).length === 0 ? 0 : CurrentTime)
    }turn)`,
  };
  return (
    <React.Fragment>
      {Object.keys(weatherData).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="sub-weather part-3">
          <div className="part-3-1">Sunrise & Sunset</div>
          <div className="part-3-2">
            <div className="gauge">
              <div className="gauge__body">
                <div className="gauge__fill" style={divStyle}></div>
                <div className="gauge__cover">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="part-3-3">
            <p>
              <span
                class="material-symbols-outlined"
                style={{
                  color: "yellow",
                }}
              >
                sunny
              </span>
              <br />
              Sunrise <br />
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              <span
                class="material-symbols-outlined"
                style={{
                  color: "orange",
                  marginLeft: "35px",
                }}
              >
                sunny
              </span>
              <br />
              Sunset
              <br />
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
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

export default SunriseSunset;
