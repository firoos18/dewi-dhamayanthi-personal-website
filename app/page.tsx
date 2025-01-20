import ClientReviews from "./components/client-reviews";
import Cover from "./components/cover";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Reasons from "./components/reasons";
import ServiceReasons from "./components/service-reasons";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <Cover />
      <Intro />
      <div className="block lg:hidden">
        <Services />
        <Reasons />
        <ClientReviews />
      </div>
      <div className="hidden lg:block">
        <ServiceReasons />
      </div>
      <Footer />
    </>
  );
}
