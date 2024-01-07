import { Link } from "react-router-dom";
import logo from "../assets/logoTas.png";
import instagram from "../assets/ig.png";
import github from "../assets/git.png";
import facebook from "../assets/fb.png";
import linkedlin from "../assets/linkedlin.png";
export const Footer = () => {
  const footerNavs = [
    {
      name: "About",
    },
    {
      name: "Blog",
    },
    {
      name: "",
    },
    {
      name: "Team",
    },
    {
      name: "Careers",
    },

    {
      name: "Suuport",
    },
  ];

  return (
    <footer className="text-gray-500 px-4 py-5 max-w-full mx-auto md:px-8 dark:bg-[#111111]">
      <div className="max-w-lg sm:mx-auto sm:text-center dark:text-white">
        <img src={logo} className="size-20 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industrys standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, index) => (
          <li key={index} className=" hover:text-gray-800 dark:text-white">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 dark:text-white">
          &copy; {new Date().getFullYear()} tokoKita All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-6 h-6 rounded-full flex items-center justify-center">
              <Link to="https://github.com/choyrulh">
                <img src={github} />
              </Link>
            </li>

            <li className="w-6 h-6 rounded-full flex items-center justify-center">
              <Link to="https://www.facebook.com/choyrul7">
                <img src={facebook} />
              </Link>
            </li>

            <li className="w-6 h-6 rounded-full flex items-center justify-center">
              <Link to="https://www.instagram.com/choyrulh/">
                <img src={instagram} />
              </Link>
            </li>

            <li className="w-6 h-6 rounded-full flex items-center justify-center">
              <Link to="https://www.linkedin.com/in/choirul-humam-439055180/">
                <img src={linkedlin} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
