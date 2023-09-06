import React from "react";
// import { useDispatch } from "react-redux";
// import { DaysForecast } from "../Action/WeatherAction";
import CurrentWeather from "../Page/CurrentWeather";
import FiveDayForecast from "../Page/FiveDayForecast";
import "./MiddlePart.css";
// import { useSelector } from "react-redux/es/hooks/useSelector";
const MiddlePart = () => {
  // const dispatch = useDispatch();
  // const { daysForecast } = useSelector((state) => state.weatherStore);
  // useEffect(() => {
  //   dispatch(DaysForecast("delhi"));
  // }, []);
  return (
    <div className="middle-part">
      <div className="upper-box">
        <CurrentWeather />
      </div>
      <div className="lower-box">
        <FiveDayForecast />
      </div>
    </div>
  );
};

export default MiddlePart;
