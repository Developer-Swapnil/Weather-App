import axios from "axios";

import { WeatherAction } from "../Reducer/weatherReducer";

export const weather = (LocationData) => async (dispatch) => {
  try {
    dispatch(WeatherAction.getWeatherData({ type: "WEATHER-DATA-REQUEST" }));

    console.log(LocationData === "");

    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${LocationData}&appid=24485baa2feb4d7dd186da07b331561f`
    );

    if (data.status === 200) {
      console.log(data.data);
      dispatch(
        WeatherAction.getWeatherData({
          type: "WEATHER-DATA-SUCCESS",
          payload: data.data,
        })
      );
    }
  } catch (error) {
    dispatch(
      WeatherAction.getWeatherData({
        type: "WEATHER-DATA-FAIL",
        payload: error.response.data.message,
      })
    );
  }
};

export const DaysForecast = (LocationData) => async (dispatch) => {
  try {
    dispatch(WeatherAction.daysForeCast({ type: "WEATHER-DATA-REQUEST" }));

    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${LocationData}&appid=24485baa2feb4d7dd186da07b331561f`
    );

    if (data.status === 200) {
      console.log(data.data);
      dispatch(
        WeatherAction.daysForeCast({
          type: "WEATHER-DATA-SUCCESS",
          payload: data.data,
        })
      );
    }
  } catch (error) {
    dispatch(
      WeatherAction.daysForeCast({
        type: "WEATHER-DATA-FAIL",
        payload: error.response.data.message,
      })
    );
  }
};
