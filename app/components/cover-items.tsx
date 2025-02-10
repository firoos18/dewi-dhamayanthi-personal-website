import Image from "next/image";

interface CoverItemsProps {
  desc: string;
  image: string;
}

const CoverItems = ({ desc, image }: CoverItemsProps) => {
  return (
    <div className="flex h-full w-full flex-row space-x-6 rounded-xl bg-cover-item-border-gradient p-[2.5px]">
      <div className="flex h-full flex-row space-x-6 rounded-lg bg-cover-item-fill-gradient p-4 lg:flex-col lg:justify-between lg:space-x-0">
        <div className="block h-full w-fit lg:hidden">
          <div className="relative size-16">
            <Image
              src={image}
              alt={image}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <p className="w-full text-sm font-semibold lg:text-base">{desc}</p>
        <div className="mt-6 hidden h-fit w-full justify-end lg:flex">
          <div className="relative size-24">
            <Image
              src={image}
              alt={image}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverItems;
