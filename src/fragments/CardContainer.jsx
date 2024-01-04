import CardProduct from "../components/CardProduct";

function CardContainer() {
  return (
    <>
      <div className=" w-full p-3 right-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </>
  );
}

export default CardContainer;
