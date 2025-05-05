import Image from "next/image";

const Reasons = () => {
  return (
    <div className="relative mt-20 flex min-h-screen w-full flex-col justify-center px-4">
      <Image
        className="absolute inset-0 object-cover"
        src={"/reasons-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <div className="relative z-10 flex flex-col">
        <div className="flex w-full flex-row items-center">
          <p className="text-3xl font-semibold sm:text-4xl">Why Work With Me</p>
          <div className="ml-5 h-[1px] flex-grow bg-black" />
        </div>
        <div className="mt-12 flex h-fit flex-col space-y-4">
          <div className="rounded-[16px] bg-[#F8F7F2] p-4">
            <div className="flex flex-row items-center">
              <Image
                src={"/experienced.png"}
                alt="Experienced Icon"
                width={32}
                height={32}
              />
              <p className="ml-4 text-lg font-semibold sm:text-xl">
                Experienced
              </p>
            </div>
            <p className="mt-4 font-medium text-[#6A6A6A]">
              With a strong background in finance and project management for
              more than <b>20 years</b>, I understand the unique challenges
              business owners face and provide tailored solutions.
            </p>
          </div>
          <div className="rounded-[16px] bg-[#F8F7F2] p-4">
            <div className="flex flex-row items-center">
              <Image
                src={"/reliable.png"}
                alt="Experienced Icon"
                width={32}
                height={32}
              />
              <p className="ml-4 text-lg font-semibold sm:text-xl">
                Reliable Partner
              </p>
            </div>
            <p className="mt-4 font-medium text-[#6A6A6A]">
              I pride myself on being proactive, responsive, and
              detail-oriented, ensuring every task is completed to the highest
              standard.
            </p>
          </div>
          <div className="rounded-[16px] bg-[#F8F7F2] p-4">
            <div className="flex flex-row items-center">
              <Image
                src={"/flexible.png"}
                alt="Experienced Icon"
                width={32}
                height={32}
              />
              <p className="ml-4 text-lg font-semibold sm:text-xl">
                Flexible Solutions
              </p>
            </div>
            <p className="mt-4 font-medium text-[#6A6A6A]">
              Whether you need ongoing support or help with a specific project,
              I adapt to your needs to deliver the best results.
            </p>
          </div>
        </div>
        <p className="mt-20 text-center text-lg font-semibold leading-tight sm:text-xl">
          Let’s work together to make your business more organized, efficient,
          and successful. Contact me today to discuss how I can support your
          business!
        </p>
        <div className="mt-10 flex w-full flex-row justify-center">
          <button className="flex flex-row items-center justify-center rounded-full bg-primary px-5 py-4 font-semibold text-secondary">
            <Image
              src={"/email-push.png"}
              alt="email-placeholder"
              width={24}
              height={24}
            />
            <p className="ml-3 text-xs sm:text-base">Contact Me</p>
          </button>
          <div className="mx-4" />
          <button className="flex flex-row items-center justify-center rounded-full bg-primary px-5 py-4 font-semibold text-secondary">
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
    </div>
  );
};

export default Reasons;
