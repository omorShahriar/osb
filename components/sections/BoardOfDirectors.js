import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import boardOfDirector from "/public/board-of-directors.jpg";

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
import ImageBgBorder from "components/ImageBgBorder";

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
              className=" mt-20 mb-24 "
            >
              <Image
                src={boardOfDirector}
                placeholder="blur"
                alt="Board of Directors"
                width="3072px"
                height="2049px"
                layout="responsive"
                className=" rounded-xl "
              />
            </motion.div>
          );
        }}
      </InView>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className=" grid  grid-cols-8 gap-16 mt-20"
            >
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>G. ROBERT BISHOP JOINED IN 1991</h3>
                  <p>
                    Retired, Georgia Department of Natural Resources Bob has
                    served as a director since 1991. His business experience,
                    together with his historical knowledge of the corporation,
                    makes Bob an integral member of the Board of Directors.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>TONY L. POWELL JOINED IN 2018</h3>
                  <p>
                    President, Powell Home Builders, Inc. Tony has a degree in
                    Landscape Architecture from the University of Georgia and
                    graduated high school from Oconee County High School. He is
                    President and founder of Powell Home Builders, Inc., a
                    custom home building company.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>BRIAN J. BRODRICK JOINED IN 2016</h3>
                  <p>
                    Partner & Manager of Athens Office, Jackson Spalding Brian
                    has more than 25 years of strategic communications
                    experience, the past 22 at Jackson Spalding, Georgia’s
                    leading independent marketing communications agency. Brian
                    also serves as a Watkinsville City Council member.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>W. TOBY SMITH, CPA/CVA JOINED IN 2017</h3>
                  <p>
                    Director of Financial Reporting & Assurance Services,
                    Trinity Accounting Group, PC Toby received his Bachelor of
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
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>HOLLY H. STEPHENSON JOINED IN 2020</h3>
                  <p>
                    General Partner/Treasurer of Hardigree Properties & Employed
                    by Walton County Board of Commissioners Holly has a long
                    history with Oconee State Bank and as a 6th generation
                    Oconee County native and life-long resident, she has strong
                    ties in Oconee County. She is a graduate of UGA’s Terry
                    College of Business, where she earned a BBA in Risk
                    Management. She proudly serves in many capacities in the
                    local community, most notably with Oconee County 4-H Club
                    and Watkinsville First Baptist Church.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>JONATHAN R. MURROW, MD JOINED IN 2016</h3>
                  <p>
                    Cardiologist, Piedmont Heart Institute – Athens Jonathan
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
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>J. ALBERT HALE, SR. JOINED IN 2008</h3>
                  <p>
                    Board Vice Chair, Owner, Hale’s Dairy Albert brings a
                    balanced perspective to the Board of Directors. His
                    demonstrated business experience, leadership skills, and
                    management skills make him an excellent addition to our
                    team.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>VIRGINIA W. MCGEARY JOINED IN 1990</h3>
                  <p>
                    Board Chair, President & CEO, Wells & Co. Realtors, Inc.
                    Virginia graduated from UGA’s Terry College of Business in
                    1982 with a degree in Banking and Finance, and she is proud
                    to have been in the real estate business for more than 40
                    years.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>T. NEIL STEVENS JOINED IN 2016</h3>
                  <p>
                    President & Chief Executive Officer, Oconee State Bank Neil
                    brings more than 30 years of broad based banking experience
                    to the team. Over the years, his main focus has been to lead
                    financial institutions to levels of accelerated performance
                    by placing a high emphasis on building a remarkable culture
                    within the organization.
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 p-8 rounded-md border-2 border-slate-200"
              >
                <div className="prose xl:prose-lg">
                  <h3>LAURA H. WHITAKER JOINED IN 2020</h3>
                  <p>
                    Executive Director, Extra Special People, Inc. Laura
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
