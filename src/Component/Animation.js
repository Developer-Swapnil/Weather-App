import React from "react";
import SecondPart from "./SecondPart";
// import Setting from "./Setting";
import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import WeatherMap from "./WeatherMap";
// import Location from "./Location";
const Animation = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<SecondPart />} />
        <Route path={"/map"} element={<WeatherMap />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Animation;
