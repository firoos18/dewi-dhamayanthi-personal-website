import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-14 flex min-h-60 w-full flex-col justify-center px-4 lg:min-h-72 lg:px-6">
      <div className="relative mb-8 h-full min-h-72 w-full">
        <Image
          src={"/footer-bg.png"}
          alt="background"
          fill
          priority
          style={{ borderRadius: "16px" }}
        />
        <div className="absolute z-10 flex w-full flex-col px-4 pt-10 lg:hidden">
          <p className="h-fit w-1/4 text-base font-bold leading-tight text-primary">
            Dewi Dhamayanthi.
          </p>
          <p className="mt-6 h-fit w-full text-sm font-bold leading-tight">
            My Media & Contacts
          </p>
          <div className="mt-4 grid w-full grid-flow-col gap-4 overflow-auto text-wrap text-sm text-[#878787]">
            <div className="flex h-fit w-full flex-col space-y-3 font-semibold">
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Email</p>
              <p>Phone</p>
            </div>
            <div className="flex h-fit w-full flex-col space-y-3">
              <p>@dee_dhamayanthi</p>
              <p>Dewi Dhamayanthi</p>
              <p>va.deedhamayanthi@gmail.com</p>
              <p>+62 819-0143-0494</p>
            </div>
          </div>
        </div>
        <div className="absolute z-10 hidden w-full px-6 pt-10 lg:flex lg:flex-row lg:justify-between">
          <div className="flex h-full w-1/3 flex-col items-start">
            <p className="h-1/6 w-1/4 text-lg font-bold leading-tight text-primary">
              Dewi Dhamayanthi.
            </p>
          </div>
          <div className="flex h-full w-1/3 flex-col leading-tight">
            <p className="text-lg font-semibold">My Media</p>
            <div className="mt-8 flex w-full flex-col space-y-3 text-sm font-semibold">
              <div className="flex w-full flex-row space-x-2">
                <p className="font-semibold">Instagram</p>
                <p className="font-normal text-[#6A6A6A]">@dee_dhamayanthi</p>
              </div>
              <div className="flex w-full flex-row space-x-2">
                <p className="font-semibold">Website</p>
                <p className="font-normal text-[#6A6A6A]">
                  dewidhamayanthi.com
                </p>
              </div>
              <div className="flex w-full flex-row space-x-2">
                <p className="font-semibold">LinkedIn</p>
                <p className="font-normal text-[#6A6A6A]">Dewi Dhamayanti</p>
              </div>
            </div>
          </div>
          <div className="flex h-full w-1/3 flex-col leading-tight">
            <p className="text-lg font-semibold">Contacts</p>
            <div className="mt-8 flex w-full flex-col space-y-3 text-sm font-semibold">
              <div className="flex w-full flex-row space-x-2">
                <p className="font-semibold">Email</p>
                <p className="font-normal text-[#6A6A6A]">
                  va.deedhamayanthi@gmail.com
                </p>
              </div>
              <div className="flex w-full flex-row space-x-2">
                <p className="font-semibold">Phone</p>
                <p className="font-normal text-[#6A6A6A]">+62 819-0143-0494</p>
              </div>
            </div>
          </div>
          {/* <div className="hidden text-3xl font-bold text-primary lg:flex lg:flex-col">
          <p>Dewi</p>
          <p>Dhamayanthi.</p>
        </div>
        <div className="flex w-full flex-col space-y-8 text-lg sm:text-xl lg:flex-row lg:justify-between lg:text-2xl">
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
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
