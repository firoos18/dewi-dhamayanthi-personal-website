import Image from "next/image";

const Intro = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen justify-end">
      <Image
        className="absolute block lg:hidden inset-0 object-cover"
        src={"/intro-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <Image
        className="absolute hidden lg:block inset-0 object-cover"
        src={"/intro-lg-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <div className="px-4 lg:px-20 lg:mt-24 relative z-10 flex flex-col">
        <p className="text-2xl sm:text-4xl lg:text-5xl w-[220px] lg:w-[440px] font-semibold">
          Hi! I’m Dewi.
        </p>
        <p className="mt-4 text-base sm:text-xl lg:text-2xl lg:leading-relaxed lg:mt-12">
          With <b>over 20 years</b> of experience in finance and accounting, I
          specialize in helping <b>mompreneurs</b> with service-based businesses
          take control of their finances, build sustainable income, and achieve
          financial confidence. 
        </p>
      </div>
      <div className="relative mt-24">
        <div className="w-1/2 sm:w-1/2 md:w-3/5 lg:w-3/6">
          <Image
            src={"/intro.png"}
            alt="Potrait Picture"
            layout="responsive"
            width={280}
            height={320}
            className="relative object-cover"
          />
        </div>
        <p className="absolute top-0 lg:inset-y-1/2 lg:inset-x-2/4 w-64 lg:w-[720px] right-0 text-center mr-4 font-semibold text-base sm:text-lg lg:text-3xl lg:text-start">
          My goal is to provide you with reliable support that drive growth and
          achieve <br /> financial goals.
        </p>
      </div>
    </div>
  );
};

export default Intro;
