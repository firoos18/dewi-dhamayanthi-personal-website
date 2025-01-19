import Image from "next/image";

const Reasons = () => {
  return (
    <div className="relative flex flex-col w-full min-h-screen mt-20 px-4 justify-center">
      <Image
        className="absolute inset-0 object-cover"
        src={"/reasons-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <div className="relative z-10 flex flex-col">
        <div className="w-full flex flex-row items-center">
          <p className="text-3xl sm:text-4xl font-semibold">Why Work With Me</p>
          <div className="flex-grow h-[1px] bg-black ml-5" />
        </div>
        <div className="flex flex-col mt-4 h-[564px] justify-evenly">
          <div className="bg-[#F8F7F2] p-4 rounded-[16px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/experienced.png"}
                alt="Experienced Icon"
                width={32}
                height={32}
              />
              <p className="ml-4 text-lg sm:text-xl font-semibold">
                Experienced
              </p>
            </div>
            <p className="text-[#6A6A6A] font-medium mt-4">
              With a strong background in finance and project management for
              more than <b>20 years</b>, I understand the unique challenges
              business owners face and provide tailored solutions.
            </p>
          </div>
          <div className="bg-[#F8F7F2] p-4 rounded-[16px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/reliable.png"}
                alt="Experienced Icon"
                width={32}
                height={32}
              />
              <p className="ml-4 text-lg sm:text-xl font-semibold">
                Reliable Partner
              </p>
            </div>
            <p className="text-[#6A6A6A] font-medium mt-4">
              I pride myself on being proactive, responsive, and
              detail-oriented, ensuring every task is completed to the highest
              standard.
            </p>
          </div>
          <div className="bg-[#F8F7F2] p-4 rounded-[16px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/flexible.png"}
                alt="Experienced Icon"
                width={32}
                height={32}
              />
              <p className="ml-4 text-lg sm:text-xl font-semibold">
                Flexible Solutions
              </p>
            </div>
            <p className="text-[#6A6A6A] font-medium mt-4">
              Whether you need ongoing support or help with a specific project,
              I adapt to your needs to deliver the best results.
            </p>
          </div>
        </div>
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
    </div>
  );
};

export default Reasons;
