import Banner from "../components/Banner";

import Aside from "../fragments/Aside";
import CardContainer from "../fragments/CardContainer";
import Filter from "./../fragments/Filter";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <Aside />
        <div className="w-full md:w-4/5 ml-auto">
          <Banner />
          <Filter />
          <CardContainer />
        </div>
      </div>
    </>
  );
}

export default Home;
