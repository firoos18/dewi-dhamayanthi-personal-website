import Image from "next/image";

const Cover = () => {
  return (
    <div className="lg:relative flex flex-col items-center justify-center w-full h-screen px-4">
      <div className="absolute hidden lg:block bottom-0 left-0 w-full h-2/3">
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
          <p className="bg-gradient-to-r from-[#0B414B] to-[#1A99B1] bg-clip-text text-transparent text-5xl sm:text-6xl lg:text-7xl font-semibold w-[400px] lg:w-[1000px] text-center lg:h-20">
            Empowering Your Success.
          </p>
          <p className="w-[310px] lg:w-[550px] text-center mt-4 lg:mt-4 text-lg sm:text-xl lg:text-2xl text-black">
            Achieve Financial Goals and Build Your Dream Business
          </p>
          <p className="mt-10 lg:text-2xl font-semibold">Are You...</p>
          <div className="relative flex flex-col">
            <Image
              width={300}
              height={450}
              alt="figure"
              src={"/figure.png"}
              className="relative z-10"
            />
            <div className="absolute z-10 w-full flex flex-col items-center">
              <div className="absolute left-[-300px] top-[20px]">
                <Image
                  width={350}
                  height={80}
                  alt="chat-bubbles-1"
                  src={"/small-bussiness.png"}
                />
              </div>
              <div className="absolute left-[-400px] top-[150px]">
                <Image
                  width={220}
                  height={50}
                  alt="chat-bubbles-2"
                  src={"/mompreneurs.png"}
                />
              </div>
              <div className="absolute left-[-200px] top-[330px]">
                <Image
                  width={320}
                  height={50}
                  alt="chat-bubbles-3"
                  src={"/female-solopreneurs.png"}
                />
              </div>
              <div className="absolute right-[-400px] top-[100px]">
                <Image
                  width={270}
                  height={50}
                  alt="chat-bubbles-3"
                  src={"/mom-transitioning.png"}
                />
              </div>
              <div className="absolute right-[-240px] top-[270px]">
                <Image
                  width={300}
                  height={50}
                  alt="chat-bubbles-3"
                  src={"/women-who.png"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
