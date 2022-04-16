import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

//animation
import { svgVariants, pathVariants } from "animations/variants";
const headingVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    ease: "anticipate",
    duration: 0.5,
  },
};
const SectionTitle = ({ children }) => {
  return (
    <div className="flex gap-8 items-center justify-center  ">
      <InView threshold={0.5} triggerOnce>
        {({ ref, inView }) => {
          return (
            <>
              <motion.svg
                ref={ref}
                width="648"
                height="66"
                viewBox="0 0 648 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[180px]"
                variants={svgVariants()}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.path
                  d="M4.25803 47.0918C17.6549 49.6931 40.5361 65.8911 68.5628 59.5781C96.5894 53.2651 108.815 16.507 138.786 16.7895C168.757 17.072 182.567 63.5659 212.423 60.9339C242.28 58.302 252.257 7.20445 282.097 4.15615C311.937 1.10786 325.595 43.7297 355.656 46.3021C385.716 48.8745 396.426 16.4292 426.389 16.5035C456.352 16.5778 469.612 49.0825 499.477 46.6588C529.341 44.235 539.703 2.92156 569.739 4.86942C599.776 6.81727 628.253 45.3545 643.651 56.0085"
                  stroke="#34d399"
                  strokeWidth="8"
                  strokeLinecap="round"
                  variants={pathVariants(0.5)}
                />
              </motion.svg>

              <motion.h1
                variants={headingVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="text-5xl font-bold capitalize text-center py-8 text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600"
              >
                {children}
              </motion.h1>
              <motion.svg
                width="648"
                height="66"
                viewBox="0 0 648 66"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" max-w-[180px] "
                variants={svgVariants()}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <motion.path
                  d="M4.25803 47.0918C17.6549 49.6931 40.5361 65.8911 68.5628 59.5781C96.5894 53.2651 108.815 16.507 138.786 16.7895C168.757 17.072 182.567 63.5659 212.423 60.9339C242.28 58.302 252.257 7.20445 282.097 4.15615C311.937 1.10786 325.595 43.7297 355.656 46.3021C385.716 48.8745 396.426 16.4292 426.389 16.5035C456.352 16.5778 469.612 49.0825 499.477 46.6588C529.341 44.235 539.703 2.92156 569.739 4.86942C599.776 6.81727 628.253 45.3545 643.651 56.0085"
                  stroke="#2563eb"
                  strokeWidth="8"
                  strokeLinecap="round"
                  variants={pathVariants(0.5, 0.5)}
                />
              </motion.svg>
            </>
          );
        }}
      </InView>
    </div>
  );
};

export default SectionTitle;
