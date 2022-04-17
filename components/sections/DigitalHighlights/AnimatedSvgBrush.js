import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import { svgVariants, pathVariants } from "animations/variants";
const AnimatedSvgBrush = () => {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => {
        return (
          <motion.svg
            width="400"
            height="350"
            viewBox="0 0 800 700"
            fill="none"
            ref={ref}
            variants={svgVariants()}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M15.5 175.5C42.1667 127 319.1 2.1 347.5 16.5C383 34.5 191.5 192 191.5 221C191.5 250 341 148.5 413 100C457.325 70.1419 542.5 40.5 532 86C521.5 131.5 227 258.5 247.5 300.5C268 342.5 481.5 190.5 541 159.5C600.5 128.5 658 160.5 614.5 206C579.7 242.4 447.167 294.5 384 310"
              stroke="#E7F5FF"
              strokeWidth="30"
              strokeLinecap="round"
              variants={pathVariants(2)}
            />
          </motion.svg>
        );
      }}
    </InView>
  );
};

export default AnimatedSvgBrush;
