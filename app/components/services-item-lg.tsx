import Image from "next/image";

interface ServicesItemLgProps {
  image: string;
  title: string;
  description: string;
}

const ServicesItemLg = ({ image, title, description }: ServicesItemLgProps) => {
  return (
    <div className="w-1/3 border border-[#B1C0C0] text-3xl text-white font-semibold p-[30px] flex flex-col rounded-2xl justify-between">
      <Image src={image} alt={title} width={60} height={60} />
      <div className="flex flex-col space-y-3">
        <p className="font-semibold text-lg text-black">{title}</p>
        <p className="text-base font-normal text-[#878787]">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItemLg;
