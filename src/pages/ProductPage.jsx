import { getAllProducts } from "../Service/api";
import CardProduct from "../components/CardProduct";
import Filter from "../fragments/Filter";
import { useFetch } from "../hooks/useFetch";
function ProductPage() {
  const { isFetching, fetchedData, error } = useFetch(getAllProducts, []);

  console.log(fetchedData);
  return (
    <>
      <Filter />
      <article className="list-none w-full p-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {fetchedData.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            title={product.title}
            images={product.thumbnail}
            price={product.price}
          />
        ))}
      </article>
    </>
  );
}

export default ProductPage;
