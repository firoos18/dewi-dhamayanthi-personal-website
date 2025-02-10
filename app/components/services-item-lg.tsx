import Image from "next/image";

interface ServicesItemLgProps {
  image: string;
  title: string;
  description: string;
}

export type Services = {
  image: string;
  title: string;
  desc: string;
};

const ServicesItemLg = ({ image, title, description }: ServicesItemLgProps) => {
  return (
    <div className="flex h-fit w-full flex-row justify-between space-x-10 text-3xl font-semibold text-white">
      <div className="relative size-14">
        <Image src={image} alt={title} fill priority />
      </div>
      <div className="flex w-full flex-col space-y-3">
        <p className="text-start text-lg font-semibold text-black">{title}</p>
        <p className="text-base font-normal text-[#878787]">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItemLg;
