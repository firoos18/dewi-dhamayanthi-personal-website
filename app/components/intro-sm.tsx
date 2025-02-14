import Image from "next/image";
import { ServicesList } from "./intro";
import ServicesItemLg from "./services-item-lg";

const IntroSm = () => {
  return (
    <div className="mt-16 flex h-fit w-full flex-col px-4">
      <div className="flex min-h-[1200px] w-full flex-col">
        <div className="h-[404px] w-full">
          <div className="relative flex h-5/6 w-full flex-col justify-end">
            <div className="relative mt-32 h-full w-3/6">
              <Image
                src={"/profile-picture.png"}
                alt="Profile Picture"
                fill
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="absolute right-0 top-0 flex h-5/6 w-4/6 flex-col space-y-6 rounded-2xl bg-intro-fill-gradient-sm p-4">
              <p className="text-xl font-semibold">Hi! I’m Dewi Dhamayanthi.</p>
              <p className="text-sm font-normal">
                With over 20 years of experience in finance and accounting, I
                specialize in helping mompreneurs with service-based businesses
                take control of their finances, build sustainable income, and
                achieve financial confidence. 
              </p>
            </div>
          </div>
          <div className="mt-4 h-1/6 w-full">
            <p className="text-base font-semibold text-[#878787]">
              My goal is to provide you with{" "}
              <span className="text-black">reliable support</span> that drive{" "}
              <span className="text-black">growth</span>
              and achieve <span className="text-black">financial goals</span>.
            </p>
          </div>
        </div>
        <div className="mt-24 flex h-fit w-full flex-col">
          <div className="w-2/3 text-xl font-semibold">
            <p>I Help Mompreneurs Running Service-Based Businesses To:</p>
          </div>
          <div className="mt-8 flex h-fit flex-col space-y-8">
            {ServicesList.map((service, idx) => (
              <div key={idx} className="flex flex-col space-y-6">
                <ServicesItemLg
                  description={service.desc}
                  image={service.image}
                  title={service.title}
                />
                <div
                  className={`h-[0.5px] flex-grow bg-[#B1C0C0] ${idx + 1 === ServicesList.length ? "hidden" : "block"}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 h-[270px] w-full">
          <div className="relative min-h-[270px] w-full">
            <Image
              src={"/cta-bg.png"}
              alt="CTA Background"
              className="absolute"
              style={{ borderRadius: "16px" }}
              fill
              priority
            />
            <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
              <p className="h-fit w-5/6 text-center text-base font-semibold">
                Let’s work together to make your business more organized,
                efficient, and successful. Contact me today to discuss how I can
                support your business!
              </p>
              <div className="mt-6 flex flex-row space-x-8">
                <button className="rounded-full border-2 border-black px-8 py-4 text-xs font-semibold">
                  <p>Book a Call</p>
                </button>
                <button className="rounded-full bg-black px-8 py-4 text-xs font-semibold text-white">
                  <p>Contact Me</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSm;
