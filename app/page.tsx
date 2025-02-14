import ClientReviews from "./components/client-reviews";
import ClientReviewsLg from "./components/client-reviews-lg";
import Cover from "./components/cover";
import CoverMedium from "./components/cover-md";
import CoverSmall from "./components/cover-small";
import Footer from "./components/footer";
import Intro from "./components/intro";
import IntroSm from "./components/intro-sm";
import Reasons from "./components/reasons";

export default function Home() {
  return (
    <>
      <div className="block md:hidden lg:hidden">
        <CoverSmall />
        <IntroSm />
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
}
