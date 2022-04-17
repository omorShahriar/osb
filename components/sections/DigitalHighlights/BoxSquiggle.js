import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

import { svgVariants, pathVariants } from "animations/variants";

export const BoxSquiggleUp = () => {
  return (
    <InView threshold={0.1}>
      {({ ref, inView }) => {
        return (
          <motion.svg
            width="500"
            height="70"
            viewBox="0 0 607 76"
            fill="none"
            variants={svgVariants()}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={pathVariants(2)}
              d="M3.22412 37.7836C19.8908 -4.54973 36.5575 -4.54973 53.2241 37.7836C69.9564 80.4503 86.6231 80.4503 103.224 37.7836C119.891 -4.88307 136.557 -4.88307 153.224 37.7836C168.133 71.4503 184.8 71.4503 203.224 37.7836C219.891 4.11693 236.557 4.11693 253.224 37.7836C271.458 77.7836 288.125 77.7836 303.224 37.7836C319.891 -2.2164 336.557 -2.2164 353.224 37.7836C370.655 81.4503 387.321 81.4503 403.224 37.7836C419.891 -5.88307 436.557 -5.88307 453.224 37.7836C470.336 83.7836 487.003 83.7836 503.224 37.7836C519.891 -8.2164 536.557 -8.2164 553.224 37.7836C569.166 79.7836 585.833 79.7836 603.224 37.7836"
              stroke="url(#paint0_linear_130_7)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_130_7"
                x1="3.00001"
                y1="2.99992"
                x2="618"
                y2="72"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#34D399" />
                <stop offset="1" stopColor="#2563EB" />
              </linearGradient>
            </defs>
          </motion.svg>
        );
      }}
    </InView>
  );
};
export const BoxSquiggleDown = () => {
  return (
    <InView threshold={0.1}>
      {({ ref, inView }) => {
        return (
          <motion.svg
            width="500"
            height="70"
            viewBox="0 0 606 75"
            fill="none"
            ref={ref}
            variants={svgVariants()}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              variants={pathVariants(2)}
              d="M3 37.5C19.6667 -4.83333 36.3333 -4.83333 53 37.5C69.7323 80.1667 86.399 80.1667 103 37.5C119.667 -5.16667 136.333 -5.16667 153 37.5C167.909 71.1667 184.576 71.1667 203 37.5C219.667 3.83333 236.333 3.83333 253 37.5C271.234 77.5 287.901 77.5 303 37.5C319.667 -2.5 336.333 -2.5 353 37.5C370.431 81.1667 387.097 81.1667 403 37.5C419.667 -6.16667 436.333 -6.16667 453 37.5C470.112 83.5 486.779 83.5 503 37.5C519.667 -8.5 536.333 -8.5 553 37.5C568.942 79.5 585.609 79.5 603 37.5"
              stroke="url(#paint0_linear_130_8)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_130_8"
                x1="2.77589"
                y1="2.71632"
                x2="617.776"
                y2="71.7164"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#2563EB" />
                <stop offset="1" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </motion.svg>
        );
      }}
    </InView>
  );
};
