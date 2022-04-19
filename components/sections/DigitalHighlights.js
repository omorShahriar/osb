import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//animation
import { cardGridVariants, cardVariants } from "animations/variants";

import { InView } from "react-intersection-observer";
import BankingServicesCard from "./DigitalHighlights/BankingServicesCards";
import BusinessServicesCards from "./DigitalHighlights/BusinessServicesCards";
import {
  BoxSquiggleUp,
  BoxSquiggleDown,
} from "./DigitalHighlights/BoxSquiggle";

const DigitalHighlights = () => {
  return (
    <Section>
      <SectionTitle>Digital Highlights</SectionTitle>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" grid grid-cols-12 gap-4 md:mt-24 mt-20 "
            >
              <motion.div
                variants={cardVariants}
                className="md:col-span-6 col-span-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-md p-8"
              >
                <div className="flex flex-col md:gap-8 gap-y-6 ">
                  <BankingServicesCard />
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="md:col-span-6 col-span-12 flex flex-col justify-center gap-y-10  "
              >
                <div className="h-[80px] mx-auto">
                  <BoxSquiggleUp />
                </div>
                <div className="h-fit  bg-gradient-to-tr from-blue-600 to-emerald-600 rounded-md p-8">
                  <div className="text-white   flex flex-col gap-8 ">
                    <BusinessServicesCards />
                  </div>
                </div>
                <div className="h-[80px] mx-auto">
                  <BoxSquiggleDown />
                </div>
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default DigitalHighlights;
