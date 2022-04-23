import { motion } from "framer-motion";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

import gwinnettCommunityAdvisors from "/public/gwinnett-community-advisors.jpg";
import athensCommunityAdvisors from "/public/athens-community-advisors.jpg";

import {
  cardGridVariants,
  cardVariants,
  blockVariants,
} from "animations/variants";

const AdvisoryCommittee = () => {
  const data = [
    {
      title: "Athens / Oconee",
      committee: [
        {
          name: "Andy Thoms",
          designation: "CEO & Co-Founder, See. Spark. Go.",
        },
        { name: "Davis Knox", designation: "CEO & Co-Founder, Fire & Flavor" },
        {
          name: "Donald Hansford",
          designation: "Attorney at Law, Donald W. Hansford, PC",
        },
        {
          name: "Elmer Stancil",
          designation: "Senior Managing Director, Dentons",
        },
        { name: "Robert Griffith", designation: "President, Golden Pantry" },
        {
          name: "Lenn Chandler",
          designation: "Retired Vice President, Georgia Power",
        },
        { name: "Dan Elder", designation: "President, Oconee Well Drillers" },
        {
          name: "Delena Brockmann",
          designation: "Director, Piedmont Athens-Oconee Campus",
        },
        {
          name: "Dutch Guest",
          designation: "Vice President, LAD Truck Lines, Inc.",
        },
        { name: "Kevin Daniel", designation: "Pastor, Bethel Baptist Church" },
        { name: "Tiffany Carter", designation: "CPA, WAG CPA" },
      ],
    },
    {
      title: "Gwinnett",
      committee: [
        {
          name: "Greg Cantrell",
          designation: "Broker/Owner, Living Stone Properties",
        },
        { name: "Rob Coatsworth", designation: "CEO, CTR Partners, Inc." },
        { name: "Matt Hyatt", designation: "President & CEO, Rocket IT" },
        {
          name: "Lee Merritt",
          designation: "Partner, Merritt Properties, Inc.",
        },
        {
          name: "Russell Reece",
          designation: "Atlanta Managing Partner, Hancock Askew & Co.",
        },
        { name: "Marlon Allen", designation: "Partner, RAMP Marketing LLC" },
      ],
    },
    {
      title: "Macon",
      committee: [
        { name: "Hall Harden", designation: "Agent, Alfa Insurance" },
      ],
    },
  ];
  return (
    <Section>
      <div className=" mx-auto mb-12">
        <SectionTitle>Community Advisory Committees</SectionTitle>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => {
            return (
              <motion.p
                ref={ref}
                variants={blockVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="  text-justify max-w-[80ch] mx-auto lg:text-base text-sm "
              >
                Oconee State Bank’s Community Advisory Committees serve as
                ambassadors of Oconee State Bank, our eyes and ears in the
                communities we serve, to offer valuable feedback to continually
                enhance our operations. Each committee is comprised of a diverse
                group of individuals and businesses from the surrounding Oconee,
                Athens-Clarke, Gwinnett County communities, and now moving into
                the Macon community. These committees and individuals serve as a
                liaison between the local community and the bank.
              </motion.p>
            );
          }}
        </InView>
      </div>

      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className="grid  grid-cols-9 lg:gap-x-4 lg:gap-y-24 gap-y-12 mt-4"
            >
              <motion.div
                variants={cardVariants}
                className="lg:col-span-3 col-span-9 "
              >
                <div className=" flex flex-col lg:gap-y-12 gap-y-6   ">
                  <h2 className="text-3xl font-semibold text-osb-green text-center">
                    {data[0].title}
                  </h2>
                  <ul className="flex flex-col gap-y-6">
                    {data[0].committee.map((c, i) => {
                      return (
                        <li key={i}>
                          <p className=" text-lg ">{c.name}</p>
                          <p className=" text-sm font-bold text-osb-lightBlue ">
                            {c.designation}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-3 col-span-9 flex flex-col lg:gap-y-24 gap-y-12"
              >
                <div className=" flex flex-col lg:gap-y-12 gap-y-6  ">
                  <h2 className="text-3xl font-semibold text-osb-green text-center">
                    {data[1].title}
                  </h2>
                  <ul className="flex flex-col gap-y-6">
                    {data[1].committee.map((c, i) => {
                      return (
                        <li key={i}>
                          <p className=" text-lg ">{c.name}</p>
                          <p className=" text-sm font-bold text-osb-lightBlue ">
                            {c.designation}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* <div className=" flex flex-col lg:gap-y-12 gap-y-6    ">
                  <h2 className="text-3xl font-semibold text-osb-green text-center">
                    {data[2].title}
                  </h2>
                  <ul className="flex flex-col gap-y-6 ">
                    {data[2].committee.map((c, i) => {
                      return (
                        <li key={i} className="">
                          <p className=" text-lg ">{c.name}</p>
                          <p className=" text-sm font-bold text-osb-lightBlue ">
                            {c.designation}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div> */}
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="lg:col-span-3 col-span-9 -order-1"
              >
                <InView>
                  {({ ref, inView }) => {
                    return (
                      <motion.div
                        variants={cardGridVariants}
                        initial="hidden"
                        ref={ref}
                        animate={inView ? "visible" : "hidden"}
                        className=" grid grid-cols-2 gap-y-4 items-center"
                      >
                        <motion.div
                          variants={cardVariants}
                          className="col-span-2 relative"
                        >
                          <p className="absolute left-4 bottom-4 text-lg font-semibold  z-10 text-white text-shadow  ">
                            Gwinnett Community Advisors
                          </p>
                          <Image
                            alt="Gwinnett community advisors"
                            src={gwinnettCommunityAdvisors}
                            placeholder="blur"
                            width={683}
                            height={450}
                            layout="responsive"
                            className="rounded-md"
                          />
                        </motion.div>
                        <motion.div
                          variants={cardVariants}
                          className="col-span-2 relative"
                        >
                          <p className="absolute right-4 bottom-4 text-lg font-semibold  z-10  text-white text-shadow ">
                            Athens/Oconee Community Advisors
                          </p>
                          <Image
                            alt="Athens Community Advisors"
                            src={athensCommunityAdvisors}
                            placeholder="blur"
                            width={675}
                            height={450}
                            layout="responsive"
                            className="rounded-md"
                          />
                        </motion.div>
                      </motion.div>
                    );
                  }}
                </InView>
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default AdvisoryCommittee;
