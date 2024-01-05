import { Link, NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/logoTas.png";
import { PropTypes } from "prop-types";
import SearchBar from "../components/header/SearchBar";
import UserProfile from "../components/header/UserProfile";
import { useEffect, useState } from "react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import Cart from "../components/header/Cart";
function Header() {
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollDelta = currentScrollPos - prevScrollPos;

      // Check if scrolling down or up and update animation accordingly
      if (scrollDelta > 0) {
        controls.start({ opacity: 0, y: -50 });
      } else if (scrollDelta < 0) {
        controls.start({ opacity: 1, y: 0 });
      }

      setPrevScrollPos(currentScrollPos);
    };
    // Clear the timeout if the Y coordinate changes
    clearTimeout(timeoutId);

    // Set a timeout to hide the header after 3 seconds of inactivity
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 0) {
      timeoutId = setTimeout(() => {
        controls.start({ opacity: 0, y: -50 });
      }, 3000);
    }
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [controls, prevScrollPos]);

  const handleClickWindow = () => {
    // setSearchQueryActive(false);
    // setSearchGenresActive(false);
    window.scrollTo(0, 0);
  };

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };
  const NavbarLink = ({ to, children }) => (
    <NavLink
      to={to}
      onClick={handleClickWindow}
      className={({ isActive }) => (isActive ? " text-[#25AAE1]" : undefined)}
    >
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        {children}
      </motion.li>
    </NavLink>
  );
  const navbar = (
    <>
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/About">Product</NavbarLink>
      <NavbarLink to="/Contact">Contact</NavbarLink>
    </>
  );

  NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-[#CCCCCC] dark:bg-[#333333] w-full h-min mx-auto dark:text-white  flex flex-row justify-between items-center p-2 sticky top-0 z-10"
    >
      <Link
        to="/"
        className="hidden md:flex flex-row justify-center items-center gap-2"
      >
        <img src={logo} alt="logo" className=" w-10 h-10" />
        <h1 className="text-2xl flex ">
          Toko
          <p className="font-bold bg-gradient-to-r from-[#EF5396] via-transparent to-[#25AAE1] text-transparent bg-clip-text">
            Kita
          </p>
        </h1>
      </Link>
      <span
        className={`${
          isMenuOpen ? "bg-black" : ""
        } mr-auto sm:hidden rounded-lg bg-transparent p-2 text-white`}
      >
        <button className="" aria-hidden="true" onClick={handleClickMenu}>
          <motion.div
            initial={false}
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <HiMiniXMark className="w-6 h-6" />
            ) : (
              <HiBars3 className="w-6 h-6" />
            )}
          </motion.div>
        </button>
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-auto min-w-auto text-lg flex flex-col gap-4 absolute mt-3 left-4 bg-[#CCCCCC] dark:bg-[#222222] p-4 rounded-b-md rounded-tr-md shadow-md"
          >
            {navbar}
          </motion.ul>
        )}
      </span>
      <motion.ul
        className={`sm:flex flex-row list-none gap-3 hidden  ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navbar}
      </motion.ul>
      <SearchBar />
      <div className=" flex flex-row items-center gap-3">
        <Cart />
        <UserProfile />
      </div>
    </motion.header>
  );
}

export default Header;
