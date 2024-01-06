import DarkModeToggle from "./../components/header/DarkModeToggle";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiBars3, HiMiniArrowDown, HiMiniArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Aside() {
  const controls = useAnimation();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDelta = currentScrollPos - prevScrollPos;

      if (scrollDelta > 0) {
        controls.start({ opacity: 0, x: -20 });
      } else if (scrollDelta < 0) {
        controls.start({ opacity: 1, x: 0 });
      }

      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, prevScrollPos]);
  const toggleSidebar = () => {
    setIsOpenSideBar(!isOpenSideBar);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.7, ease: "easeIn" },
    },
  };
  const arrowVariants = {
    initial: { rotate: 0, y: 0 },
    rotated: { rotate: 180, y: 0.5 },
  };
  return (
    <>
      <motion.button
        className="ml-1 mt-1 fixed h-fit w-fit bg-[#E1E7F0] dark:bg-[#222222] shadow-md rounded-sm z-20 dark:text-white text-3xl"
        initial="visible"
        animate={controls}
        variants={buttonVariants}
      >
        {isOpenSideBar ? (
          <HiMiniArrowLeft onClick={toggleSidebar} />
        ) : (
          <HiBars3 onClick={toggleSidebar} />
        )}
      </motion.button>
      <aside
        className={`${
          isOpenSideBar ? "block" : "hidden"
        } mt-4 ml-6 z-10 fixed ${
          isOpenSideBar ? "w-1.5/12" : "w-0"
        } h-screen mt-3 hidden md:block transition-all duration-300 pr-2 backdrop-blur-sm font-semibold`}
      >
        {isOpenSideBar && (
          <sidebar className="p-2">
            <button
              onClick={toggleDropdown}
              className="dark:text-white w-full flex flex-row  items-center"
            >
              <p className="mr-auto">User</p>
              <motion.span
                variants={arrowVariants}
                initial="initial"
                animate={isOpen ? "rotated" : "initial"}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                className="inline-block"
              >
                <HiMiniArrowDown className="ml-auto h-4 w-4" />
              </motion.span>
            </button>
            <hr className="border-gray-300 my-2" />
            {isOpen && (
              <motion.ul
                className="dark:text-white"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
              >
                <Link>
                  <li>My Profile</li>
                </Link>
                <Link>
                  <li>Account</li>
                </Link>
                <Link>
                  <li>Logout</li>
                </Link>
                <hr className="border-gray-300 my-2" />
              </motion.ul>
            )}

            <Link to="/settings" className="dark:text-white">
              Settings
            </Link>
            <hr className="border-gray-300 my-2" />
            <Link
              to="/wishlist"
              className="dark:text-white w-full flex flex-row  items-center"
            >
              <p className="mr-auto">Filter</p>
            </Link>
            <hr className="border-gray-300 my-2" />
            <DarkModeToggle />
            <hr className="border-gray-300 my-2" />
          </sidebar>
        )}
      </aside>
    </>
  );
}

export default Aside;
