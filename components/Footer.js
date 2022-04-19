const Footer = () => {
  return (
    <div className="lg:mt-24 mt-20 relative">
      <div
        className="inline-block relative w-full align-middle overflow-clip"
        style={{ paddingBottom: "100%" }}
      >
        <svg
          width="1536"
          height="92"
          viewBox="0 0 2452 92"
          preserveAspectRatio="xMinYMin meet"
          className=" inline-block absolute top-0 left-0 "
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 45.625C24.3333 -6.375 47.6667 -6.375 71 45.625C94.2212 97.125 117.554 97.125 141 45.625C164.333 -5.875 187.667 -5.875 211 45.625C234.447 97.625 257.78 97.625 281 45.625C304.333 -6.375 327.667 -6.375 351 45.625C374.894 100.125 398.228 100.125 421 45.625C444.333 -8.875 467.667 -8.875 491 45.625C513.905 98.125 537.239 98.125 561 45.625C584.333 -6.875 607.667 -6.875 631 45.625C655.889 105.125 679.222 105.125 701 45.625C724.333 -13.875 747.667 -13.875 771 45.625C793.451 100.625 816.784 100.625 841 45.625C864.333 -9.375 887.667 -9.375 911 45.625C934.015 99.125 957.348 99.125 981 45.625C1004.33 -7.875 1027.67 -7.875 1051 45.625C1074.22 98.625 1097.56 98.625 1121 45.625C1144.33 -7.375 1167.67 -7.375 1191 45.625C1214.66 100.125 1238 100.125 1261 45.625C1284.33 -8.875 1307.67 -8.875 1331 45.625C1353.69 97.125 1377.02 97.125 1401 45.625C1424.33 -5.875 1447.67 -5.875 1471 45.625C1495.58 102.625 1518.91 102.625 1541 45.625C1564.33 -11.375 1587.67 -11.375 1611 45.625C1633.21 97.125 1656.54 97.125 1681 45.625C1704.33 -5.875 1727.67 -5.875 1751 45.625C1775.35 101.625 1798.69 101.625 1821 45.625C1844.33 -10.375 1867.67 -10.375 1891 45.625C1913.81 99.125 1937.15 99.125 1961 45.625C1984.33 -7.875 2007.67 -7.875 2031 45.625C2055.42 104.125 2078.76 104.125 2101 45.625C2124.33 -12.875 2147.67 -12.875 2171 45.625C2194.23 103.625 2217.57 103.625 2241 45.625C2264.33 -12.375 2287.67 -12.375 2311 45.625C2332.93 96.625 2356.26 96.625 2381 45.625C2404.33 -5.375 2427.67 -5.375 2451 45.625"
            stroke="#4C75F2"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="max-w-[800px] mx-auto ">
        <video
          autoPlay="autoplay"
          loop="loop"
          muted
          playsInline
          onContextMenu={(e) => e.preventDefault()}
          preload="auto"
        >
          <source
            src="/report/videos/animated-logo-compressed.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Footer;
