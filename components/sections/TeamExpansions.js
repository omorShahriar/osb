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
              className="  mt-24 grid grid-cols-8 gap-x-[48px] gap-y-24  "
            >
              <motion.div
                variants={cardVariants}
                className="col-span-4 flex flex-col  gap-y-6 "
              >
                <div className="logo w-[230px] min-h-[83.5px]">
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
                  <h2>Small Business Administration</h2>
                  <p>
                    Our SBA team has many years of experience in the area of
                    guaranteed government lending. We are committed to helping
                    mark the lives of those wanting to build, expand, or
                    recover. Supporting small businesses in a way that we have
                    longed to do is now possible with the expansion of the Small
                    Business Administration team.
                  </p>
                </div>
                <div className="grow flex   ">
                  <Button
                    className=" mt-auto "
                    link="https://www.oconeestatebank.com/business/small-business-administration"
                  >
                    Meet our SBA Team
                  </Button>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" col-span-4 flex flex-col  gap-y-6 "
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
                className=" col-span-4 flex flex-col  gap-y-6 "
              >
                <div className="logo w-[230px]">
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
                  <h2>Oconee State Financial Services</h2>
                  <p>
                    The Oconee State Financial Services team is dedicated to
                    helping clients in all aspects and facets of their financial
                    lives. The decisions that you make today will put you on
                    track towards the right course for the future. With services
                    including Wealth Management, Business Retirement Plans, Risk
                    Management, and Financial Planning. Now our customers have
                    even more support when creating their financial plans with
                    the expansion and experience of the OSFS team.
                  </p>
                </div>
                <Button link="https://www.oconeestatefinancialservices.com/">
                  Check out more on the OSFS team
                </Button>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" col-span-4 flex flex-col  gap-y-6 "
              >
                <div className="logo w-[230px]">
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
                  <h2>Remarkable Mortgage</h2>
                  <p>
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
                <Button link="https://www.meetremarkable.com/">
                  Meet the Remarkable Mortgage Team
                </Button>
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default TeamExpansions;
