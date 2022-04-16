import { motion } from "framer-motion";

import { InView } from "react-intersection-observer";

const ImageBgBorder = ({ x = -15, y = -15, delay = 0 }) => {
  const borderVariants = {
    hidden: {
      y: 0,
      x: 0,
    },
    visible: {
      y,
      x,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay,
      },
    },
  };
  return (
    <InView threshold={0.25} triggerOnce>
      {({ ref, inView }) => {
        return (
          <motion.div
            variants={borderVariants}
            initial="hidden"
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            className=" p-1 -z-10 absolute inset-0 bg-gradient-to-b  from-emerald-500 to-blue-500 rounded-md "
          >
            <div className=" bg-white w-full h-full  " />
          </motion.div>
        );
      }}
    </InView>
  );
};

export default ImageBgBorder;
