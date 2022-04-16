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
      <div className="grid grid-cols-12 gap-x-10 mt-24">
        <div className="  col-span-3  ">
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
        <div className="col-start-4 col-span-8  ">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  ref={ref}
                  variants={cardGridVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className=" columns-3 text-justify"
                >
                  {" "}
                  <motion.p
                    variants={cardVariants}
                    className=" text-center font-semibold text-3xl mb-8 p-4 bg-slate-100 rounded-md "
                  >
                    A few days ago, someone asked me, “What are the keys to
                    building a stronger bank?” My answer was these 3 essential
                    elements:
                  </motion.p>
                  <motion.p variants={cardVariants} className="  mb-12 ">
                    <div className=" text-osb-green font-semibold text-2xl text-left ">
                      Grow Leaders
                    </div>
                    John Maxwell said, “Everything rises and falls on
                    leadership.” Any successful organization has figured out how
                    to grow and develop leaders throughout the entire
                    organization. Our number one priority is to pour as many
                    resources as possible into growing our current leaders and
                    our next generation of leaders. Leaders who are
                    <strong> passionate </strong>
                    about learning and growing, leaders who are
                    <strong> authentic </strong> and genuinely care about their
                    team, leaders who are technically
                    <strong> competent </strong>, leaders who set{" "}
                    <strong> high standards </strong>
                    for themselves and others and pursue excellence, leaders who{" "}
                    <strong>communicate </strong> well, and leaders with a high
                    degree of <strong> emotional intelligence </strong>. The
                    cornerstone of any organization lies in the strength of its
                    leaders from the bottom to the top. At Oconee State Bank, we
                    are fanatical about growing and developing leaders.
                  </motion.p>
                  <motion.p variants={cardVariants} className="  mb-12 ">
                    <div className=" text-osb-green font-semibold text-2xl text-left ">
                      Ignite an Unstoppable Culture
                    </div>
                    Every organization has a culture, but not every organization
                    is laser beam focused on intentionally creating a culture
                    that is remarkable. We diligently work to create an
                    environment where an unstoppable culture ignites. This means
                    we strive to create an environment where what’s on the walls
                    (our vision, mission and values) are lived in the halls.
                    When team members are attracted to our values and hold each
                    other accountable for living those values, magic happens. A
                    culture of excellence ignites and permeates throughout the
                    entire organization. My friend, Glen Jackson, says that
                    every company should ensure their culture has 5 F’s.{" "}
                    <em> Fun </em> – A place where team members enjoy working
                    and have a good time. <em> Fascination </em> – A place where
                    team members are fascinated by the organization’s mission
                    and where it is headed. <em> Financial </em> – A place where
                    the team members win financially when the company wins
                    financially. <em> Future </em> – A place where team members
                    feel the company has strong future growth and where they can
                    grow as the company grows. <em> Freedom </em> – A place
                    where team members are held accountable, but have autonomy
                    and are not micromanaged. At Oconee State Bank, we are
                    fanatical about igniting a culture that is intentional and
                    unstoppable and where team members thrive.
                  </motion.p>
                  <motion.p variants={cardVariants} className=" mb-8 ">
                    <span className=" text-osb-green block font-semibold text-2xl text-left ">
                      Execute with Excellence
                    </span>
                    Great companies develop a great strategy and execute it with
                    excellence. There is no place for mediocrity. My friend,
                    David Salyers, says that 80% of what we do is the same as
                    every other bank. Executing with excellence is doing this
                    80% really well, but figuring out how to differentiate
                    ourselves by doing the additional 20%
                    <strong> radically</strong> different than our competitors.
                    We want the 20% to be what makes us uniquely different and
                    sets us apart from the rest. At Oconee State Bank, we are
                    fanatical about creating raving fans by offering a high
                    level of customer service and wowing our customers by truly
                    going the second mile!
                  </motion.p>
                  <motion.p
                    variants={cardVariants}
                    className="text-center  font-semibold text-3xl  mb-8 p-4 bg-slate-100 rounded-md "
                  >
                    At OSB, we envision a banking world where our customers and
                    community are served by a team whose passion and purpose is
                    to create remarkable experiences through service to others.
                    As we move forward into 2022 with a focus on continued
                    growth and collaboration, I have confidence that together,
                    we’ll get there.
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
