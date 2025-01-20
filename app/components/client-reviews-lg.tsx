import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ClientReviewsLg = () => {
  return (
    <div className="flex flex-col w-full min-h-screen px-24 py-9">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl text-center lg:w-[700px] font-semibold">
          Let’s work together to make your business more organized, efficient,
          and successful. Contact me today to discuss how I can support your
          business!
        </p>
        <div className="flex flex-row w-full mt-8 lg:mt-10 justify-center">
          <button className="flex flex-row rounded-full bg-primary text-secondary font-semibold py-4 px-5 justify-center items-center">
            <Image
              src={"/email-push.png"}
              alt="email-placeholder"
              width={24}
              height={24}
              className="lg:w-8 lg:h-8"
              priority
            />
            <p className="ml-3 text-xs sm:text-base lg:text-xl">Contact Me</p>
          </button>
          <div className="mx-4" />
          <button className="flex flex-row rounded-full bg-primary text-secondary font-semibold py-4 px-5 justify-center items-center">
            <Image
              src={"/phone-telephone.png"}
              alt="email-placeholder"
              width={24}
              height={24}
              className="lg:w-8 lg:h-8"
              priority
            />
            <p className="ml-3 text-xs sm:text-base lg:text-xl">Book a Call</p>
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full mt-24">
        <div className="w-full flex flex-row items-center">
          <p className="text-3xl sm:text-4xl lg:text-6xl font-semibold">
            Client Reviews
          </p>
          <div className="flex-grow h-[1px] bg-black ml-5" />
        </div>
        <Carousel className="mt-12">
          <CarouselContent className="space-x-6">
            <CarouselItem className="basis-1/3">
              <div className="flex flex-col p-7 rounded-[16px] bg-[#E0E6E6] w-full">
                <p className="lg:text-2xl text-[#6A6A6A]">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="flex flex-row mt-6 items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                      Emi Wang
                    </p>
                    <p className="text-xs sm:text-base lg:text-xl text-[#6A6A6A]">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex flex-col p-7 rounded-[16px] bg-[#E0E6E6] w-full">
                <p className="lg:text-2xl text-[#6A6A6A]">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="flex flex-row mt-6 items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                      Emi Wang
                    </p>
                    <p className="text-xs sm:text-base lg:text-xl text-[#6A6A6A]">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex flex-col p-7 rounded-[16px] bg-[#E0E6E6] w-full">
                <p className="lg:text-2xl text-[#6A6A6A]">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="flex flex-row mt-6 items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                      Emi Wang
                    </p>
                    <p className="text-xs sm:text-base lg:text-xl text-[#6A6A6A]">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex flex-col p-7 rounded-[16px] bg-[#E0E6E6] w-full">
                <p className="lg:text-2xl text-[#6A6A6A]">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="flex flex-row mt-6 items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                      Emi Wang
                    </p>
                    <p className="text-xs sm:text-base lg:text-xl text-[#6A6A6A]">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex flex-col p-7 rounded-[16px] bg-[#E0E6E6] w-full">
                <p className="lg:text-2xl text-[#6A6A6A]">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="flex flex-row mt-6 items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                      Emi Wang
                    </p>
                    <p className="text-xs sm:text-base lg:text-xl text-[#6A6A6A]">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex flex-col p-7 rounded-[16px] bg-[#E0E6E6] w-full">
                <p className="lg:text-2xl text-[#6A6A6A]">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="flex flex-row mt-6 items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="flex flex-col ml-4">
                    <p className="text-base sm:text-lg lg:text-2xl font-semibold">
                      Emi Wang
                    </p>
                    <p className="text-xs sm:text-base lg:text-xl text-[#6A6A6A]">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReviewsLg;
