import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../atoms/carousel";

const ClientReviewsLg = () => {
  return (
    <div className="flex min-h-screen w-full flex-col px-24 py-9">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-3xl font-semibold lg:w-[700px]">
          Let’s work together to make your business more organized, efficient,
          and successful. Contact me today to discuss how I can support your
          business!
        </p>
        <div className="mt-8 flex w-full flex-row justify-center lg:mt-10">
          <button className="flex flex-row items-center justify-center rounded-full bg-primary px-5 py-4 font-semibold text-secondary">
            <Image
              src={"/email-push.png"}
              alt="email-placeholder"
              width={24}
              height={24}
              className="lg:h-8 lg:w-8"
              priority
            />
            <p className="ml-3 text-xs sm:text-base lg:text-xl">Contact Me</p>
          </button>
          <div className="mx-4" />
          <button className="flex flex-row items-center justify-center rounded-full bg-primary px-5 py-4 font-semibold text-secondary">
            <Image
              src={"/phone-telephone.png"}
              alt="email-placeholder"
              width={24}
              height={24}
              className="lg:h-8 lg:w-8"
              priority
            />
            <p className="ml-3 text-xs sm:text-base lg:text-xl">Book a Call</p>
          </button>
        </div>
      </div>
      <div className="mt-24 flex w-full flex-col">
        <div className="flex w-full flex-row items-center">
          <p className="text-3xl font-semibold sm:text-4xl lg:text-6xl">
            Client Reviews
          </p>
          <div className="ml-5 h-[1px] flex-grow bg-black" />
        </div>
        <Carousel className="mt-12">
          <CarouselContent className="space-x-6">
            <CarouselItem className="basis-1/3">
              <div className="flex w-full flex-col rounded-[16px] bg-[#E0E6E6] p-7">
                <p className="text-[#6A6A6A] lg:text-2xl">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-base font-semibold sm:text-lg lg:text-2xl">
                      Emi Wang
                    </p>
                    <p className="text-xs text-[#6A6A6A] sm:text-base lg:text-xl">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex w-full flex-col rounded-[16px] bg-[#E0E6E6] p-7">
                <p className="text-[#6A6A6A] lg:text-2xl">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-base font-semibold sm:text-lg lg:text-2xl">
                      Emi Wang
                    </p>
                    <p className="text-xs text-[#6A6A6A] sm:text-base lg:text-xl">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex w-full flex-col rounded-[16px] bg-[#E0E6E6] p-7">
                <p className="text-[#6A6A6A] lg:text-2xl">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-base font-semibold sm:text-lg lg:text-2xl">
                      Emi Wang
                    </p>
                    <p className="text-xs text-[#6A6A6A] sm:text-base lg:text-xl">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex w-full flex-col rounded-[16px] bg-[#E0E6E6] p-7">
                <p className="text-[#6A6A6A] lg:text-2xl">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-base font-semibold sm:text-lg lg:text-2xl">
                      Emi Wang
                    </p>
                    <p className="text-xs text-[#6A6A6A] sm:text-base lg:text-xl">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex w-full flex-col rounded-[16px] bg-[#E0E6E6] p-7">
                <p className="text-[#6A6A6A] lg:text-2xl">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-base font-semibold sm:text-lg lg:text-2xl">
                      Emi Wang
                    </p>
                    <p className="text-xs text-[#6A6A6A] sm:text-base lg:text-xl">
                      Small Bussiness Owner
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div className="flex w-full flex-col rounded-[16px] bg-[#E0E6E6] p-7">
                <p className="text-[#6A6A6A] lg:text-2xl">
                  “Working with Dewi has been a transformative experience for my
                  business! Her financial management skills have completely
                  streamlined our bookkeeping and budgeting. I can now focus on
                  growth, knowing that invoicing and financial reports are
                  handled flawlessly. Thanks to Dewi, our finances have never
                  been more organized!”
                </p>
                <div className="mt-6 flex flex-row items-center">
                  <Image
                    src={"/client.png"}
                    width={80}
                    height={80}
                    alt="client"
                    className="rounded-full"
                  />
                  <div className="ml-4 flex flex-col">
                    <p className="text-base font-semibold sm:text-lg lg:text-2xl">
                      Emi Wang
                    </p>
                    <p className="text-xs text-[#6A6A6A] sm:text-base lg:text-xl">
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
