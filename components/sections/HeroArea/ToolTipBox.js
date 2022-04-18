import { useState } from "react";
import { motion } from "framer-motion";
import ToolTip from "./ToolTip";
import LocationBox from "./LocationBox";
const boxVariants = {
  rest: {
    scale: 1,
  },
  moved: {
    scale: 1.5,
    zIndex: 40,
    transitions: {
      type: "tween",
      duration: 1,
      ease: "eastInOut",
    },
  },
};
const ToolTipBox = ({
  z = 0,
  top = 0,
  left = 0,
  right = 0,
  location = "any",
}) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-${z} top-[${top}%] left-[${left}%] right-[${right}%]`}
    >
      <motion.div
        variants={boxVariants}
        initial="rest"
        whileHover="moved"
        whileTap={{ scale: 1.3 }}
        onTap={(e) => setShow((show) => !show)}
        className=" cursor-pointer "
      >
        <ToolTip />
      </motion.div>
      <LocationBox location={location} show={show} />
    </motion.div>
  );
};

export default ToolTipBox;
