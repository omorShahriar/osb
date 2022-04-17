import Image from "next/image";
const MapBox = () => {
  return (
    <div className=" map-box col-span-6">
      <Image
        alt="map image"
        src="/report/svg/map.svg"
        layout="responsive"
        width={100}
        height={109}
      />
    </div>
  );
};

export default MapBox;
