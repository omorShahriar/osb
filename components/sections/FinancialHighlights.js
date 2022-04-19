import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import ExecutiveGrid from "../ExecutiveGrid";
import {
  IncomeChartBox,
  BookValueChartBox,
  TotalAssetsChartBox,
  TotalLoansChartBox,
  TotalDepositsChartBox,
} from "./FinancialHighlights/ChartBox";

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
      <div className="flex md:mt-24 mt-20 md:gap-x-20 md:gap-y-16 gap-y-12 flex-wrap justify-center  ">
        <div className=" w-full flex justify-center md:gap-x-20 md:gap-y-0 gap-y-6 flex-wrap items-center ">
          <IncomeChartBox />
          <div className="flex flex-col ">
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200 ">
                2014
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $1,563,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2015
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $1,945,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2016
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $2,515,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2017
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                {" "}
                $1,920,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2018
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                {" "}
                $1,737,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2019
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                {" "}
                $3,759,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2020
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                {" "}
                $1,889,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2021
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                {" "}
                $3,000,000
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full flex justify-center md:gap-x-20 md:gap-y-0 gap-y-6 flex-wrap items-center ">
          <BookValueChartBox />
          <div className="flex flex-col min-w-[355px] ">
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200 ">
                2014
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $29.67
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2015
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $31.48
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2016
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $31.88
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2017
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $34.07
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2018
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $34.10
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2019
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $39.82
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2020
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $42.56
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2021
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $43.88
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center md:gap-x-20 md:gap-y-0 gap-y-6 flex-wrap items-center ">
          <TotalAssetsChartBox />
          <div className="flex flex-col  ">
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2015
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $298,588,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2016
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $335,397,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2017
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $355,028,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2018
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $349,811,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2019
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $399,521,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2020
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $494,536,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2021
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $571,142,000
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center md:gap-x-20 md:gap-y-0 gap-y-6 flex-wrap items-center">
          <TotalLoansChartBox />
          <div className="flex flex-col  ">
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2014
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $131,739,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2015
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $139,077,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2016
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $146,482,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2017
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $169,235,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2018
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $224,240,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2019
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $253,165,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2020
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $330,034,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2021
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $303,736,000
              </div>
            </div>
          </div>
        </div>
        <div className="  w-full flex justify-center md:gap-x-20 md:gap-y-0 gap-y-6  flex-wrap items-center ">
          <TotalDepositsChartBox />
          <div className="flex flex-col  ">
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2014
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $256,191,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2015
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $269,350,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2016
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $306,560,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2017
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $324,096,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2018
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $318,497,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2019
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $361,523,000
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2020
              </div>
              <div className=" p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                $444,702,063
              </div>
            </div>
            <div className=" grid grid-cols-2  ">
              <div className=" p-2 border-r-2 border-b-2 border-emerald-200">
                2021
              </div>
              <div className="text-center p-2 pl-4 pr-20 border-b-2 border-b-emerald-200 ">
                -
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExecutiveGrid>
        <div className=" col-span-7 ">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.h2
                  variants={blockVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className="md:text-3xl text-xl text-center font-slab tracking-wider text-transparent bg-clip-text bg-gradient-to-tr from-green-500 to-blue-500 mb-20 "
                >
                  Notes from our CFO, Jim McLemore
                </motion.h2>
              );
            }}
          </InView>
          <div className=" prose xl:prose-xl mx-auto ">
            <InView threshold={0.25} triggerOnce>
              {({ ref, inView }) => {
                return (
                  <motion.div
                    variants={blockVariants}
                    initial="hidden"
                    ref={ref}
                    animate={inView ? "visible" : "hidden"}
                    className="block mb-20 relative text-justify"
                  >
                    <div className="relative md:float-right w-[225px] md:m-10 mx-auto  ">
                      <ImageBgBorder x={15} y={-15} />
                      <Image
                        alt="CFO's image"
                        src={cfo}
                        placeholder="blur"
                        width="852px"
                        height="1280px"
                        layout="responsive"
                        className="  rounded-md  "
                      />
                    </div>
                    <p className="mt-16 md:mt-0 font-semibold ">
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
                    className="block text-justify"
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
      </ExecutiveGrid>
    </Section>
  );
};

export default FinancialHighlights;
