import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  blockVariants,
  cardGridVariants,
  cardVariants,
} from "animations/variants";

const Heading = ({ children }) => {
  <h2 className=" md:text-2xl text-xl font-semibold capitalize text-osb-lightBlue ">
    {children}
  </h2>;
};

const CorporateProfile = () => {
  return (
    <Section>
      <div className=" mx-auto mb-12">
        {" "}
        <SectionTitle>Corporate Profile</SectionTitle>
        <InView threshold={0.5} triggerOnce>
          {({ ref, inView }) => {
            return (
              <motion.p
                ref={ref}
                variants={blockVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className=" text-center md:text-base text-sm max-w-[80ch] mx-auto "
              >
                Oconee State Bank is a community-oriented commercial bank,
                headquartered in Oconee County, Georgia, with two full-service
                financial centers in Oconee County, one full-service financial
                center in Gwinnett County, and one full-service financial center
                in Athens/Clarke County.
              </motion.p>
            );
          }}
        </InView>
      </div>
      <InView threshold={0.25} triggerOnce>
        {({ ref, inView }) => {
          return (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardGridVariants}
              className="  grid grid-cols-12 md:gap-12 gap-x-0 gap-y-12 justify-items-center   pt-4 md:max-w-fit  md:px-8 px-0 mx-auto text-center "
            >
              <motion.div
                variants={cardVariants}
                className=" md:col-span-4 col-span-12  flex flex-col  gap-4   "
              >
                <h2 className=" md:text-2xl text-xl font-semibold capitalize text-osb-lightBlue ">
                  ANNUAL MEETING
                </h2>
                <div>
                  <p>Monday, June 6, 2022 – 5pm</p>
                  <p> Oconee State Bank</p>
                  <p>Corporate Headquarters</p>
                  <p>41 N. Main Street</p>
                  <p> Watkinsville, Georgia 30677</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="md:col-span-4 col-span-12  flex flex-col flex-wrap gap-4   "
              >
                <h2 className=" md:text-2xl text-xl font-semibold capitalize text-osb-lightBlue ">
                  INVESTOR RELATIONS
                </h2>
                <div>
                  <p>James R. McLemore</p>
                  <p> Executive Vice President & Chief Financial Officer</p>
                  <p>Oconee Financial Corporation</p>
                  <p>PO Box 205</p>
                  <p> Watkinsville, Georgia 30677</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="md:col-span-4 col-span-12 flex flex-col  flex-wrap gap-4  "
              >
                <h2 className=" md:text-2xl text-xl font-semibold capitalize text-osb-lightBlue ">
                  TRANSFER AGENT
                </h2>
                <div>
                  <p>Broadridge Corporate Issuer</p>
                  <p> Solutions</p>
                  <p>PO Box 1342</p>
                  <p>Brentwood, NY 11717</p>
                  <p> 1-877-830-4936</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" md:col-start-3 md:col-span-4 col-span-12 flex flex-col flex-wrap  gap-4  "
              >
                <h2 className=" md:text-2xl text-xl   font-semibold capitalize text-osb-lightBlue ">
                  INDEPENDENT REGISTERED PUBLIC ACCOUNTING FIRM
                </h2>
                <div>
                  <p>Mauldin & Jenkins, LLC</p>
                  <p> Certified Public Accountants</p>
                  <p>200 Galleria Parkway, S.E.</p>
                  <p>Suite 1700</p>
                  <p>Atlanta, Georgia 30339</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" md:col-start-7 md:col-span-4 col-span-12 flex flex-col  gap-4 flex-wrap max-w-fit  justify-between"
              >
                <h2 className=" md:text-2xl text-xl font-semibold capitalize text-osb-lightBlue ">
                  OCONEE FINANCIAL CORPORATION
                </h2>
                <div>
                  {" "}
                  <p>41 N. Main Street</p>
                  <p>PO Box 205</p>
                  <p>Watkinsville, Georgia 30677</p>
                  <p>Telephone: (706) 769-6611</p>
                  <p>
                    <a
                      href="https://www.oconeestatebank.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.oconeestatebank.com
                    </a>
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

export default CorporateProfile;
