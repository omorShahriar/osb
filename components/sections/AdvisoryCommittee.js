import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

import { cardGridVariants, cardVariants } from "animations/variants";

const AdvisoryCommittee = () => {
  return (
    <Section>
      <SectionTitle>Community Advisory Committee</SectionTitle>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              variants={cardGridVariants}
              initial="hidden"
              ref={ref}
              animate={inView ? "visible" : "hidden"}
              className="grid  grid-cols-9 gap-x-14 gap-y-24 mt-16"
            >
              <motion.div variants={cardVariants} className="col-span-3 ">
                <div className="   ">
                  <h3>Athens / Oconee</h3>
                  <ul>
                    <li>Andy Thoms - CEO & Co-Founder, See. Spark. Go.</li>
                    <li>Davis Knox - CEO & Co-Founder, Fire & Flavor</li>
                    <li>
                      Donald Hansford - Attorney at Law, Donald W. Hansford, PC
                    </li>
                    <li>Elmer Stancil - Senior Managing Director, Dentons</li>
                    <li>Robert Griffith - President, Golden Pantry</li>
                    <li>
                      Lenn Chandler - Retired Vice President, Georgia Power
                    </li>
                    <li>Dan Elder - President, Oconee Well Drillers</li>
                    <li>
                      Delena Brockmann - Director, Piedmont Athens-Oconee Campus
                    </li>
                    <li>Dutch Guest - Vice President, LAD Truck Lines, Inc.</li>
                    <li>Kevin Daniel - Pastor, Bethel Baptist Church</li>
                    <li>Tiffany Carter - CPA, WAG CPA</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={cardVariants} className="col-span-3">
                <div className="  ">
                  <h3>Gwinnett</h3>
                  <ul>
                    <li>
                      Greg Cantrell- Broker/Owner, Living Stone Properties
                    </li>
                    <li>Rob Coatsworth - CEO, CTR Partners, Inc.</li>
                    <li>Matt Hyatt - President & CEO, Rocket IT</li>
                    <li>Lee Merritt - Partner, Merritt Properties, Inc.</li>
                    <li>
                      Russell Reece - Atlanta Managing Partner, Hancock Askew &
                      Co.
                    </li>
                    <li>Marlon Allen - Partner, RAMP Marketing LLC</li>
                  </ul>
                </div>
              </motion.div>
              <motion.div variants={cardVariants} className="col-span-3">
                <div className="   ">
                  <h3>Macon</h3>
                  <ul>
                    <li>Hall Harden - Agent, Alfa Insurance</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          );
        }}
      </InView>
    </Section>
  );
};

export default AdvisoryCommittee;
