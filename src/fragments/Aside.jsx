function Aside() {
  return (
    <>
      <aside className="fixed w-1/5 h-screen hidden md:block">
        <div className="p-4">
          <h1 className="text-white">Menu</h1>
          <hr className="border-gray-300 my-2" />
          <ul className="text-white">
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
          <hr className="border-gray-300 my-2" />
          <h1 className="text-white">Menu 4</h1>
          <hr className="border-gray-300 my-2" />
          <h1 className="text-white">Menu 5</h1>
          <hr className="border-gray-300 my-2" />
          <h1 className="text-white">Menu 6</h1>
          <hr className="border-gray-300 my-2" />
        </div>
      </aside>
    </>
  );
}

export default Aside;
