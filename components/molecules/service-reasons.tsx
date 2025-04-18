import Image from "next/image";
import ServicesItem from "../atoms/services-item";

const ServiceReasons = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center px-24 py-20">
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-row items-center">
          <p className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
            Services I Offer
          </p>
          <div className="ml-5 h-[1px] flex-grow bg-black" />
        </div>
        <div className="mt-12 flex h-fit w-full flex-row space-x-10">
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
      <div className="mt-20 flex w-full flex-row items-center">
        <p className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
          Why Work With Me
        </p>
        <div className="ml-5 h-[1px] flex-grow bg-black" />
      </div>
      <div className="mt-12 flex w-full flex-row">
        <div className="w-1/3 rounded-[16px] bg-[#F8F7F2] p-4">
          <div className="flex flex-row items-center">
            <Image
              src={"/experienced.png"}
              alt="Experienced Icon"
              width={60}
              height={60}
            />
            <p className="ml-4 text-lg font-semibold sm:text-xl lg:text-2xl">
              Experienced
            </p>
          </div>
          <p className="mt-10 font-medium text-[#6A6A6A] lg:text-xl">
            With a strong background in finance and project management for more
            than <b>20 years</b>, I understand the unique challenges business
            owners face and provide tailored solutions.
          </p>
        </div>
        <div className="w-1/3 rounded-[16px] bg-[#F8F7F2] p-4">
          <div className="flex flex-row items-center">
            <Image
              src={"/reliable.png"}
              alt="Experienced Icon"
              width={60}
              height={60}
            />
            <p className="ml-4 text-lg font-semibold sm:text-xl lg:text-2xl">
              Reliable Partner
            </p>
          </div>
          <p className="mt-10 font-medium text-[#6A6A6A] lg:text-xl">
            I pride myself on being proactive, responsive, and detail-oriented,
            ensuring every task is completed to the highest standard.
          </p>
        </div>
        <div className="w-1/3 rounded-[16px] bg-[#F8F7F2] p-4">
          <div className="flex flex-row items-center">
            <Image
              src={"/flexible.png"}
              alt="Experienced Icon"
              width={60}
              height={60}
            />
            <p className="ml-4 text-lg font-semibold sm:text-xl lg:text-2xl">
              Flexible Solutions
            </p>
          </div>
          <p className="mt-10 font-medium text-[#6A6A6A] lg:text-xl">
            Whether you need ongoing support or help with a specific project, I
            adapt to your needs to deliver the best results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceReasons;
