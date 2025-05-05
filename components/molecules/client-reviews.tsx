import Image from "next/image";

const ClientReviews = () => {
  return (
    <div className="relative mt-20 flex min-h-screen w-full flex-col items-center px-4">
      <div className="flex w-full flex-row items-center">
        <p className="w-[236px] text-3xl font-semibold sm:text-4xl">
          Shared by Our Valued Clients
        </p>
        <div className="ml-5 h-[1px] flex-grow bg-black" />
      </div>
      <div className="mt-12 flex h-fit flex-col space-y-4">
        <div className="rounded-[16px] bg-[#B1C0C066] p-4">
          <p className="text-base text-[#6A6A6A] sm:text-lg">
            “Working with Dewi has been a transformative experience for my
            business! Her financial management skills have completely
            streamlined our bookkeeping and budgeting. I can now focus on
            growth, knowing that invoicing and financial reports are handled
            flawlessly. Thanks to Dewi, our finances have never been more
            organized!”
          </p>
          <div className="mt-6 flex flex-row items-center">
            <Image
              src={"/client.png"}
              width={50}
              height={50}
              alt="client"
              className="rounded-full"
            />
            <div className="ml-4 flex flex-col">
              <p className="text-base font-semibold sm:text-lg">Emi Wang</p>
              <p className="text-xs text-[#6A6A6A] sm:text-base">
                Small Bussiness Owner
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[16px] bg-[#B1C0C066] p-4">
          <p className="text-base text-[#6A6A6A] sm:text-lg">
            “Working with Dewi has been a transformative experience for my
            business! Her financial management skills have completely
            streamlined our bookkeeping and budgeting. I can now focus on
            growth, knowing that invoicing and financial reports are handled
            flawlessly. Thanks to Dewi, our finances have never been more
            organized!”
          </p>
          <div className="mt-6 flex flex-row items-center">
            <Image
              src={"/client.png"}
              width={50}
              height={50}
              alt="client"
              className="rounded-full"
            />
            <div className="ml-4 flex flex-col">
              <p className="text-base font-semibold sm:text-lg">Emi Wang</p>
              <p className="text-xs text-[#6A6A6A] sm:text-base">
                Small Bussiness Owner
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[16px] bg-[#B1C0C066] p-4">
          <p className="text-base text-[#6A6A6A] sm:text-lg">
            “Working with Dewi has been a transformative experience for my
            business! Her financial management skills have completely
            streamlined our bookkeeping and budgeting. I can now focus on
            growth, knowing that invoicing and financial reports are handled
            flawlessly. Thanks to Dewi, our finances have never been more
            organized!”
          </p>
          <div className="mt-6 flex flex-row items-center">
            <Image
              src={"/client.png"}
              width={50}
              height={50}
              alt="client"
              className="rounded-full"
            />
            <div className="ml-4 flex flex-col">
              <p className="text-base font-semibold sm:text-lg">Emi Wang</p>
              <p className="text-xs text-[#6A6A6A] sm:text-base">
                Small Bussiness Owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
