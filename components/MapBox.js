import Image from "next/image";

const MapBox = () => {
  return (
    <div className=" map-box flex  gap-8 p-16 justify-center">
      <div className="  w-[376px] rounded-lg overflow-hidden ">
        <Image
          alt="map-1"
          src="/report/georgia-map.jpg"
          layout="responsive"
          width="376px"
          height="500px"
        />
      </div>
      <div className=" w-[500px] rounded-lg overflow-hidden ">
        <Image
          alt="map-2"
          src="/report/pin-location.jpg"
          layout="responsive"
          width="499px"
          height="500px"
        />
      </div>
    </div>
  );
};

export default MapBox;
