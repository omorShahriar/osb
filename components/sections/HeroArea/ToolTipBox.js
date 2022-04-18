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
const ToolTipBoxG = ({ location = "any" }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-10 top-[25%] left-[30%] `}
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
const ToolTipBoxO = ({ location = "any" }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-10 top-[23%] left-[45%] `}
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
const ToolTipBoxM = ({ location = "any" }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-10 top-[48%] left-[42%] `}
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
const ToolTipBoxB = ({ location = "any" }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-10 top-[7%] right-[28%] `}
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
const ToolTipBoxBC = ({ location = "any" }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-10 top-[8.25%] right-[23.75%] `}
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
const ToolTipBoxMO = ({ location = "any" }) => {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      whileHover={{ zIndex: 100 }}
      className={`absolute z-10 top-[10%] right-[20.5%] `}
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

export {
  ToolTipBoxG,
  ToolTipBoxO,
  ToolTipBoxM,
  ToolTipBoxB,
  ToolTipBoxBC,
  ToolTipBoxMO,
};
