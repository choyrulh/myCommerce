// import { getAllProducts } from "../Service/api";
import { useEffect } from "react";
// import CardProduct from "../components/CardProduct";
import Filter from "../fragments/Filter";
// import { useFetch } from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchDataProducts } from "../store/features/apiSlice";
import CardProduct from "../components/CardProduct";
function ProductPage() {
  const results = useSelector((state) => state.product.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataProducts());
  }, [dispatch]);

  console.log(results);
  return (
    <>
      <Filter />
      <article className="list-none w-full p-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {results ? (
          results.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              title={product.title}
              images={product.thumbnail}
              price={product.price}
              itemId={product.id}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </article>
    </>
  );
}

export default ProductPage;
