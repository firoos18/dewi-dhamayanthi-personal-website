import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative flex flex-col w-full min-h-96 mt-14 px-4 justify-center">
      <Image
        className="absolute inset-0 object-cover"
        src={"/footer-bg.png"}
        alt="background"
        sizes="50vw"
        fill
        priority
      />
      <div className="relative z-10 flex flex-col space-y-8">
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-lg sm:text-xl">My Media</p>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold text-base sm:text-lg">Instagram</p>
            <p className="text-[#6A6A6A] text-base sm:text-lg">
              @dee_dhamayanthi
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold text-base sm:text-lg">Website</p>
            <p className="text-[#6A6A6A] text-base sm:text-lg">
              dewidhamayanthi.com
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold text-base sm:text-lg">LinkedIn</p>
            <p className="text-[#6A6A6A] text-base sm:text-lg">
              Dewi Dhamayanti
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="font-semibold text-lg sm:text-xl">Contacts</p>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold text-base sm:text-lg">Email</p>
            <p className="text-[#6A6A6A] text-base sm:text-lg">
              va.deedhamayanthi@gmail.com
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <p className="font-semibold text-base sm:text-lg">Phone</p>
            <p className="text-[#6A6A6A] text-base sm:text-lg">
              +62 819-0143-0494
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
