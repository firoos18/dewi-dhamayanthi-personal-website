import React from "react";
import ClientReviews from "../molecules/client-reviews";
import ClientReviewsLg from "../molecules/client-reviews-lg";
import Cover from "../molecules/cover";
import CoverMedium from "../molecules/cover-md";
import CoverSmall from "../molecules/cover-small";
import Footer from "../molecules/footer";
import Intro from "../molecules/intro";
import IntroSm from "../molecules/intro-sm";
import Reasons from "../molecules/reasons";
import Services from "../molecules/services";

const LandingPage = () => {
  return (
    <>
      <div className="block md:hidden lg:hidden">
        <CoverSmall />
        <IntroSm />
        <Services />
        <Reasons />
        <ClientReviews />
      </div>
      <div className="hidden md:block lg:hidden">
        <CoverMedium />
      </div>
      <div className="hidden md:hidden lg:block">
        <Cover />
        <Intro />
        <ClientReviewsLg />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
