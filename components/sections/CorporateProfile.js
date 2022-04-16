import Section from "../Section";
import SectionTitle from "../SectionTitle";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import {
  blockVariants,
  cardGridVariants,
  cardVariants,
} from "animations/variants";

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
                className=" text-center max-w-[80ch] mx-auto "
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
              className="  grid grid-cols-12 gap-12   pt-4 max-w-fit px-8 mx-auto text-center "
            >
              <motion.div
                variants={cardVariants}
                className=" col-span-4  flex flex-col gap-4 "
              >
                <h2 className=" text-2xl font-semibold capitalize text-osb-lightBlue ">
                  ANNUAL MEETING
                </h2>
                <div>
                  <p>Monday, June 6, 2021 – 5pm</p>
                  <p> Oconee State Bank</p>
                  <p>Corporate Headquarters</p>
                  <p>41 N. Main Street</p>
                  <p> Watkinsville, Georgia 30677</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4  flex flex-col gap-4   "
              >
                <h2 className="text-2xl font-semibold capitalize text-osb-lightBlue ">
                  INVESTOR RELATIONS
                </h2>
                <div>
                  <p>James R. McLemore</p>
                  <p> Executive Vice President & Chief Financial Officer</p>
                  <p>Oconee Financial Corporation</p>
                  <p>Post Office Box 205</p>
                  <p> Watkinsville, Georgia 30677</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className="col-span-4 flex flex-col gap-4  "
              >
                <h2 className="text-2xl font-semibold capitalize text-osb-lightBlue ">
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
                className=" col-start-3 col-span-4  flex flex-col gap-4  "
              >
                <h2 className="text-2xl font-semibold capitalize text-osb-lightBlue  ">
                  INDEPENDENT REGISTERED PUBLIC ACCOUNTING FIRM
                </h2>
                <div>
                  <p>Mauldin & Jenkins, LLC</p>
                  <p> Certified Public Accountants</p>
                  <p>200 Galleria Parkway, S.E.</p>
                  <p>Suite 1700</p>
                  <p>Atlanta, Georgia 30339-5946</p>
                </div>
              </motion.div>
              <motion.div
                variants={cardVariants}
                className=" col-start-7 col-span-4  flex flex-col gap-4  justify-between"
              >
                <h2 className="text-2xl font-semibold capitalize text-osb-lightBlue l  ">
                  OCONEE FINANCIAL CORPORATION
                </h2>
                <div>
                  {" "}
                  <p>35 N. Main Street</p>
                  <p>Post Office Box 205</p>
                  <p>Watkinsville, Georgia 30677</p>
                  <p>Telephone: (706) 769-6611</p>
                  <p>Facsimile: (706) 583-3878</p>
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
