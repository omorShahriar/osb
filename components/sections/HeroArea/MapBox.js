import Image from "next/image";

import {
  ToolTipBoxG,
  ToolTipBoxO,
  ToolTipBoxM,
  ToolTipBoxB,
  ToolTipBoxBC,
  ToolTipBoxMO,
} from "./ToolTipBox";

const MapBox = () => {
  return (
    <div className=" map-box relative col-span-6">
      <ToolTipBoxG location="Gwinnett" />
      <ToolTipBoxO location="Oconne" />
      <ToolTipBoxM location="Macon" />
      <ToolTipBoxB location="Bogart" />
      <ToolTipBoxBC location="Butler's Crossing" />
      <ToolTipBoxMO location="Main Office" />
      {/*
     
      <ToolTipBox
        z={10}
        top={8.25}
        right={23.75}
        location="Butler's Crossing"
      />
      <ToolTipBox z={10} top={10} right={20.5} location="Main Office" /> */}

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
