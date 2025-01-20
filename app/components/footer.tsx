import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex flex-col w-full min-h-96 lg:min-h-[440px] mt-14 px-4 lg:px-24 justify-center">
      <Image
        className="absolute inset-0 object-cover"
        src={"/footer-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <div className="relative z-10 flex flex-col lg:space-y-24">
        <div className="lg:flex-col hidden lg:flex text-primary text-3xl font-bold">
          <p>Dewi</p>
          <p>Dhamayanthi.</p>
        </div>
        <div className="flex flex-col lg:flex-row w-full space-y-8 lg:justify-between text-lg sm:text-xl lg:text-2xl">
          <div className="flex flex-col space-y-3">
            <p className="font-semibold">My Media</p>
            <div className="flex flex-row space-x-2">
              <p className="font-semibold">Instagram</p>
              <p className="text-[#6A6A6A]">@dee_dhamayanthi</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p className="font-semibold">Website</p>
              <p className="text-[#6A6A6A]">dewidhamayanthi.com</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p className="font-semibold">LinkedIn</p>
              <p className="text-[#6A6A6A]">Dewi Dhamayanti</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="font-semibold">Contacts</p>
            <div className="flex flex-row space-x-2">
              <p className="font-semibold">Email</p>
              <p className="text-[#6A6A6A]">va.deedhamayanthi@gmail.com</p>
            </div>
            <div className="flex flex-row space-x-2">
              <p className="font-semibold">Phone</p>
              <p className="text-[#6A6A6A]">+62 819-0143-0494</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
