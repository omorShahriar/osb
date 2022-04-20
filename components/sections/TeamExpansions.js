import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Button from "../Button";

//images
import sba from "/public/sba.png";
import financialServices from "/public/state-financial.png";
import mortgage from "public/mortgage.png";
import mortgageImage from "public/mortgage-image.jpg";

import { cardGridVariants, cardVariants } from "animations/variants";

import { InView } from "react-intersection-observer";

const TeamExpansions = () => {
  return (
    <Section>
      <SectionTitle>TEAM EXPANSIONS</SectionTitle>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className="  lg:mt-24 mt-20 grid grid-cols-8 lg:gap-x-[48px] lg:gap-y-24 gap-y-12  "
            >
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 flex flex-col  gap-y-6 "
              >
                <div className="logo w-[230px] mx-auto lg:mx-0 box-content pl-2 pt-4 pr-20 relative min-h-[83.5px]">
                  <div className="bg-grid absolute inset-0 bg-[url('/report/svg/wiggle.svg')] bg-repeat -z-10 ">
                    {" "}
                  </div>
                  <Image
                    alt="Small Business Administration logo"
                    layout="responsive"
                    src={sba}
                    width={460}
                    height={126}
                  />
                </div>
                <div className=" prose xl:prose-lg text-justify ">
                  {" "}
                  <h2 className=" lg:text-left text-center ">
                    Small Business Administration
                  </h2>
                  <p className="text-sm lg:text-base">
                    Our SBA team has many years of experience in the area of
                    guaranteed government lending. We are committed to helping
                    mark the lives of those wanting to build, expand, or
                    recover. Supporting small businesses in a way that we have
                    longed to do, is now possible with the expansion of the
                    Small Business Administration team.
                  </p>
                </div>
                <div className="grow flex   ">
                  <Button
                    className=" mt-auto lg:mx-0 mx-auto text-sm lg:text-base "
                    link="https://www.oconeestatebank.com/business/small-business-administration"
                  >
                    Meet our SBA Team
                  </Button>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" lg:col-span-4 col-span-8 -order-1 flex flex-col  gap-y-6 "
              >
                <div className="people-image ">
                  <Image
                    alt="mortgage image people talking"
                    placeholder="blur"
                    src={mortgageImage}
                    width={1200}
                    height={1190}
                    className="rounded-md object-cover object-center "
                  />
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" lg:col-span-4 col-span-8 flex flex-col  gap-y-6 "
              >
                <div className="logo w-[230px] lg:mx-0 mx-auto box-content pl-2 pt-4 pr-20 relative">
                  <div className="bg-grid absolute inset-0 bg-[url('/report/svg/wiggle.svg')] bg-repeat -z-10 ">
                    {" "}
                  </div>
                  <Image
                    alt="Oconee State Financial Services logo"
                    layout="responsive"
                    src={financialServices}
                    width={460}
                    height={167}
                  />
                </div>
                <div className=" prose xl:prose-lg text-justify ">
                  {" "}
                  <h2 className=" lg:text-left text-center ">
                    Oconee State Financial Services
                  </h2>
                  <p className="text-sm lg:text-base">
                    The Oconee State Financial Services team is dedicated to
                    helping clients in all aspects and facets of their financial
                    lives. The decisions that you make today will put you on
                    track towards the right course for the future. With services
                    including Wealth Management, Business Retirement Plans, Risk
                    Management, and Financial Planning, now our customers have
                    even more support when creating their financial plans with
                    the expansion and experience of the OSFS team.
                  </p>
                </div>
                <div className="grow flex   ">
                  <Button
                    link="https://www.oconeestatefinancialservices.com/"
                    className=" mt-auto lg:mx-0 mx-auto text-sm lg:text-base "
                  >
                    Check out more on the OSFS team
                  </Button>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" lg:col-span-4 col-span-8 flex flex-col  gap-y-6 "
              >
                <div className="logo w-[230px] lg:mx-0 mx-auto  box-content pl-2 pt-4 pr-20 relative">
                  <div className="bg-grid absolute inset-0 bg-[url('/report/svg/wiggle.svg')] bg-repeat -z-10 ">
                    {" "}
                  </div>
                  <Image
                    alt="Remarkable Mortgage logo"
                    layout="responsive"
                    src={mortgage}
                    width={460}
                    height={159}
                  />
                </div>
                <div className=" prose xl:prose-lg  text-justify">
                  {" "}
                  <h2 className=" lg:text-left text-center ">
                    Remarkable Mortgage
                  </h2>
                  <p className="text-sm lg:text-base">
                    Remarkable Mortgage leaves a lasting impression on the
                    customers we serve, bringing confidence and simplicity to
                    home financing. The Remarkable Mortgage team offers
                    top-notch customer service and customized loan solutions,
                    with an innovative and progressive approach to mortgage
                    loans. Powered by Oconee State Bank, Remarkable Mortgage
                    will serve customers with the personalized service of a
                    hometown bank, and the sophistication of the most cutting
                    edge technology and infrastructure.
                  </p>
                </div>
                <div className="grow flex   ">
                  {" "}
                  <Button
                    className="text-center text-sm lg:text-base mt-auto lg:mx-0 mx-auto "
                    link="https://www.meetremarkable.com/"
                  >
                    Meet the Remarkable Mortgage Team
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default TeamExpansions;
