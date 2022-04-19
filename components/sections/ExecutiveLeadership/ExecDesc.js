import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const boxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      when: "beforeChildren",
      duration: 0.1,
      staggerChildren: 0.3,
      ease: "easeInOut",
      delay: 0.75,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export const CeoDesc = () => {
  return (
    <InView threshold={0.25} triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={textVariants}
              className=" lg:text-2xl text-lg font-semibold text-sky-500 "
            >
              Neil Stevens
            </motion.p>
            <motion.p
              variants={textVariants}
              className=" lg:text-base text-sm  "
            >
              President, Chief Executive Officer
            </motion.p>
          </motion.div>
        );
      }}
    </InView>
  );
};

export const CfoDesc = () => {
  return (
    <InView threshold={0.25} triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={textVariants}
              className=" lg:text-2xl text-lg font-semibold text-sky-500 "
            >
              Jim McLemore
            </motion.p>
            <motion.p
              variants={textVariants}
              className=" lg:text-base text-sm  "
            >
              Executive Vice President, Chief Financial Officer
            </motion.p>
          </motion.div>
        );
      }}
    </InView>
  );
};
export const CloDesc = () => {
  return (
    <InView threshold={0.25} triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={textVariants}
              className=" lg:text-2xl text-lg font-semibold text-sky-500 "
            >
              Philip Bernadi
            </motion.p>
            <motion.p
              variants={textVariants}
              className=" lg:text-base text-sm  "
            >
              Executive Vice President, Chief Banking Officer
            </motion.p>
          </motion.div>
        );
      }}
    </InView>
  );
};
export const CaoDesc = () => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={textVariants}
              className=" lg:text-2xl text-lg font-semibold text-sky-500 "
            >
              Cristi Donahue
            </motion.p>
            <motion.p
              variants={textVariants}
              className=" lg:text-base text-sm  "
            >
              Executive Vice President, Chief Administrative Officer
            </motion.p>
          </motion.div>
        );
      }}
    </InView>
  );
};
export const CcoDesc = () => {
  return (
    <InView triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.div
            variants={boxVariants}
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={textVariants}
              className=" lg:text-2xl text-lg font-semibold text-sky-500 "
            >
              Tom Wilson
            </motion.p>
            <motion.p
              variants={textVariants}
              className=" lg:text-base text-sm  "
            >
              Executive Vice President, Chief Credit Officer
            </motion.p>
          </motion.div>
        );
      }}
    </InView>
  );
};
