import CardContainer from "../fragments/CardContainer";
import HeroSection from "./../components/Hero";
import HeroProduct from "../components/HeroProduct";
import CategoryFrag from "../components/header/CategoryFrag";
import { getAllProducts } from "./../Service/api";
import CardProduct from "./../components/CardProduct";
import { useFetch } from "./../hooks/useFetch";

function Home() {
  const { fetchedData } = useFetch(getAllProducts, []);
  return (
    <div className="w-full ml-auto ">
      <HeroProduct />
      <CategoryFrag />
      <HeroSection />
      <CardContainer label="Featured Products">
        {fetchedData.map(
          (product, index) =>
            index < 5 && (
              <CardProduct
                key={product.id}
                product={product}
                title={product.title}
                images={product.thumbnail}
                price={product.price}
                itemId={product.id}
              />
            )
        )}
      </CardContainer>
    </div>
  );
}

export default Home;
