import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSearchByQuery } from "../Service/api";
import CardContainer from "../fragments/CardContainer";
import CardProduct from "./../components/CardProduct";
function SearchPages() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  console.log("ini params ", params);
  useEffect(() => {
    async function fetchProductsByQuery() {
      setIsFetching(true);
      try {
        const response = await getSearchByQuery(params.query);
        if (response && response.products) {
          setProduct(response.products);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setIsFetching(false);
    }

    fetchProductsByQuery();
  }, [params.query]);

  console.log("product is: ", product);
  return (
    <>
      <CardContainer label="Search Result">
        {isFetching && <p>Loading...</p>}
        {!isFetching && product.length === 0 && (
          <p>No results found for query: {params.query}</p>
        )}
        {!isFetching && product.length > 0 && (
          <>
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
          </>
        )}
      </CardContainer>
    </>
  );
}

export default SearchPages;
