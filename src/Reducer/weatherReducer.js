import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weatherData: {},
  daysForecast: {},
  loading: false,
  error: null,
};
const weatherReducer = createSlice({
  name: "Weather Data",
  initialState,
  reducers: {
    getWeatherData(state, action) {
      const status = action.payload;
      if (status.type === "WEATHER-DATA-REQUEST") {
        state.loading = true;
      } else if (status.type === "WEATHER-DATA-SUCCESS") {
        state.loading = false;
        state.weatherData = status.payload;
      } else if (status.type === "WEATHER-DATA-FAIL") {
        state.loading = false;
        state.error = status.payload;
      }
    },
    daysForeCast(state, action) {
      const status = action.payload;
      if (status.type === "WEATHER-DATA-REQUEST") {
        state.loading = true;
      } else if (status.type === "WEATHER-DATA-SUCCESS") {
        state.loading = false;
        state.daysForecast = status.payload;
      } else if (status.type === "WEATHER-DATA-FAIL") {
        state.loading = false;
        state.error = status.payload;
      }
    },
  },
});

export const WeatherAction = weatherReducer.actions;

export default weatherReducer;
