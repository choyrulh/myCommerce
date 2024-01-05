import Aside from "../fragments/Aside";
import CardContainer from "../fragments/CardContainer";
import Filter from "./../fragments/Filter";
import Hero from "./../components/Hero";

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
    </>
  );
}

export default Home;
