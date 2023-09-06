import React from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import MiddlePart from "./MiddlePart";
import RightPArt from "./RightPArt";
const SecondPart = () => {
  return (
    <motion.div
      className="second-part"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 5 } }}
    >
      <div className="middle-part">
        <MiddlePart />
      </div>
      <div className="right-part">
        <RightPArt />
      </div>
    </motion.div>
  );
};

export default SecondPart;
