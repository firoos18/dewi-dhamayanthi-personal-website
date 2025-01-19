import Cover from "./components/cover";
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
    </>
  );
}
