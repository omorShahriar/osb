import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import boardDirectorCropped from "/public/directors-cropped.jpg";

//animation
import { cardGridVariants, cardVariants } from "animations/variants";
const imageVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

const BoardOfDirectors = () => {
  return (
    <Section>
      <SectionTitle>BOARD OF DIRECTORS</SectionTitle>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={imageVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" lg:mt-20 mt-10 lg:mb-24 mb-12 "
            >
              <Image
                src="/report/directors-cropped.jpg"
                priority
                alt="Board of Directors"
                width={1536}
                height={765}
                layout="responsive"
                className=" rounded-xl "
              />
            </motion.div>
          );
        }}
      </InView>
      <InView triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" grid  grid-cols-8 gap-4 mt-20"
            >
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className=" text-justify ">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    G. ROBERT BISHOP JOINED IN 1991
                  </h2>
                  <p className="text-sm lg:text-base">
                    Retired, Georgia Department of Natural Resources - Bob has
                    served as a director since 1991. His business experience,
                    together with his historical knowledge of the corporation,
                    makes Bob an integral member of the Board of Directors.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    TONY L. POWELL JOINED IN 2018
                  </h2>
                  <p className="text-sm lg:text-base">
                    President, Powell Home Builders, Inc. - Tony has a degree in
                    Landscape Architecture from the University of Georgia and
                    graduated high school from Oconee County High School. He is
                    President and founder of Powell Home Builders, Inc., a
                    custom home building company.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    BRIAN J. BRODRICK JOINED IN 2016
                  </h2>
                  <p className="text-sm lg:text-base">
                    Partner & Manager of Jackson Spalding – Athens - Brian has
                    more than 25 years of strategic communications experience,
                    the past 22 at Jackson Spalding, Georgia’s leading
                    independent marketing communications agency. Brian also
                    serves as the Mayor of Watkinsville, GA.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    W. TOBY SMITH, CPA/CVA JOINED IN 2017
                  </h2>
                  <p className="text-sm lg:text-base">
                    Director of Financial Reporting & Assurance Services,
                    Trinity Accounting Group - PC Toby received his Bachelor of
                    Business Administration from the University of Georgia in
                    1998 and is a member of the Georgia Society of CPA’s, the
                    AICPA, and the National Association of Certified Valuation
                    Analysts (NACVA). Toby is an alumnus of L.E.A.D. Athens and
                    is active in the Athens area community. He currently serves
                    on the Board of Directors for Extra Special People and the
                    Athens Pregnancy Center.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    HOLLY H. STEPHENSON JOINED IN 2020
                  </h2>
                  <p className="text-sm lg:text-base">
                    General Partner/Treasurer of Hardigree Properties &
                    currently serves as the County Clerk for the Oconee County
                    Government - Holly has strong ties in Oconee County. She is
                    a graduate of UGA’s Terry College of Business, where she
                    earned a BBA in Risk Management. She proudly serves in many
                    capacities in the local community, most notably with Oconee
                    County 4-H Club and Watkinsville First Baptist Church.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    JONATHAN R. MURROW, MD JOINED IN 2016
                  </h2>
                  <p className="text-sm lg:text-base">
                    Cardiologist, Piedmont Heart Institute, Athens - Jonathan
                    received his undergraduate degree from Harvard College. He
                    earned his medical degree from Emory University School of
                    Medicine in 2001. He completed his internal medicine
                    residency at Johns Hopkins Hospital in 2004 and
                    cardiovascular fellowship training at Hopkins and Emory.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    J. ALBERT HALE, SR. JOINED IN 2008
                  </h2>
                  <p className="text-sm lg:text-base">
                    Board Vice Chair, Owner, Hale’s Dairy - Albert brings a
                    balanced perspective to the Board of Directors. His
                    demonstrated business experience, leadership skills, and
                    management skills make him an excellent addition to our
                    team.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    VIRGINIA WELLS MCGEARY JOINED IN 1990
                  </h2>
                  <p className="text-sm lg:text-base">
                    Board Chair, President & Chief Executive Officer, Wells &
                    Co. Realtors, Inc. - Virginia graduated from UGA’s Terry
                    College of Business in 1982 with a degree in Banking and
                    Finance, and she is proud to have been in the real estate
                    business for more than 40 years.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    T. NEIL STEVENS JOINED IN 2016
                  </h2>
                  <p className="text-sm lg:text-base">
                    President & Chief Executive Officer, Oconee State Bank -
                    Neil brings more than 30 years of broad based banking
                    experience to the team. Over the years, his main focus has
                    been to lead financial institutions to levels of accelerated
                    performance by placing a high emphasis on building a
                    remarkable culture within the organization.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-4 col-span-8 lg:p-8 p-4 rounded-md border-2 border-slate-200"
              >
                <div className="text-justify">
                  <h2 className="lg:text-lg text-md lg:text-left text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-4 ">
                    LAURA H. WHITAKER JOINED IN 2020
                  </h2>
                  <p className="text-sm lg:text-base">
                    Chief Executive Officer, Extra Special People, Inc. - Laura
                    obtained both her Bachelor’s degree in Collaborative Special
                    Education and her Master’s degree in Adapted Curriculum
                    Classic Autism at the University of Georgia. She is an
                    alumna of L.E.A.D Athens and Leadership Georgia and has
                    served as a Board Member for United Way, while also serving
                    as a member of North Oconee Rotary, Oconee Civitan, and the
                    Junior League of Athens.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default BoardOfDirectors;
