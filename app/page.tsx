import ClientReviews from "./components/client-reviews";
import Cover from "./components/cover";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Reasons from "./components/reasons";
import Services from "./components/services";

export default function Home() {
  return (
    <>
      <Cover />
      <Intro />
      <Services />
      <Reasons />
      <ClientReviews />
      <Footer />
    </>
  );
}
