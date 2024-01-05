import DarkModeToggle from "./../components/header/DarkModeToggle";
function Aside() {
  return (
    <>
      <aside className="fixed w-1/12 h-screen hidden md:block">
        <div className="p-4">
          <h1 className="dark:text-white">User Profil</h1>
          <hr className="border-gray-300 my-2" />
          <ul className="dark:text-white">
            <li>My Profile</li>
            <li>Account</li>
            <li>Logout</li>
          </ul>
          <hr className="border-gray-300 my-2" />
          <h1 className="dark:text-white">Settings</h1>
          <hr className="border-gray-300 my-2" />
          <h1 className="dark:text-white">Wishlist</h1>
          <hr className="border-gray-300 my-2" />
          <DarkModeToggle />
          <hr className="border-gray-300 my-2" />
        </div>
      </aside>
    </>
  );
}

export default Aside;
