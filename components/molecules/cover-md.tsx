import Image from "next/image";
import CoverItems from "../atoms/cover-items";

const CoverMedium = () => {
  return (
    <div className="min-h-screen w-full px-4 pt-4">
      <div className="relative min-h-[1080px] w-full">
        <Image
          src="/cover-bg-small.png"
          fill
          priority
          alt="Background"
          className="rounded-lg object-cover"
        />
        <div className="absolute z-10 flex h-full w-full flex-col pb-6">
          <div className="mt-40 flex h-1/6 w-full flex-col items-center space-y-2">
            <p className="bg-cover-title-gradient bg-clip-text text-center text-5xl font-semibold leading-tight text-transparent">
              Empowering Your Success.
            </p>
            <p className="w-[263px] text-center text-lg font-normal leading-tight text-black">
              Achieve Financial Goals and Build Your Dream Business
            </p>
          </div>
          <div className="mt-20 flex h-5/6 w-full flex-col items-center">
            <p className="h-fit w-full text-center text-lg font-semibold">
              Are You...
            </p>
            <div className="grid h-fit w-full grid-cols-2 items-start justify-start gap-4 p-4">
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
              <CoverItems
                desc="Female solopreneurs looking for financial guidance to scale their businesses?"
                image="/female-solopreneurs.png"
              />
              <CoverItems
                desc="Women who want to move from freelancing to running a structured business?"
                image="/woman-who.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverMedium;
