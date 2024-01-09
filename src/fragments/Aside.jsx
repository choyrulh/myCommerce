import DarkModeToggle from "./../components/header/DarkModeToggle";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiBars3, HiMiniArrowDown } from "react-icons/hi2";
import { Link } from "react-router-dom";
function Aside() {
  const controls = useAnimation();
  const outsideRef = useRef(null);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    let handler = (event) => {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsOpenSideBar(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [outsideRef]);
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
        {isOpenSideBar ? null : <HiBars3 onClick={toggleSidebar} />}
      </motion.button>
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={controls}
        transition={{ duration: 0.3 }}
        ref={outsideRef}
        className={`${
          isOpenSideBar ? "block" : "hidden"
        } mt-1 ml-6 z-10 fixed ${
          isOpenSideBar ? "w-1.5/12" : "w-0"
        } h-screen mt-1 hidden md:block transition-all duration-300 pr-2 backdrop-blur-sm font-semibold`}
      >
        {isOpenSideBar && (
          <div className="w-full">
            <button
              onClick={toggleDropdown}
              className="dark:text-white w-full flex flex-row items-center"
            >
              <p className="mr-auto">Profile</p>
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
            {isOpen && <hr className="border-gray-300 my-2" />}
            {isOpen && (
              <motion.ul
                className="dark:text-white flex flex-col gap-2 px-2"
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
              >
                <Link className="hover:bg-[#CCCCCC] hover:text-black p-1 rounded-md transition-all ease-in-out duration-3000">
                  <li>Profile</li>
                </Link>
                <Link className="hover:bg-[#CCCCCC] hover:text-black p-1 rounded-md transition-all ease-in-out duration-3000">
                  <li>Account</li>
                </Link>
                <Link className="hover:bg-[#CCCCCC] hover:text-black p-1 rounded-md transition-all ease-in-out duration-3000">
                  <li>Sign in</li>
                </Link>
                <Link className="hover:bg-[#CCCCCC] hover:text-black p-1 rounded-md transition-all ease-in-out duration-3000">
                  <li>Sign up</li>
                </Link>
              </motion.ul>
            )}

            <hr className="border-gray-300 my-2" />
            <Link
              to="/settings"
              className="dark:text-white w-full flex flex-row items-center hover:bg-[#CCCCCC] hover:text-black rounded-md transition-all ease-in-out duration-3000"
            >
              <p className="mr-auto">Settings</p>
            </Link>
            <hr className="border-gray-300 my-2" />
            <Link
              to="/Filter"
              className="dark:text-white w-full flex flex-row items-center hover:bg-[#CCCCCC] hover:text-black rounded-md transition-all ease-in-out duration-3000"
            >
              <p className="mr-auto">Filter</p>
            </Link>
            <hr className="border-gray-300 my-2" />
            <DarkModeToggle />
            <hr className="border-gray-300 my-2" />
          </div>
        )}
      </motion.aside>
    </>
  );
}

export default Aside;
