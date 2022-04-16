import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Signature = () => {
  return (
    <InView threshold={0.1} triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.svg
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={svgVariants}
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1702.31 338.9"
          >
            <title>ceo-sign</title>

            <motion.path
              id="path-one"
              variants={pathVariants}
              d="M199,232s-9,8-13,15-11,12-11,12,11.5-8.5,37.5-22.5,124-57,124-57,4,40-18,74-55,76-88,97"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />

            <motion.path
              variants={pathVariants}
              id="path-two"
              d="M328.5,307.5a39.08,39.08,0,0,1,4-5"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />

            <motion.path
              variants={pathVariants}
              id="path-three"
              d="M445,248s-27,26-28,31c0,0,181-96,197-94,0,0-48,79-104,129s-62,57-62,57"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />
            <motion.path
              variants={pathVariants}
              id="path-four"
              d="M536,318s87-54,122-75,139-90,139-90-25,25-55,69a446.85,446.85,0,0,0-46,88s-11,38-5,51,33,17,39,16"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />
            <motion.path
              variants={pathVariants}
              id="path-five"
              d="M746,298s49,5,105-55c0,0,0-17-5-17s-49,15-36,64c0,0,19,15,76-8,0,0,11,25,41,22s52-5,89-25,61-25,96-75c0,0-3-28-77,52,0,0-12,16-6,53"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />
            <motion.path
              variants={pathVariants}
              id="path-six"
              d="M934,198s1,3,6,8"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />
            <motion.path
              variants={pathVariants}
              id="path-seven"
              d="M1127,312s34,1,140-71,23-119,23-119-19-3-29,59-37,107-37,107-38,61-68,80-23,21-43,17c0,0-13-18,79-66,0,0,74-29,122-51s81-28,113-63c0,0,48-61,45-119,0,0,6-37-24-34"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />
            <motion.path
              variants={pathVariants}
              id="path-eight"
              d="M1363,285s57,6,119-44c0,0-23,4-36,38,0,0,3,24,16,19s65-47,65-47,2,41,7,40,56-28,62-38c0,0,6,58,75-6,0,0-38,22-23,31s42,5,61-29c0,0,18,5-11,41,0,0,15,5,32-21s22-36,22-36-7,30,13,25,20-13,20-13,32,26,26,37c0,0-60,67-135,13,0,0-29-23,22-50s128-49,128-49l45-13s9-17-66-28-283-22-447,10-148,38-148,38,16,19,190,10c0,0,81-9,100-7"
              transform="translate(-170 -46.83)"
              style={{
                fill: "none",
                stroke: "#000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "10px",
              }}
            />
          </motion.svg>
        );
      }}
    </InView>
  );
};

export default Signature;
