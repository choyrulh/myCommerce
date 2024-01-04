import { HiAdjustmentsHorizontal } from "react-icons/hi2";

function Filter() {
  return (
    <>
      <span className="cursor-pointer">
        <HiAdjustmentsHorizontal className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        <p className="sr-only">Filter</p>
      </span>
    </>
  );
}

export default Filter;
