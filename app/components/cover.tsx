import Image from "next/image";
import CoverItems from "./cover-items";

const Cover = () => {
  return (
    <div className="h-[880px] w-full px-6 pb-6 pt-8">
      <div className="relative h-full w-full">
        <Image
          src={"/cover-bg.png"}
          alt="Background"
          fill
          priority
          style={{ borderRadius: "16px" }}
        />
        <div className="absolute z-10 mt-20 flex h-full w-full flex-col items-center">
          <div className="flex h-fit flex-col items-center space-y-4">
            <p className="bg-cover-title-gradient relative bg-clip-text text-6xl font-semibold leading-tight text-transparent">
              Empowering Your Success.
              <Image
                src={"/highlight.png"}
                alt="Highlight"
                width={35}
                height={38}
                className="absolute -right-2 -top-1"
              />
            </p>
            <p className="text-2xl font-normal leading-tight text-black">
              Achieve Financial Goals and Build Your Dream Business
            </p>
          </div>
          <div className="mt-20 flex h-fit w-full flex-row items-start">
            <p className="w-1/6 pl-14 text-3xl font-semibold">Are You...</p>
            <div className="flex w-5/6 flex-row space-x-6 pr-5">
              <CoverItems
                desc="Small business owners struggling with financial planning and cash flow
          management ?"
                image="/small-bussiness.png"
              />
              <CoverItems
                desc="Moms transitioning from corporate jobs to independent work ?"
                image="/mom-transitioning.png"
              />
              <CoverItems
                desc="Small business owners struggling with financial planning and cash flow
          management ?"
                image="/small-bussiness.png"
              />
            </div>
          </div>
          <div className="mt-5 flex h-fit w-full flex-row justify-end space-x-6 pr-32">
            <CoverItems
              desc="Small business owners struggling with financial planning and cash flow
          management ?"
              image="/small-bussiness.png"
            />
            <CoverItems
              desc="Moms transitioning from corporate jobs to independent work ?"
              image="/mom-transitioning.png"
            />
          </div>
        </div>
        <Image
          src={"/figure.png"}
          alt="Figure"
          width={380}
          height={550}
          className="absolute bottom-0 z-20"
        />
      </div>
    </div>
  );
};

export default Cover;
