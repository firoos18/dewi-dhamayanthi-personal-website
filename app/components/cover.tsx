import Image from "next/image";

const Cover = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4">
      <p className="bg-gradient-to-r from-[#0B414B] to-[#1A99B1] bg-clip-text text-transparent text-4xl sm:text-5xl font-semibold w-[400px] text-center">
        Empowering Your Success.
      </p>
      <p className="w-[310px] text-center mt-2 text-base sm:text-lg text-black">
        Achieve Financial Goals and Build Your Dream Business
      </p>
      <div className="flex flex-row w-full mt-8 justify-center">
        <button className="flex flex-row rounded-full bg-primary text-secondary font-semibold py-4 px-5 justify-center items-center">
          <Image
            src={"/email-push.png"}
            alt="email-placeholder"
            width={24}
            height={24}
          />
          <p className="ml-3 text-xs sm:text-base">Contact Me</p>
        </button>
        <div className="mx-4" />
        <button className="flex flex-row rounded-full bg-primary text-secondary font-semibold py-4 px-5 justify-center items-center">
          <Image
            src={"/phone-telephone.png"}
            alt="email-placeholder"
            width={24}
            height={24}
          />
          <p className="ml-3 text-xs sm:text-base">Book a Call</p>
        </button>
      </div>
    </div>
  );
};

export default Cover;
