import Image from "next/image";
import CoverItems from "./cover-items";

const Cover = () => {
  return (
    <div className="min-h-screen w-full px-6 pb-6 pt-8">
      <div className="relative h-full min-h-[880px] w-full">
        <Image
          src={"/cover-bg.png"}
          alt="Background"
          fill
          priority
          style={{ borderRadius: "16px" }}
        />
        <div className="absolute z-10 mt-20 flex h-1/2 w-full flex-col items-center">
          <div className="flex h-fit flex-col items-center space-y-4">
            <p className="relative bg-cover-title-gradient bg-clip-text text-6xl font-semibold leading-tight text-transparent">
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
            <p className="w-1/4 pl-14 text-3xl font-semibold">Are You...</p>
            <div className="flex h-full w-3/4 flex-row space-x-6 pr-5">
              <CoverItems
                desc="Small business owners struggling with financial planning and cash flow
          management?"
                image="/small-bussiness.png"
              />
              <CoverItems
                desc="Moms transitioning from corporate jobs to independent work?"
                image="/mom-transitioning.png"
              />
              <CoverItems
                desc="Mompreneurs running service-based businesses?"
                image="/mompreneurs.png"
              />
            </div>
          </div>
          <div className="mt-5 flex h-full w-full flex-row items-end justify-end pr-24">
            <div className="flex w-2/3 flex-row justify-end space-x-6">
              <CoverItems
                desc="Female solopreneurs looking for financial guidance to scale their bussinesses?"
                image="/female-solopreneurs.png"
              />
              <CoverItems
                desc="Women who want to move from freelancing to running a structured bussiness?"
                image="/woman-who.png"
              />
            </div>
          </div>
        </div>
        <div className="absolute -left-5 bottom-0 z-20 h-1/2 w-1/3">
          <Image
            src={"/figure.png"}
            alt="Figure"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
