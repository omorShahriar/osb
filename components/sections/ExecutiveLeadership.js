import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import ceo from "/public/ceo.jpg";
import cfo from "/public/cfo.jpg";
import philip from "/public/philip-bernardi.jpg";
import cristi from "/public/cristi-donahue.jpg";
import tom from "/public/tom-wilson.jpg";

//animation
import { cardGridVariants, cardVariants } from "animations/variants";

import { InView } from "react-intersection-observer";
import ImageBgBorder from "components/ImageBgBorder";
import {
  CaoDesc,
  CcoDesc,
  CeoDesc,
  CfoDesc,
  CloDesc,
} from "./ExecutiveLeadership/ExecDesc";

const ExecutiveLeadership = () => {
  return (
    <Section>
      <SectionTitle>EXECUTIVE LEADERSHIP TEAM</SectionTitle>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className="grid mt-24 grid-cols-12 gap-x-12 gap-y-20 "
            >
              <motion.div
                variants={cardVariants}
                className="  col-span-4 flex flex-col gap-y-4 items-center text-center "
              >
                <div className=" w-5/12 ">
                  <div className=" relative ">
                    <ImageBgBorder delay={0.75} />
                    <Image
                      alt="president's image"
                      src={ceo}
                      placeholder="blur"
                      width="852px"
                      height="1280px"
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </div>
                <CeoDesc />
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" col-span-4 flex flex-col gap-y-4 items-center text-center  "
              >
                <div className=" w-5/12 ">
                  <div className=" relative ">
                    <ImageBgBorder delay={0.5} />
                    <Image
                      alt="cfo's image"
                      placeholder="blur"
                      src={cfo}
                      width="852px"
                      height="1280px"
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </div>
                <CfoDesc />
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="flex col-span-4 flex-col gap-y-4  items-center text-center  "
              >
                <div className=" w-5/12 ">
                  <div className=" relative ">
                    <ImageBgBorder />
                    <Image
                      alt="Executive Vice President, Chief Financial Officer"
                      src={philip}
                      placeholder="blur"
                      width="310px"
                      height="465px"
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </div>
                <CloDesc />
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="flex col-start-3 col-span-4 flex-col gap-y-4  items-center text-center  "
              >
                <div className=" w-5/12    rounded-md ">
                  <div className=" relative ">
                    <ImageBgBorder />
                    <Image
                      alt="Executive Vice President, Chief Administration Officer"
                      src={cristi}
                      width="156px"
                      height="235px"
                      layout="responsive"
                      placeholder="blur"
                      className="  rounded-md  "
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </div>
                <CaoDesc />
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="flex  col-start-7 col-span-4 flex-col gap-y-4 items-center text-center  "
              >
                <div className=" w-5/12 ">
                  <div className=" relative">
                    <ImageBgBorder />
                    <Image
                      alt="Executive Vice President, Chief Credit Officer"
                      src={tom}
                      width="620px"
                      height="930px"
                      placeholder="blur"
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </div>

                <CcoDesc />
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default ExecutiveLeadership;
