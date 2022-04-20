import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import Section from "../Section";
import SectionTitle from "../SectionTitle";
import Signature from "components/Signature";

//images
import president from "/public/ceo.jpg";

//animation
import { cardGridVariants, cardVariants } from "animations/variants";
import ImageBgBorder from "components/ImageBgBorder";

const PresidentLetter = () => {
  return (
    <Section>
      <SectionTitle>President’s Letter: A Note from Neil</SectionTitle>
      <div className="grid grid-cols-12 md:gap-x-10 md:gap-y-0 gap-y-10 mt-24">
        <div className="  md:col-span-3 col-span-8 md:col-start-1 col-start-3  ">
          <div className="relative">
            <ImageBgBorder />
            <Image
              alt="president's image"
              src={president}
              placeholder="blur"
              width="852px"
              height="1280px"
              layout="responsive"
              className="  rounded-md "
            />
          </div>
        </div>
        <div className="md:col-start-4 md:col-span-9 col-span-12 ">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  ref={ref}
                  variants={cardGridVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className=" md:columns-3  text-justify"
                >
                  <motion.p
                    variants={cardVariants}
                    className=" md:text-base text-sm mb-8 "
                  >
                    As you will see throughout your 2021 Annual Report, we are
                    pleased to share that Oconee State Bank exceeded our
                    strategic goals last year. In doing so, we have continued to
                    strengthen our foundation and position ourselves for
                    continued growth, which will enable us to achieve our
                    ultimate goal of becoming Georgia’s Most Remarkable
                    Community Bank.
                  </motion.p>
                  <motion.p
                    variants={cardVariants}
                    className=" text-center font-semibold md:text-3xl text-lg mb-8 p-4 bg-slate-100 rounded-md "
                  >
                    In order to chart our course to achieve this goal, our team
                    embraces that we must cultivate a remarkable team, foster a
                    remarkable culture, execute a remarkable strategy, in order
                    to continue to produce remarkable value for all
                    stakeholders. When asked recently, “what are the keys to
                    building a stronger bank,” I responded with three essential
                    elements.
                  </motion.p>
                  <motion.p
                    variants={cardVariants}
                    className=" md:text-base text-sm mb-12 "
                  >
                    <span className="block text-osb-green font-semibold  text-left mb-2 md:text-2xl text-xl">
                      Ignite an Unstoppable Culture
                    </span>
                    Every organization has a culture, but not every organization
                    is intently focused on igniting a culture that is
                    remarkable. Here at Oconee State Bank, we strive to create
                    an environment where what is written on the walls (our
                    vision, mission, and values) is lived out in the halls. When
                    the passion, strengths, and talents of our team members
                    align with the same of our organization, this is when the
                    magic happens. My friend, Glen Jackson, Co-Founder of
                    marketing communications agency Jackson Spalding, says
                    “every company should ensure their culture has 5 F’s.”{" "}
                    <em>Fun</em> – a place where team members enjoy working.{" "}
                    <em>Fascination</em> – a place where team members are
                    fascinated by the organization’s mission and strategy for
                    growth. <em>Financial</em> – a place where all stakeholders
                    achieve financial success.
                    <em>Future</em> – a place where team members believe in the
                    company’s future and know they are positively impacted by
                    its growth.
                    <em>Freedom</em> – a place where team members hold each
                    other accountable, while having the autonomy to serve with
                    prudence and excellence. At Oconee State Bank, our team is
                    dedicated to igniting an unstoppable culture, understanding
                    that a remarkable team member experience translates to an
                    equally remarkable experience for our customers,
                    shareholders, industry partners, and the communities we
                    serve.
                  </motion.p>
                  <motion.p
                    variants={cardVariants}
                    className="md:text-base text-sm  mb-12 "
                  >
                    <span className="block text-osb-green font-semibold md:text-2xl text-xl text-left mb-2">
                      Grow Leaders
                    </span>
                    John Maxwell said, “Everything rises and falls on
                    leadership.” Any successful organization has learned how to
                    effectively grow and develop their leaders. Our priority is
                    to pour our time, talent, and resources into cultivating,
                    not only our current leadership team, but our future one as
                    well. We are fortunate to have, and continue to seek,
                    leaders who are <strong>passionate</strong> about their
                    professional and personal development. Leaders who are{" "}
                    <strong>authentic</strong> and genuinely care about our
                    team. Leaders who are <strong>competent</strong> and highly
                    skilled in their role. Leaders with strong work ethic who
                    set <strong>high standards</strong> for themselves, their
                    peers, and relentlessly pursue excellence. Leaders who{" "}
                    <strong>communicate</strong> exceptionally well and leaders
                    with a high degree of{" "}
                    <strong>emotional intelligence</strong>. The cornerstone of
                    any organization lies in the strength of its leaders
                    throughout the company. At Oconee State Bank, we agree with
                    Mr. Maxwell and understand that leadership development is a
                    key component of our strategic growth.
                  </motion.p>

                  <motion.p
                    variants={cardVariants}
                    className=" md:text-base text-sm mb-8 "
                  >
                    <span className=" text-osb-green block font-semibold md:text-2xl text-xl text-left mb-2 ">
                      Execute with Excellence
                    </span>
                    One important trait of any successful company is the ability
                    to effectively execute on a strong strategy. My friend David
                    Salyers, former Vice President of Marketing for Chick-Fil-A,
                    says that “80% of what we do is the same as every other
                    bank. Executing with excellence is doing the 80% really
                    well, while identifying how to differentiate ourselves by
                    doing the additional 20% <strong>radically</strong>{" "}
                    different.” Oconee State Bank is fanatical about inspiring
                    raving fans, by creating remarkable experiences that
                    significantly mark the lives of others.
                  </motion.p>
                  <motion.p
                    variants={cardVariants}
                    className="text-center  font-semibold md:text-3xl text-lg  mb-8 p-4 bg-slate-100 rounded-md "
                  >
                    At OSB, we envision producing an environment where our
                    customers and communities are served by a team, whose
                    passion and purpose is to consistently offer remarkable
                    service and value to others. As we move forward in 2022,
                    with a focus on continued growth and collaboration, I have
                    confidence that, with your support, we will continue to be
                    essential to the lives, businesses, and communities we
                    serve.
                  </motion.p>
                  <motion.p className=" italic font-thin text-2xl text-slate-800 mt-2 mb-4 ">
                    Sincerely,
                  </motion.p>
                  <motion.div variants={cardVariants} className="signature ">
                    <Signature />
                  </motion.div>
                </motion.div>
              );
            }}
          </InView>
        </div>
      </div>
    </Section>
  );
};

export default PresidentLetter;
