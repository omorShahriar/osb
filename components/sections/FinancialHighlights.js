import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ExecutiveGrid from "../ExecutiveGrid";
import {
  IncomeChart,
  BookValueChart,
  AssetChart,
  LoanChart,
  DepositChart,
} from "components/Charts";

//images
import cfo from "public/cfo-dp.jpg";
//animations
import { blockVariants } from "animations/variants";

import { InView } from "react-intersection-observer";
import ImageBgBorder from "components/ImageBgBorder";

const FinancialHighlights = () => {
  return (
    <Section>
      <SectionTitle>Financial Highlights</SectionTitle>
      <div className="grid mt-24 grid-cols-12 gap-x-8 gap-y-16">
        <div className=" flex flex-col gap-12 col-span-5">
          <h2 className=" text-3xl font-semibold text-center">
            Net Income ($Millions)
          </h2>
          <div className=" h-80">
            <IncomeChart />
          </div>
        </div>
        <div className=" flex flex-col gap-12 col-start-7 col-span-5">
          <h2 className=" text-3xl font-semibold text-center">
            Book Value Per Share
          </h2>
          <div className=" h-80">
            <BookValueChart />
          </div>
        </div>
        <div className=" flex flex-col gap-12  col-span-5">
          <h2 className=" text-3xl font-semibold text-center">
            Total Assets ($Millions)
          </h2>
          <div className="h-80">
            <AssetChart />
          </div>
        </div>
        <div className=" flex flex-col gap-12 col-start-7 col-span-5">
          <h2 className=" text-3xl font-semibold text-center">
            Total Loans ($Millions)
          </h2>
          <div className=" h-80">
            <LoanChart />
          </div>
        </div>
        <div className=" flex flex-col gap-12 col-start-4 col-span-5">
          <h2 className=" text-3xl font-semibold text-center">
            Total Deposits ($Millions)
          </h2>
          <div className=" h-80">
            <DepositChart />
          </div>
        </div>
      </div>
      <ExecutiveGrid>
        <div className=" col-span-4 ">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.h2
                  variants={blockVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className="text-3xl text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-20 "
                >
                  Notes from our CFO, Jim McLemore
                </motion.h2>
              );
            }}
          </InView>
          <div className=" prose xl:prose-lg ">
            <InView threshold={0.25} triggerOnce>
              {({ ref, inView }) => {
                return (
                  <motion.div
                    variants={blockVariants}
                    initial="hidden"
                    ref={ref}
                    animate={inView ? "visible" : "hidden"}
                    className="block mb-20"
                  >
                    {" "}
                    <p className=" font-semibold ">
                      BALANCE SHEET AND CREDIT QUALITY
                    </p>
                    <p>
                      The bank experienced another year of strong growth in
                      2021. Total Assets grew $77 million, or 15 percent. This
                      strong asset growth was driven by growth in deposits of
                      $75 million, or 17%. Like much of the banking industry, a
                      significant amount of our growth was due to the strong
                      inflow of funds from government stimulus money, as well as
                      the higher savings rates of consumers and businesses. Low
                      cost demand deposits grew over $41 million. In 2021, we
                      continued to focus heavily on expanding the deposit
                      relationship of our existing and prospective customers to
                      ensure the bank is their primary financial institution.
                    </p>
                    <p>
                      Total loans decreased $26 million or 7 percent. However,
                      excluding the effect of loan pay downs from Paycheck
                      Protection Program (PPP) forgiveness payments during 2021,
                      loans increased $29.9 million, or 9.4%.
                    </p>
                    <p>
                      Our credit quality remains strong. Our owner-occupied
                      commercial real estate portfolio, which represents one of
                      the safer segments of our loan portfolio, continued to
                      grow in 2021. Past dues remained extremely low and were
                      only 0.11% of loan balances at 12/31/21. We were able to
                      reduce the amount of our loan loss provision with $456,000
                      booked in 2021, compared to $1.25 million for 2020. 2020’s
                      loan loss provision reflected potential risks from the
                      COVID-19 virus. For 2021, our loan recoveries, net of loan
                      charge offs were only $29,000.
                    </p>
                    <p>
                      As of December 31, 2021, the most recent notification from
                      the Federal Deposit Insurance Corporation categorized the
                      Bank as ”Well Capitalized” under the regulatory framework
                      for Prompt Corrective Action.
                    </p>
                  </motion.div>
                );
              }}
            </InView>
            <InView threshold={0.25} triggerOnce>
              {({ ref, inView }) => {
                return (
                  <motion.div
                    variants={blockVariants}
                    initial="hidden"
                    ref={ref}
                    animate={inView ? "visible" : "hidden"}
                    className="block"
                  >
                    <p className=" font-semibold ">2021 Results</p>
                    <p>
                      Oconee State Bank and Oconee Financial Corporation’s
                      results for 2021 reflect a significant improvement over
                      2020 and reflect the dedication and quality work of our
                      team. Despite historically low net interest margins, we
                      are pleased to report 2021 net income of $3.0 million
                      versus $1.9 million in 2020. On a pre-tax basis, 2021
                      includes PPP fee income of $2.2 million vs $1.0 million of
                      PPP fee income recognized in 2020.
                    </p>
                    <p>
                      Oconee State Bank provided $56 million in PPP funding to
                      638 customers in 2020 and another $18 million in funding
                      to 232 customers in 2021. As of 12/31/21, the bank has
                      received $69.7 million from the U.S. Small Business
                      Administration for loans forgiven. These PPP loans
                      provided cash flow assistance to businesses who were
                      affected by economic conditions as a result of COVID-19.
                    </p>
                    <p>
                      Oconee Financial Corporation paid a dividend of $0.65 per
                      share in April of 2021, an increase of 8 percent over the
                      prior year dividend. Our book value per share increased
                      from $42.56 to $43.88, an increase of 3 percent. We are
                      pleased to report that the Board of Directors voted to
                      increase the 2022 annual dividend to $0.70 per share, an
                      increase of 8 percent. This dividend increase mirrors our
                      growth and overall financial strength.
                    </p>
                    <p>
                      Oconee Financial Corporation’s stock, which trades on the
                      OTCQX under the ticker symbol “OSBK”, increased from
                      $36.25 per share at year-end 2020 to $44.00 per share at
                      year-end 2021. This represents an increase of 21 percent.
                    </p>
                  </motion.div>
                );
              }}
            </InView>
          </div>
        </div>

        <div className=" col-start-6 col-span-2  ">
          <div className="relative">
            <ImageBgBorder x={15} y={-15} />
            <Image
              alt="CFO's image"
              src={cfo}
              placeholder="blur"
              width="852px"
              height="1280px"
              layout="responsive"
              className="  rounded-md "
            />
          </div>
        </div>
      </ExecutiveGrid>
    </Section>
  );
};

export default FinancialHighlights;
