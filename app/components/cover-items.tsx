import Image from "next/image";

interface CoverItemsProps {
  desc: string;
  image: string;
}

const CoverItems = ({ desc, image }: CoverItemsProps) => {
  return (
    <div className="bg-cover-item-border-gradient w-1/3 rounded-xl p-[2.5px]">
      <div className="bg-cover-item-fill-gradient flex h-full w-full flex-col justify-between rounded-lg p-6">
        <p className="text-lg font-semibold">{desc}</p>
        <Image
          src={image}
          alt="Small Bussiness"
          width={100}
          height={100}
          className="mt-4 self-end"
        />
      </div>
    </div>
  );
};

export default CoverItems;
