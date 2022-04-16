import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

//animation
const listBoxVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
const listVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const blockBoxVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.75,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

import { InView } from "react-intersection-observer";

const CoreValues = () => {
  return (
    <Section>
      <SectionTitle>CORE VALUES</SectionTitle>
      <div className="grid grid-cols-8 gap-10 mt-24 items-center ">
        <div className=" col-span-4 ">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={listBoxVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className="flex flex-col gap-y-10 "
                >
                  <motion.div
                    variants={listVariants}
                    className=" p-8 border-2 border-slate-200 rounded-md "
                  >
                    <div className="prose xl:prose-lg">
                      {" "}
                      <h2>Our Vision</h2>
                      <p>
                        <em>What are we trying to accomplish?</em>
                        <br />
                        To be <strong> essential</strong> to the lives,
                        businesses and communities we serve.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={listVariants}
                    className=" p-8 border-2 border-slate-200 rounded-md "
                  >
                    <div className="prose xl:prose-lg">
                      {" "}
                      <h2>Our Mission</h2>
                      <p>
                        <em>How will we accomplish our vision?</em>
                        <br />
                        Create <strong>remarkable</strong> experiences that
                        significantly mark the lives of others.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            }}
          </InView>
        </div>
        <div className="col-span-4 prose xl:prose-lg">
          <InView threshold={0.25} triggerOnce>
            {({ ref, inView }) => {
              return (
                <motion.div
                  variants={blockBoxVariants}
                  initial="hidden"
                  ref={ref}
                  animate={inView ? "visible" : "hidden"}
                  className="  p-8 rounded-md border-2 border-slate-200"
                >
                  <h2>Our Values</h2>

                  <p>
                    <em>
                      What is most important to us as we strive to accomplish
                      our vision?
                    </em>
                    <br />
                    We value . . . <strong>SUCCESS</strong>
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">S</span>
                      tewardship
                    </strong>{" "}
                    – The privilege of wisely shepherding the resources
                    entrusted to us
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">U</span>
                      nity
                    </strong>{" "}
                    – Believing the best in, Expecting the best from, Seeking
                    the best for, and Telling the best about each other
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">C</span>
                      ollaboration
                    </strong>{" "}
                    – A culture of teamwork
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">C</span>
                      ommunity
                    </strong>
                    – Investing in the communities we serve through active
                    engagement and local decision-making
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">E</span>
                      xcellence
                    </strong>
                    – Exceptional performance with a long-term perspective
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">S</span>
                      ervice
                    </strong>
                    – Consistently creating remarkable experiences for our
                    customers
                  </p>
                  <p>
                    <strong>
                      <span className=" underline underline-offset-4 ">S</span>
                      olutions
                    </strong>
                    – Empowering our team members to deliver results
                  </p>
                </motion.div>
              );
            }}
          </InView>
        </div>
      </div>
    </Section>
  );
};

export default CoreValues;
