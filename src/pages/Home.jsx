import CardContainer from "../fragments/CardContainer";
import Filter from "./../fragments/Filter";
import HeroSection from "./../components/Hero";
import HeroProduct from "../components/HeroProduct";

function Home() {
  return (
    <div className="w-full ml-auto ">
      <HeroProduct />
      <HeroSection />
      <Filter />
      <CardContainer />
    </div>
  );
}

export default Home;
