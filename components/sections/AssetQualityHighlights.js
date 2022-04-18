import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//images
import portfolio from "public/loan-portfolio-chart.jpg";
import histogram from "public/loan-portfolio-histogram.jpg";

//animations
import { blockVariants } from "animations/variants";

import { InView } from "react-intersection-observer";

const AssetQualityHighlights = () => {
  return (
    <Section>
      <SectionTitle>Asset Quality Highlights</SectionTitle>

      <div className=" grid grid-cols-8 gap-x-20 gap-y-24 mt-24 items-center  ">
        <InView threshold={0.25} triggerOnce>
          {({ ref, inView }) => {
            return (
              <motion.div
                variants={blockVariants}
                initial="hidden"
                ref={ref}
                animate={inView ? "visible" : "hidden"}
                className=" col-span-3 text-justify prose xl:prose-lg"
              >
                <p className="font-slab text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600">
                  12/31/2021 Loan Portfolio Composition
                </p>
                <p>
                  In 2021, the Bank continued to assist small businesses through
                  an additional $18 Million of 2021 SBA Paycheck Protection
                  Program (PPP) Loans and guiding them through $71 Million in
                  loan forgiveness. Excluding these PPP loan efforts, the Bank
                  continued to grow its targeted Owner Occupied Commercial Real
                  Estate Portfolio to 38% of the Total Loan Portfolio.
                  Additionally, the Bank continues to demonstrate a
                  well-balanced and diversified loan portfolio mix with 27% of
                  the portfolio in Non-Owner Occupied Commercial Real Estate,
                  and 16% of the portfolio in 1 to 4 Family Housing loans.
                </p>
              </motion.div>
            );
          }}
        </InView>
        <div className=" col-span-5">
          <Image
            alt="loan portfolio composition"
            src={portfolio}
            placeholder="blur"
            width="1092px"
            height="844px"
            layout="responsive"
          />
        </div>
        <div className=" col-span-5">
          {" "}
          <Image
            alt="Historical loan portfolio totals"
            src={histogram}
            placeholder="blur"
            width="1092px"
            height="844px"
            layout="responsive"
          />
        </div>
        <InView threshold={0.25} triggerOnce>
          {({ ref, inView }) => {
            return (
              <motion.div
                variants={blockVariants}
                initial="hidden"
                ref={ref}
                animate={inView ? "visible" : "hidden"}
                className=" col-span-3 text-justify  prose xl:prose-lg"
              >
                <p className="tracking-wide text-center font-slab text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-blue-600">
                  Historical Chart
                </p>
                <p>
                  In 2021, the Bank reflected $25.2 Million (9.2%) in loan
                  portfolio growth, excluding SBA PPP loans, with the primary
                  growth areas being Owner Occupied Commercial Real Estate $13.9
                  Million (13.7%), Non-Owner Occupied Commercial Real Estate
                  $14.5 Million (14.5%), and Multifamily Housing $11.4 Million.
                  Over the five year history shown, the Bank has grown the loan
                  portfolio by 105% or a Compound Annual Growth Rate of 15.4%.
                  Additionally, during these five years, the Bank’s focus on
                  growing small business relationships by focusing on Owner
                  Occupied Commercial Real Estate, has resulted in this portion
                  of the loan portfolio growing by 138.7% or a Compound Annual
                  Growth Rate of 19%.
                </p>
              </motion.div>
            );
          }}
        </InView>
      </div>
    </Section>
  );
};

export default AssetQualityHighlights;
