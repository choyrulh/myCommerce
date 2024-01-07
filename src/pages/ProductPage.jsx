import CardProduct from "../components/CardProduct";
import Filter from "../fragments/Filter";
function ProductPage() {
  return (
    <>
      <Filter />
      <article className="list-none w-full p-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </article>
    </>
  );
}

export default ProductPage;
