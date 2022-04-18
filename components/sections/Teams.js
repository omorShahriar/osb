import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import marketTeam from "/public/market-team.jpg";
import gwinnettMarketTeam from "/public/gwinnett-market-team.jpg";
import athensMarketTeam from "/public/athens-market-team.jpg";
import maconMarketTeam from "/public/roby-macon.jpg";

//animation

const teamBoxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};
const teamTitleVariants = {
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
    },
  },
};

const teamQuoteVariants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const Teams = () => {
  return (
    <Section>
      <SectionTitle>Market Teams</SectionTitle>
      <div className=" grid grid-cols-8 gap-x-[48px] gap-y-52 mt-24 items-center">
        <div className="col-span-4">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={teamBoxVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className=" prose xl:prose-lg "
                >
                  <motion.p
                    variants={teamTitleVariants}
                    className=" font-slab tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600 "
                  >
                    Oconee Market Team
                  </motion.p>

                  <motion.blockquote
                    variants={teamQuoteVariants}
                    className="text-justify"
                  >
                    “As a team, we have grown leaps and bounds over the last
                    year. We have successfully managed a loan portfolio of
                    nearly $108 million, generating $32 million in new loan
                    production for the year. Together we helped the bank
                    navigate round two of Paycheck Protection Plan loans of $18
                    million, and $71 million in forgiveness. We are proud to say
                    that the OC Market Retail team exceeded budget and we
                    continue to add new team members that hold true to our
                    mission and values. We are looking forward to a great
                    upcoming year.”{" "}
                    <span className="block not-italic font-semibold text-sm my-4 text-right">
                      – Hal Jackson, Oconee Market President
                    </span>
                  </motion.blockquote>
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
                className="col-span-4"
              >
                <div className=" relative ">
                  <ImageBgBorder x={15} />
                  <Image
                    alt="Oconee marketing team image"
                    src={marketTeam}
                    placeholder="blur"
                    width="1492px"
                    height="995px"
                    layout="responsive"
                    className="  rounded-md "
                  />
                </div>
              </motion.div>
            );
          }}
        </InView>
        <div className="col-span-4">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="relative">
                    <ImageBgBorder />
                    <Image
                      alt="Gwinnett marketing team image"
                      src={gwinnettMarketTeam}
                      placeholder="blur"
                      width="1492px"
                      height="995px"
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </motion.div>
              );
            }}
          </InView>
        </div>

        <div className="col-span-4">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={teamBoxVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className=" prose xl:prose-lg "
                >
                  <motion.p
                    variants={teamTitleVariants}
                    className=" font-slab tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600 "
                  >
                    Gwinnett Market Team
                  </motion.p>

                  <motion.blockquote
                    variants={teamQuoteVariants}
                    className="text-justify"
                  >
                    “The Gwinnett Team had a great 2021 with many
                    accomplishments. We moved into our new permanent location in
                    Duluth, Georgia. The new space will be our home for many
                    years to come that provides the needed room to expand the
                    team and offer a great place for our clients to visit. The
                    Gwinnett Team worked extremely hard in 2021 and their
                    efforts rewarded the bank with a profit and successfully
                    exceeding the budget. We have added new team members and
                    together have put forth continued efforts to increase
                    awareness of the OSB brand. I would like to offer a special
                    thank you to all of our shareholders, without you, this
                    would not be possible. The Gwinnett Team is up to the
                    challenge and we look forward to reporting our successes in
                    2022.”
                    <span className="block not-italic font-semibold text-sm my-4 text-right">
                      – Joe Godfrey, Gwinnett Market President
                    </span>
                  </motion.blockquote>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="col-span-4">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={teamBoxVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className=" prose xl:prose-lg "
                >
                  <motion.p
                    variants={teamTitleVariants}
                    className=" font-slab tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600 "
                  >
                    Athens Market Team
                  </motion.p>

                  <motion.blockquote
                    variants={teamQuoteVariants}
                    className="text-justify"
                  >
                    “In 2021, we became a full service depository location while
                    hitting internal milestones for asset growth and cash
                    management services. We eclipsed $100 million in loans
                    outstanding and had banner deposit growth. Additionally, we
                    most recently added an ATM in front of our office. We are
                    poised for an amazing 2022!”
                    <span className="block not-italic font-semibold text-sm my-4 text-right">
                      – Chad Thomason and Phillip Edwards, Athens Market
                      Presidents
                    </span>
                  </motion.blockquote>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="col-span-4">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className=" relative ">
                    <ImageBgBorder x={15} />
                    <Image
                      alt="Athens marketing team image"
                      src={athensMarketTeam}
                      placeholder="blur"
                      width="1492px"
                      height="2072px"
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="col-span-3">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={imageVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className=" relative ">
                    <ImageBgBorder x={15} />
                    <Image
                      alt="Makon marketing team image"
                      src={maconMarketTeam}
                      placeholder="blur"
                      width={178.5}
                      height={182}
                      layout="responsive"
                      className="  rounded-md "
                    />
                  </div>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="col-span-4">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={teamBoxVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className=" prose xl:prose-lg "
                >
                  <motion.p
                    variants={teamTitleVariants}
                    className=" font-slab tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600 "
                  >
                    Macon Market Team
                  </motion.p>

                  <motion.blockquote
                    variants={teamQuoteVariants}
                    className="text-justify"
                  >
                    “Oconee State Bank is excited to bring a new market team to
                    the Macon and Middle Georgia community. Our goal is to
                    intentionally build a team made up of remarkable talent
                    while also working to grow a strong customer base and
                    identify a location that best serves the area. ”
                    <span className="block not-italic font-semibold text-sm my-4 text-right">
                      – Robby Redmond, Macon Market President
                    </span>
                  </motion.blockquote>
                </motion.div>
              );
            }}
          </InView>
        </div>
      </div>
    </Section>
  );
};

export default Teams;
