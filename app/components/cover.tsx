const Cover = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen px-4">
      <p className="bg-gradient-to-r from-[#0B414B] to-[#1A99B1] bg-clip-text text-transparent text-5xl font-semibold w-[400px] text-center">
        Start Up Money Mastery
      </p>
      <p className="w-[310px] text-center mt-2 text-lg text-black">
        Achieve your financial goals and build your dream business.
      </p>
      <div className="flex flex-row w-full mt-8 justify-center">
        <button className="flex flex-row rounded-full bg-primary text-secondary py-4 px-5 justify-center">
          <p>Contact Me</p>
        </button>
        <div className="mx-4" />
        <button className="flex flex-row rounded-full bg-primary text-secondary py-4 px-5 justify-center">
          <p>Contact Me</p>
        </button>
      </div>
    </div>
  );
};

export default Cover;
