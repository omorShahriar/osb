const ExecutiveGrid = ({ children }) => {
  return (
    <div className=" grid grid-cols-7 md:gap-x-[50px] md:mt-40 mt-32 ">
      {children}
    </div>
  );
};

export default ExecutiveGrid;
