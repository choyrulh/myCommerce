import { NavLink } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/logo.png";
import { PropTypes } from "prop-types";
import SearchBar from "../components/header/SearchBar";
import UserProfil from "../components/header/UserProfil";
import { useEffect, useState } from "react";

function Header() {
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
    timeoutId = setTimeout(() => {
      controls.start({ opacity: 0, y: -50 });
    }, 3000);
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

  // const handleClickMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  //   console.log(isMenuOpen);
  // };
  const NavbarLink = ({ to, children }) => (
    <NavLink
      to={to}
      onClick={handleClickWindow}
      className={({ isActive }) => (isActive ? "text-cyan-500" : undefined)}
    >
      <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.0 }}>
        {children}
      </motion.li>
    </NavLink>
  );
  NavbarLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-slate-600 w-full h-min text-white flex flex-row justify-between items-center p-2 sticky top-0 z-10"
    >
      <img src={logo} alt="logo" className=" w-10 h-10" />
      <nav className="flex flex-row list-none gap-3">
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/About">Product</NavbarLink>
        <NavbarLink to="/Contact">Contact</NavbarLink>
      </nav>
      <SearchBar />

      <UserProfil />
    </motion.header>
  );
}

export default Header;
