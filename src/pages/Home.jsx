import CardContainer from "../fragments/CardContainer";
import HeroSection from "./../components/Hero";
import HeroProduct from "../components/HeroProduct";
import CategoryFrag from "../components/header/CategoryFrag";
import { getAllProducts } from "./../Service/api";
import CardProduct from "./../components/CardProduct";
import { useFetch } from "./../hooks/useFetch";

function Home() {
  const { isFetching, fetchedData, error } = useFetch(getAllProducts, []);
  return (
    <div className="w-full ml-auto ">
      <HeroProduct />
      <CategoryFrag />
      <HeroSection />
      <CardContainer>
        {fetchedData.map(
          (product, index) =>
            index < 5 && (
              <CardProduct
                key={product.id}
                product={product}
                title={product.title}
                images={product.thumbnail}
                price={product.price}
              />
            )
        )}
      </CardContainer>
    </div>
  );
}

export default Home;
