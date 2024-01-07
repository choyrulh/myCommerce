import { getAllProducts } from "../Service/api";
import CardProduct from "../components/CardProduct";
import Filter from "../fragments/Filter";
import { useFetch } from "../hooks/useFetch";
function ProductPage() {
  const { fetchedData: fetchProducts } = useFetch(getAllProducts, []);

  console.log(fetchProducts);
  return (
    <>
      <Filter />
      <article className="list-none w-full p-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {fetchProducts.map((product) => (
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
    </>
  );
}

export default ProductPage;
