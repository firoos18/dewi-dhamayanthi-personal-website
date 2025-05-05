import ServicesItemLg from "../atoms/services-item-lg";

const ServicesLg = () => {
  return (
    <div className="flex min-h-screen w-full flex-col space-y-5 px-10 py-56">
      <div className="flex h-[273px] w-full flex-row space-x-5">
        <div className="flex w-1/3 flex-col justify-end rounded-bl-xl rounded-br-xl rounded-tl-lg rounded-tr-[100px] bg-primary p-[30px] text-3xl font-semibold text-white">
          <p>
            I Help <span className="text-secondary">Mompreneurs</span> Running
            Service-Based Businesses To:
          </p>
        </div>
        <ServicesItemLg
          description="Set up a financial system that ensures stability, even in fluctuating months."
          title="Achieve Stable Cash Flow"
          image="/achieve.png"
        />
        <ServicesItemLg
          description="Stop undervaluing their expertise and start charging what they’re worth."
          title="Price Their Services Confidently"
          image="/price.png"
        />
      </div>
      <div className="flex h-[273px] w-full flex-row space-x-5">
        <ServicesItemLg
          description="Implement simple, stress-free financial planning to keep finances organized."
          title="Separate Personal & Business Finances"
          image="/separate.png"
        />
        <ServicesItemLg
          description="Plan for the future with confidence, knowing their business supports their long-term financial security."
          title="Build a Financial Safety Net"
          image="/build.png"
        />
        <ServicesItemLg
          description="Simplify financial concepts so they can make informed money decisions without feeling overwhelmed."
          title="Understand & Manage Their Finances with Ease"
          image="/understand.png"
        />
      </div>
    </div>
  );
};

export default ServicesLg;
