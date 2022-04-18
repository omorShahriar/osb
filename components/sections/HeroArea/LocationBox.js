import { useState } from "react";
import { motion } from "framer-motion";

const locationVariants = {
  hidden: {
    opacity: 0,
    zIndex: 10,
  },
  visible: {
    opacity: 1,
    zIndex: 50,
    transitions: {
      type: "tween",
      duration: 1,
      ease: "eastInOut",
    },
  },
};
const LocationBox = ({ location, show }) => {
  return (
    <motion.div
      variants={locationVariants}
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      className=" absolute bottom-6 left-0 rounded-md px-2 py-1 text-center bg-white text-sm shadow-md "
    >
      {location}
    </motion.div>
  );
};

export default LocationBox;
