import MapBox from "components/sections/HeroArea/MapBox";
import HeroTitle from "./HeroArea/HeroTitle";

const HeroArea = () => {
  return (
    <div className="grid grid-cols-12 lg:gap-x-20 gap-y-20 lg:gap-y-0 mt-12 items-center">
      <MapBox />
      <HeroTitle />
    </div>
  );
};

export default HeroArea;
