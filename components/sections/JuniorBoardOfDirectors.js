import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import juniorBoard from "/public/jr-board.jpg";

//animation
import { blockVariants } from "animations/variants";
const imageVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const listBoxOneVariants = {
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
const listBoxTwoVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 3,
    },
  },
};

const listVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

import { InView } from "react-intersection-observer";
import ImageBgBorder from "components/ImageBgBorder";

const JuniorBoardOfDirectors = () => {
  return (
    <Section>
      <SectionTitle>JUNIOR BOARD OF DIRECTORS</SectionTitle>
      <div className=" prose xl:prose-lg max-w-[120ch] text-center mx-auto mt-10">
        <InView threshold={0.25} triggerOnce>
          {({ ref, inView }) => {
            return (
              <motion.p
                variants={blockVariants}
                initial="hidden"
                ref={ref}
                animate={inView ? "visible" : "hidden"}
              >
                Founded in 1984 by H. Mell Wells, Oconee State Bank’s Junior
                Board of Directors is comprised of high school students
                throughout Oconee County. The students listed below have been
                nominated by teachers and selected by their schools to serve as
                the 2021-2022 Junior Directors. The combined academic and
                extracurricular achievements of this year’s Board is unmatched.
                These students are making a difference and marking lives in
                their own right in their corner of the world. At Oconee State
                Bank, we are proud to fulfill our commitment to serving our
                local school systems through community education initiatives,
                and working directly with aspiring young leaders is an honor for
                our team. Going forward, in 2022 and beyond, our vision is to
                expand the Junior Board program across all markets we serve,
                creating remarkable education experiences for more student
                populations than ever before.
              </motion.p>
            );
          }}
        </InView>
      </div>
      <div className=" grid  grid-cols-12 gap-x-10 gap-y-24 mt-20 ">
        <div className=" col-span-3">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={listBoxOneVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className=" prose xl:prose-lg"
                >
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Garrett Kennedy
                    </span>
                    Athens Academy
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Madeline Wicker
                    </span>
                    Athens Academy
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Becca Clower
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Cole Davidson
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Yerahm Hong
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Camden Howell
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Justin Wells
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Conagher Wheeler
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Jackson White
                    </span>
                    North Oconee High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Nick Wiley
                    </span>
                    North Oconee High School
                  </motion.p>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className=" col-span-3">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={listBoxTwoVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className=" prose xl:prose-lg"
                >
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Abbie Chen
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Daniel Elder
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Will Fuller
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Landon Hagwood
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Maggie Michael
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Drew Mitchell
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Rylee Ann Royster
                    </span>
                    Oconee County High School
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Mark Smith
                    </span>
                    Westminster
                  </motion.p>
                  <motion.p variants={listVariants}>
                    <span className="font-semibold text-osb-lightBlue block">
                      Owen Weatherly
                    </span>
                    Westminster
                  </motion.p>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <InView threshold={0.25} triggerOnce>
          {({ ref, inView }) => {
            return (
              <motion.div
                variants={imageVariants}
                initial="hidden"
                ref={ref}
                animate={inView ? "visible" : "hidden"}
                className=" col-start-8 col-span-5"
              >
                <div className="relative">
                  <ImageBgBorder x={15} />
                  <Image
                    alt="Junior Board Image"
                    src={juniorBoard}
                    placeholder="blur"
                    width="1304px"
                    height="1738px"
                    layout="responsive"
                    className=" rounded-md "
                  />
                </div>
              </motion.div>
            );
          }}
        </InView>
      </div>
    </Section>
  );
};

export default JuniorBoardOfDirectors;
