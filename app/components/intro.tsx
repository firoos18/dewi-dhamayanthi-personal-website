import Image from "next/image";

const Intro = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen justify-end">
      <Image
        className="absolute inset-0 object-cover"
        src={"/intro-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <div className="px-4 relative z-10">
        <p className="text-2xl sm:text-4xl w-[220px] font-semibold">
          Hi! I’m Dewi Dhamayanthi.
        </p>
        <p className="mt-4 text-base sm:text-xl">
          A <b>Finance</b> and <b>Business Expert</b> specializing in{" "}
          <b>financial management</b> and <b>project coordination</b>. I help
          entrepreneurs streamline operations, optimize finances, and manage
          projects, so they can focus on growing their businesses.
        </p>
      </div>
      <div className="relative mt-24">
        <div className="w-2/3 sm:w-1/2 md:w-3/5 lg:w-3/6">
          <Image
            src={"/intro.png"}
            alt="Potrait Picture"
            layout="responsive"
            width={280}
            height={320}
            className="relative object-cover"
          />
        </div>
        <p className="absolute top-0 w-64 right-0 text-end mr-4 font-semibold text-base sm:text-lg">
          My goal is to provide you with reliable support that drive growth and
          achieve <br /> financial goals.
        </p>
      </div>
    </div>
  );
};

export default Intro;
