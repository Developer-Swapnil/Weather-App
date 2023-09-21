import React from "react";
import "./FiveDays.css";
// import sunny from "../image/—Pngtree—3d sunny cloudy weather icon_8926212.png";
import { useSelector } from "react-redux/es/hooks/useSelector";

const FiveDayForecast = () => {
  const { daysForecast } = useSelector((state) => state.weatherStore);
  const daysData =
    Object.keys(daysForecast).length === 0 ? (
      <div>Loading..</div>
    ) : (
      daysForecast.list.filter((element, i) => (i + 1) % 8 === 0)
    );
  console.log(daysData);
  return (
    <React.Fragment>
      {Object.keys(daysForecast).length === 0 ? (
        <div>Loading..</div>
      ) : (
        daysData.map((element) => {
          return (
            <div className="box-1">
              <div className="before-image">
                <img
                  src={`https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`}
                  alt="sunny"
                  className="image"
                />
              </div>
              <div>
                <p>
                  <strong>
                    {Math.round(element.main.temp_max - 273.15)}&deg;c
                  </strong>
                  /{Math.round(element.main.temp_min - 273.15)}&deg;c
                </p>
              </div>
              <div>
                <p>{element.dt_txt.split(" ")[0]}</p>
              </div>
              <div>
                <p>
                  {new Date(element.dt * 1000).toDateString().split(" ")[0]}
                </p>
              </div>
            </div>
          );
        })
      )}
    </React.Fragment>
  );
};

export default FiveDayForecast;
