import { useParams } from "react-router-dom";
import Filter from "./../fragments/Filter";
import { getProductByCategory } from "../Service/api";
import { useEffect, useState } from "react";
import CardProduct from "./../components/CardProduct";

function CategoriesPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchProductsByCategory() {
      setIsFetching(true);
      try {
        const response = await getProductByCategory(params.category);
        // const data = await response.JSON.stringify;
        setProduct(response.products);
        // convert data to array
        // setProduct(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setIsFetching(false);
    }
    fetchProductsByCategory();
  }, [params.category]);

  console.log("product is: ", product);
  console.log(params.category);
  return (
    <div>
      <Filter />
      {isFetching && <p>Loading...</p>}
      {!isFetching && product.length === 0 && (
        <p className="text-center text-3xl mt-5">
          {params.category} category products not found.
        </p>
      )}
      {!isFetching && product.length > 0 && (
        <article className="list-none w-full p-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          {product.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              title={product.title}
              images={product.thumbnail}
              price={product.price}
              itemId={product.id}
            />
          ))}
        </article>
      )}
    </div>
  );
}

export default CategoriesPage;
