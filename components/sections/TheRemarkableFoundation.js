import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Button from "components/Button";
//Images
import remarkableFoundation from "/public/remarkable-foundation.png";
import trf from "/public/trf.jpg";
//animation
import { cardGridVariants, cardVariants } from "animations/variants";
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

import { InView } from "react-intersection-observer";
import ImageBgBorder from "components/ImageBgBorder";

const TheRemarkableFoundation = () => {
  return (
    <Section>
      <SectionTitle>THE REMARKABLE FOUNDATION</SectionTitle>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={imageVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className="mt-24"
            >
              <div className=" relative ">
                <ImageBgBorder />
                <Image
                  alt="the remarkable foundation banner"
                  src={trf}
                  placeholder="blur"
                  width="1536px"
                  height="326px"
                  layout="responsive"
                  className="rounded-md  "
                />
              </div>
            </motion.div>
          );
        }}
      </InView>
      <div className=" w-[350px] mx-auto mt-10 ">
        <Image
          alt="the remarkable foundation"
          src={remarkableFoundation}
          placeholder="blur"
          width={600}
          height={450}
          layout="responsive"
        />
      </div>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className="mt-20 grid grid-cols-3 gap-20 text-justify"
            >
              <motion.div
                variants={cardVariants}
                className=" prose xl:prose-lg"
              >
                <p>
                  Since 1960, Oconee State Bank has been proud and thankful to
                  partner with countless local charities, giving back to the
                  same organizations who are making an impact in the communities
                  we are blessed to serve as a community bank. In 2020, in
                  recognition of our 60th Anniversary commemorative
                  celebrations, we proudly formed a charitable foundation coined{" "}
                  <strong>The Remarkable Foundation</strong>!
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" prose xl:prose-lg"
              >
                <p>
                  The mission of The Remarkable Foundation is to provide
                  financial assistance to nonprofit organizations for the
                  implementation of services and programs that enhance and mark
                  the quality of life for all people in the communities served
                  by Oconee State Bank.
                </p>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" prose xl:prose-lg"
              >
                <p>
                  Customers, community members, local organizations, and beyond
                  have an opportunity to link arms and partner with the
                  established and reputable giving history of OSB, through the
                  foundation, thus increasing our giving impact in every
                  community we serve.
                </p>
              </motion.div>
              <div className=" col-span-3 ">
                <Button
                  className="mx-auto"
                  link="https://athensareacf.fcsuite.com/erp/donate/create?funit_id=1561"
                >
                  Make A Donation
                </Button>
              </div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default TheRemarkableFoundation;
