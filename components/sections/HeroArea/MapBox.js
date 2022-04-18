import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ToolTip from "./ToolTip";
import LocationBox from "./LocationBox";
import ToolTipBox from "./ToolTipBox";
const boxVariants = {
  rest: {
    scale: 1,
  },
  moved: {
    scale: 1.5,
    zIndex: 40,
    transitions: {
      type: "tween",
      duration: 1,
      ease: "eastInOut",
    },
  },
};

const MapBox = () => {
  return (
    <div className=" map-box relative col-span-6">
      <ToolTipBox z={10} top={25} left={30} location="Gwinnett" />
      <ToolTipBox z={10} top={23} left={45} location="Oconne" />
      <ToolTipBox z={10} top={48} left={42} location="Macon" />
      <ToolTipBox z={10} top={7} right={28} location="Bogart" />
      <ToolTipBox
        z={10}
        top={8.25}
        right={23.75}
        location="Butler's Crossing"
      />
      <ToolTipBox z={10} top={10} right={20.5} location="Main Office" />

      <Image
        alt="map image"
        src="/report/svg/map.svg"
        layout="responsive"
        priority
        width={100}
        height={109}
      />
    </div>
  );
};

export default MapBox;
