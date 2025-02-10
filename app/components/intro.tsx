import Image from "next/image";
import ServicesItemLg, { Services } from "./services-item-lg";

const ServicesList: Services[] = [
  {
    image: "/achieve.png",
    desc: "Set up a financial system that ensures stability, even in fluctuating months.",
    title: "Achieve Stable Cash Flow",
  },
  {
    image: "/price.png",
    desc: "Stop undervaluing their expertise and start charging what they’re worth.",
    title: "Price Their Services Confidently",
  },
  {
    image: "/separate.png",
    desc: "Implement simple, stress-free financial planning to keep finances organized.",
    title: "Separate Personal & Business Finances",
  },
  {
    image: "/build.png",
    desc: "Plan for the future with confidence, knowing their business supports their long-term financial security.",
    title: "Build a Financial Safety Net",
  },
  {
    image: "/understand.png",
    desc: "Simplify financial concepts so they can make informed money decisions without feeling overwhelmed.",
    title: "Understand & Manage Their Finances with Ease",
  },
];

const Intro = () => {
  return (
    <div className="flex h-fit w-full flex-col space-y-20 p-6">
      <div className="flex h-[350px] w-full flex-row">
        <div className="relative h-full w-1/3">
          <Image
            src={"/profile-picture.png"}
            alt="Profile Picture"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="bg-intro-fill-gradient mt-[48px] flex h-[88%] w-2/3 flex-col justify-between rounded-2xl border-2 border-white p-6">
          <div className="flex flex-col space-y-6">
            <p className="text-2xl font-semibold">Hi! I’m Dewi Dhamayanthi.</p>
            <p className="text-sm font-normal">
              With <b>over 20 years</b> of experience in finance and accounting,
              I specialize in helping <b>mompreneurs</b> with service-based
              businesses take control of their finances, build sustainable
              income, and achieve financial confidence. 
            </p>
          </div>
          <p className="w-3/4 self-end text-end text-base font-semibold text-[#878787]">
            My goal is to provide you with{" "}
            <span className="text-black">reliable support</span> that drive
            <span className="text-black"> growth</span> and achieve{" "}
            <span className="text-black">financial goals</span>.
          </p>
        </div>
      </div>
      <div className="flex min-h-[700px] w-full flex-row">
        <div className="w-1/3 text-2xl font-semibold">
          <p>I Help Mompreneurs Running Service-Based Businesses To:</p>
        </div>
        <div className="ml-36 flex h-fit flex-col space-y-16">
          {ServicesList.map((service, idx) => (
            <div key={idx} className="flex flex-col space-y-8">
              <ServicesItemLg
                description={service.desc}
                image={service.image}
                title={service.title}
              />
              <div
                className={`h-[1px] flex-grow bg-[#B1C0C0] ${idx + 1 === ServicesList.length ? "hidden" : "block"}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 h-[312px] w-full">
        <div className="relative min-h-[312px] w-full">
          <Image
            src={"/cta-bg.png"}
            alt="CTA Background"
            className="absolute"
            style={{ borderRadius: "16px" }}
            fill
            priority
          />
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
            <p className="h-fit w-3/4 text-center text-lg font-semibold">
              Let’s work together to make your business more organized,
              efficient, and successful. Contact me today to discuss how I can
              support your business!
            </p>
            <div className="mt-8 flex flex-row space-x-8">
              <button className="rounded-full border-4 border-black px-8 py-4 text-sm font-semibold">
                <p>Book a Call</p>
              </button>
              <button className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white">
                <p>Contact Me</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
