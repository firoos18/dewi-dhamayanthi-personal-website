import Image from "next/image";

const ClientReviews = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen px-4 mt-20">
      <div className="w-full flex flex-row items-center">
        <p className="text-3xl sm:text-4xl font-semibold">Client Reviews</p>
        <div className="flex-grow h-[1px] bg-black ml-5" />
      </div>
      <div className="flex flex-col h-fit mt-12 space-y-4">
        <div className="bg-[#B1C0C066] p-4 rounded-[16px]">
          <p className="text-[#6A6A6A] text-base sm:text-lg">
            “Working with Dewi has been a transformative experience for my
            business! Her financial management skills have completely
            streamlined our bookkeeping and budgeting. I can now focus on
            growth, knowing that invoicing and financial reports are handled
            flawlessly. Thanks to Dewi, our finances have never been more
            organized!”
          </p>
          <div className="flex flex-row mt-6 items-center">
            <Image
              src={"/client.png"}
              width={50}
              height={50}
              alt="client"
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <p className="text-base sm:text-lg font-semibold">Emi Wang</p>
              <p className="text-xs sm:text-base text-[#6A6A6A]">
                Small Bussiness Owner
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#B1C0C066] p-4 rounded-[16px]">
          <p className="text-[#6A6A6A] text-base sm:text-lg">
            “Working with Dewi has been a transformative experience for my
            business! Her financial management skills have completely
            streamlined our bookkeeping and budgeting. I can now focus on
            growth, knowing that invoicing and financial reports are handled
            flawlessly. Thanks to Dewi, our finances have never been more
            organized!”
          </p>
          <div className="flex flex-row mt-6 items-center">
            <Image
              src={"/client.png"}
              width={50}
              height={50}
              alt="client"
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <p className="text-base sm:text-lg font-semibold">Emi Wang</p>
              <p className="text-xs sm:text-base text-[#6A6A6A]">
                Small Bussiness Owner
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#B1C0C066] p-4 rounded-[16px]">
          <p className="text-[#6A6A6A] text-base sm:text-lg">
            “Working with Dewi has been a transformative experience for my
            business! Her financial management skills have completely
            streamlined our bookkeeping and budgeting. I can now focus on
            growth, knowing that invoicing and financial reports are handled
            flawlessly. Thanks to Dewi, our finances have never been more
            organized!”
          </p>
          <div className="flex flex-row mt-6 items-center">
            <Image
              src={"/client.png"}
              width={50}
              height={50}
              alt="client"
              className="rounded-full"
            />
            <div className="flex flex-col ml-4">
              <p className="text-base sm:text-lg font-semibold">Emi Wang</p>
              <p className="text-xs sm:text-base text-[#6A6A6A]">
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
