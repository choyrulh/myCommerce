import Categories from "../components/Categories";
import FilterBy from "../components/FilterBy";

function Filter() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <FilterBy />
      <Categories />
    </div>
  );
}

export default Filter;
