import Aside from "../fragments/Aside";
import CardContainer from "../fragments/CardContainer";
import Filter from "./../fragments/Filter";
import Hero from "./../components/Hero";
import { Footer } from "../fragments/Footer";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Aside />
        <div className="w-full md:w-11/12 ml-auto ">
          <Hero />
          <Filter />
          <CardContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
