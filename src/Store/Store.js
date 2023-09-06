import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Reducer/weatherReducer";
const store = configureStore({
  reducer: {
    weatherStore: weatherReducer.reducer,
  },
});

export default store;
