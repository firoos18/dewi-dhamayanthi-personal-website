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
        <p className="mt-4 ext-lg sm:text-xl">
          A dedicated <b>Virtual Assistant</b> specializing in{" "}
          <b>financial management</b> and <b>project coordination</b>. I help
          business owners and entrepreneurs streamline their operations,
          optimize their financial processes, and successfully manage their
          projects, allowing them to focus on what they do best, growing their
          businesses.
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
        <p className="absolute top-0 w-60 right-0 text-end mr-4 font-semibold text-base sm:text-lg">
          My goal is to provide you with reliable support that drives efficiency
          and productivity.
        </p>
      </div>
    </div>
  );
};

export default Intro;
