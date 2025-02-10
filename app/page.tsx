import ClientReviews from "./components/client-reviews";
import ClientReviewsLg from "./components/client-reviews-lg";
import Cover from "./components/cover";
import CoverMedium from "./components/cover-md";
import CoverSmall from "./components/cover-small";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Reasons from "./components/reasons";
// import ServiceReasons from "./components/service-reasons";
import Services from "./components/services";
import ServicesLg from "./components/services-lg";

export default function Home() {
  return (
    <>
      <div className="block md:hidden lg:hidden">
        <CoverSmall />
        <Intro />
        <Services />
        <Reasons />
        <ClientReviews />
      </div>
      <div className="hidden md:block lg:hidden">
        <CoverMedium />
      </div>
      <div className="hidden md:hidden lg:block">
        <Cover />
        <ServicesLg />
        <ClientReviewsLg />
      </div>
      <Footer />
    </>
  );
}
