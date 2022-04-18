import { motion } from "framer-motion";

const BluecardBoxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 1.2,
    },
  },
};

const cardTitleVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 1,
    },
  },
};

const listItemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};

import { InView } from "react-intersection-observer";

const BusinessServicesCards = () => {
  return (
    <>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.h2
              variants={cardTitleVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" text-3xl font-semibold"
            >
              Business Services
            </motion.h2>
          );
        }}
      </InView>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={BluecardBoxVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" text-sm flex flex-col gap-4 "
            >
              <motion.p variants={listItemVariants}>
                Processed through Remote Deposit Capture (RDC)
                <span className=" float-right font-semibold italic ">
                  $199,665,810
                </span>
              </motion.p>
              <motion.p variants={listItemVariants}>
                Items processed through RDC
                <span className=" float-right font-semibold italic ">
                  157,871
                </span>
              </motion.p>
              <motion.p variants={listItemVariants}>
                Savings through usage of RDC
                <span className=" float-right font-semibold italic ">
                  $97,880
                </span>
              </motion.p>
              <motion.p variants={listItemVariants}>
                Processed through ACH Origination
                <span className=" float-right font-semibold italic ">
                  $190,163,335
                </span>
              </motion.p>
              <motion.p variants={listItemVariants}>
                Revenue generated from various business services
                <span className=" float-right font-semibold italic ">
                  $39,547
                </span>
              </motion.p>
              <motion.p variants={listItemVariants}>
                Revenue generated from service charges on <br /> commercial
                accounts
                <span className=" float-right font-semibold italic ">
                  $30,104
                </span>
              </motion.p>
            </motion.div>
          );
        }}
      </InView>
    </>
  );
};

export default BusinessServicesCards;
