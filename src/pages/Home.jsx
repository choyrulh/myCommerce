import CardContainer from "../fragments/CardContainer";
import HeroSection from "./../components/Hero";
import HeroProduct from "../components/HeroProduct";
import CategoryFrag from "../components/header/CategoryFrag";

function Home() {
  return (
    <div className="w-full ml-auto ">
      <HeroProduct />
      <CategoryFrag />
      <HeroSection />
      <CardContainer />
    </div>
  );
}

export default Home;
