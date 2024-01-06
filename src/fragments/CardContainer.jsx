import CardProduct from "../components/CardProduct";

function CardContainer() {
  return (
    <section className="w-full mt-5 shadow-inner rounded-md shadow-[#B3B3B3] dark:shadow-[#222222]">
      <h1 className="p-2 text-3xl font-bold text-gray-800 dark:text-white">
        Today Recommend
      </h1>
      <ul className="list-none w-full p-3 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </ul>
    </section>
  );
}

export default CardContainer;
