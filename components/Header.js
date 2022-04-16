import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="  flex items-center py-4 justify-center  ">
        <div className=" w-[147px] ">
          <Image
            width={147}
            height={65.13}
            layout="responsive"
            src="/report/images/logo.png"
            alt="report logo"
            priority
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
