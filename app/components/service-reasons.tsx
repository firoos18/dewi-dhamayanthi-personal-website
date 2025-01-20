import Image from "next/image";
import ServicesItem from "./services-item";

const ServiceReasons = () => {
  return (
    <div className="flex flex-col min-h-screen py-20 px-24 justify-center">
      <div className="flex flex-col w-full">
        <div className="w-full flex flex-row items-center">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
            Services I Offer
          </p>
          <div className="flex-grow h-[1px] bg-black ml-5" />
        </div>
        <div className="flex flex-row w-full h-fit mt-12 space-x-10">
          <ServicesItem
            image="/financial-management.png"
            content="Handling bookkeeping, budgeting, invoicing, and financial reporting
            to ensure your business stays financially healthy and on track."
            title="Financial Management"
          />
          <ServicesItem
            image="/project-management.png"
            content="Coordinating projects from start to finish, ensuring deadlines are
            met and resources are utilized effectively."
            title="Project Coordination"
          />
          <ServicesItem
            image="/business-support.png"
            content="Offering a range of administrative services to help you stay
            organized, from calendar management to email correspondence."
            title="Business Support"
          />
        </div>
      </div>
      <div className="w-full flex flex-row items-center mt-20">
        <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
          Why Work With Me
        </p>
        <div className="flex-grow h-[1px] bg-black ml-5" />
      </div>
      <div className="flex flex-row mt-12 w-full">
        <div className="bg-[#F8F7F2] p-4 rounded-[16px] w-1/3">
          <div className="flex flex-row items-center">
            <Image
              src={"/experienced.png"}
              alt="Experienced Icon"
              width={60}
              height={60}
            />
            <p className="ml-4 text-lg sm:text-xl lg:text-2xl font-semibold">
              Experienced
            </p>
          </div>
          <p className="text-[#6A6A6A] font-medium mt-10 lg:text-xl">
            With a strong background in finance and project management for more
            than <b>20 years</b>, I understand the unique challenges business
            owners face and provide tailored solutions.
          </p>
        </div>
        <div className="bg-[#F8F7F2] p-4 rounded-[16px] w-1/3">
          <div className="flex flex-row items-center">
            <Image
              src={"/reliable.png"}
              alt="Experienced Icon"
              width={60}
              height={60}
            />
            <p className="ml-4 text-lg sm:text-xl font-semibold lg:text-2xl">
              Reliable Partner
            </p>
          </div>
          <p className="text-[#6A6A6A] font-medium mt-10 lg:text-xl">
            I pride myself on being proactive, responsive, and detail-oriented,
            ensuring every task is completed to the highest standard.
          </p>
        </div>
        <div className="bg-[#F8F7F2] p-4 rounded-[16px] w-1/3">
          <div className="flex flex-row items-center">
            <Image
              src={"/flexible.png"}
              alt="Experienced Icon"
              width={60}
              height={60}
            />
            <p className="ml-4 text-lg sm:text-xl font-semibold lg:text-2xl">
              Flexible Solutions
            </p>
          </div>
          <p className="text-[#6A6A6A] font-medium mt-10 lg:text-xl">
            Whether you need ongoing support or help with a specific project, I
            adapt to your needs to deliver the best results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceReasons;
