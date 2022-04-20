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
    <div className=" map-box relative lg:col-span-6 col-span-12">
      <ToolTipBoxG location="Gwinnett" />
      <ToolTipBoxO location="Athens" />
      <ToolTipBoxM location="Macon" />
      <ToolTipBoxB location="Oconnee" />
      <ToolTipBoxBC location="Oconnee" />
      <ToolTipBoxMO location="Oconnee" />
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
