import Image from "next/image";

const Cover = () => {
  return (
    <div className="lg:relative flex flex-col items-center justify-center w-full h-screen px-4">
      <div className="absolute bottom-0 left-0 w-full h-2/3">
        <Image
          className="object-fit"
          src={"/cover-lg-bg.png"}
          alt="background"
          fill
          priority
        />
      </div>
      <div className="lg:relative z-10">
        <div className="flex flex-col items-center">
          <p className="bg-gradient-to-r from-[#0B414B] to-[#1A99B1] bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-9xl font-semibold w-[400px] lg:w-[1000px] text-center">
            Empowering Your Success.
          </p>
          <p className="w-[310px] lg:w-[800px] text-center mt-2 lg:mt-4 text-lg sm:text-xl lg:text-4xl text-black">
            Achieve Financial Goals and Build Your Dream Business
          </p>
        </div>
        <div className="flex flex-row w-full mt-8 lg:mt-10 justify-center">
          <button className="flex flex-row rounded-full bg-primary text-secondary font-semibold py-4 px-5 justify-center items-center">
            <Image
              src={"/email-push.png"}
              alt="email-placeholder"
              width={24}
              height={24}
              className="lg:w-8 lg:h-8"
              priority
            />
            <p className="ml-3 text-xs sm:text-base lg:text-xl">Contact Me</p>
          </button>
          <div className="mx-4" />
          <button className="flex flex-row rounded-full bg-primary text-secondary font-semibold py-4 px-5 justify-center items-center">
            <Image
              src={"/phone-telephone.png"}
              alt="email-placeholder"
              width={24}
              height={24}
              className="lg:w-8 lg:h-8"
              priority
            />
            <p className="ml-3 text-xs sm:text-base lg:text-xl">Book a Call</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
