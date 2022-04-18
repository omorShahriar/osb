import { motion } from "framer-motion";
import Section from "../Section";
import SectionTitle from "../SectionTitle";

const CoreValues = () => {
  return (
    <Section>
      <SectionTitle>CORE VALUES</SectionTitle>

      <div className=" grid grid-cols-12 items-center   mt-24 ">
        <div className="col-span-5   text-right">
          <h2 className="font-slab text-3xl tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-emerald-600 to-blue-600 ">
            Our Vision
          </h2>
          <p className="mb-12 text-gray-800">
            <em className="block mb-1 text-slate-700">
              What are we trying to accomplish?
            </em>
            To be{" "}
            <strong className="text-xl  text-transparent bg-clip-text bg-gradient-to-bl from-emerald-600 to-blue-600 ">
              {" "}
              essential
            </strong>{" "}
            to the lives, businesses and communities we serve.
          </p>
        </div>
        <div className=" col-span-2 w-1 mx-auto  ">
          <svg
            width="2"
            height="260"
            viewBox="0 0 2 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="2"
              height="260"
              rx="1"
              fill="url(#paint0_linear_151_9)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_151_9"
                x1="1"
                y1="0"
                x2="1"
                y2="260"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#51CF66" stopOpacity="0.25" />
                <stop offset="0.34375" stopColor="#51CF66" />
                <stop offset="0.630208" stopColor="#339AF0" />
                <stop offset="1" stopColor="#339AF0" stopOpacity="0.25" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className=" col-span-5  ">
          {" "}
          <h2 className="font-slab text-3xl tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-emerald-600 to-blue-600 ">
            Our Mission
          </h2>
          <p className="mb-12 text-gray-800">
            <em className="block mb-1 text-slate-700">
              How will we accomplish our vision?
            </em>
            Create{" "}
            <strong className="text-xl  text-transparent bg-clip-text bg-gradient-to-bl from-emerald-600 to-blue-600 ">
              remarkable
            </strong>{" "}
            experiences that significantly mark the lives of others.
          </p>
        </div>
      </div>
      <div className=" mt-20 ">
        <div className="  p-8 rounded-md border-2 border-slate-200">
          <h2 className=" font-slab text-3xl tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-tr from-emerald-600 to-blue-600 ">
            Our Values
          </h2>

          <p className="mb-12 text-gray-800">
            <em className="block mb-1 text-slate-700">
              What is most important to us as we strive to accomplish our
              vision?
            </em>
            We value . . .{" "}
            <strong className="text-xl  text-transparent bg-clip-text bg-gradient-to-bl from-emerald-600 to-blue-600 ">
              SUCCESS
            </strong>
          </p>
          <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-12  gap-x-6  items-center">
              <strong className="text-2xl   col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600 underline-offset-4 text-emerald-600 ">
                  S
                </span>
                tewardship
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                The privilege of wisely shepherding the resources entrusted to
                us
              </p>
            </div>
            <div className="grid grid-cols-12  gap-x-6 items-center">
              <strong className="text-2xl  col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600 underline-offset-4 text-emerald-600 ">
                  U
                </span>
                nity
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                Believing the best in, Expecting the best from, Seeking the best
                for, and Telling the best about each other
              </p>
            </div>
            <div className="grid grid-cols-12  gap-x-6 items-center">
              <strong className="text-2xl  col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600 underline-offset-4 text-emerald-600 ">
                  C
                </span>
                ollaboration
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                A culture of teamwork
              </p>
            </div>
            <div className="grid grid-cols-12  gap-x-6 items-center">
              <strong className="text-2xl  col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600  underline-offset-4 text-emerald-600 ">
                  C
                </span>
                ommunity
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                Investing in the communities we serve through active engagement
                and local decision-making
              </p>
            </div>
            <div className="grid grid-cols-12  gap-x-6 items-center">
              <strong className="text-2xl  col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600 underline-offset-4 text-emerald-600">
                  E
                </span>
                xcellence
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                {" "}
                Exceptional performance with a long-term perspective
              </p>
            </div>
            <div className="grid grid-cols-12  gap-x-6 items-center">
              <strong className="text-2xl  col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600 underline-offset-4 text-emerald-600">
                  S
                </span>
                ervice
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                Consistently creating remarkable experiences for our customers
              </p>
            </div>
            <div className="grid grid-cols-12  gap-x-6 items-center">
              <strong className="text-2xl  col-span-2">
                <span className=" underline decoration-wavy decoration-emerald-600 underline-offset-4 text-emerald-600 ">
                  S
                </span>
                olutions
              </strong>
              <p className="col-span-8 text-sm text-gray-700">
                Empowering our team members to deliver results
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CoreValues;
