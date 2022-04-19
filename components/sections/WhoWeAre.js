import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import one from "/public/1.jpg";
import two from "/public/2.jpg";
import three from "/public/3.jpg";
import four from "/public/4.jpg";
import five from "/public/5.jpg";
import six from "/public/6.jpg";
import seven from "/public/7.jpg";
import eight from "/public/8.jpg";

//animation
const gridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const imageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

import { InView } from "react-intersection-observer";
import CardGrid from "./WhoWeAre/CardGrid";

const WhoWeAre = () => {
  return (
    <Section>
      <SectionTitle>WHO WE ARE</SectionTitle>
      <CardGrid />
      <InView threshold={0.15} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={gridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" grid grid-cols-12 lg:gap-8 gap-4 lg:mt-44 mt-20 lg:items-center"
            >
              <motion.div
                variants={imageVariants}
                className="lg:col-span-3 col-span-12 "
              >
                <Image
                  src={one}
                  placeholder="blur"
                  alt="we-1"
                  width="372px"
                  height="496px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="lg:col-span-6 col-span-12"
              >
                <Image
                  src={two}
                  placeholder="blur"
                  alt="we-2"
                  width="760px"
                  height="570px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="lg:col-span-3 col-span-12"
              >
                <Image
                  src={three}
                  placeholder="blur"
                  alt="we-3"
                  width="372px"
                  height="496px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div variants={imageVariants} className="col-span-6">
                <Image
                  src={four}
                  placeholder="blur"
                  alt="we-4"
                  width="760px"
                  height="570px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div variants={imageVariants} className="col-span-6">
                <Image
                  src={five}
                  placeholder="blur"
                  alt="we-5"
                  width="760px"
                  height="570px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="lg:col-span-3 col-span-12"
              >
                <Image
                  src={six}
                  placeholder="blur"
                  alt="we-6"
                  width="372px"
                  height="416px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div variants={imageVariants} className="col-span-6">
                <Image
                  src={seven}
                  placeholder="blur"
                  alt="we-7"
                  width="760px"
                  height="570px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
              <motion.div
                variants={imageVariants}
                className="lg:col-span-3 col-span-6"
              >
                <Image
                  src={eight}
                  placeholder="blur"
                  alt="we-8"
                  width="372px"
                  height="496px"
                  layout="responsive"
                  className=" rounded-md "
                />
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default WhoWeAre;
