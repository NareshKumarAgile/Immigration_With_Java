import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

// bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-20% to-emerald-500 to-80%
// bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500
// bg-gradient-to-r from-orange-500 via-green-500 to-amber-500
// bg-gradient-to-r from-orange-500 via-lime-500 to-amber-500
  return (
    <div>
      <nav className="fixed w-full top-0 left-0 border-0 z-10 
      bg-gradient-to-r from-orange-400 via-red-600 to-yellow-500">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="#" className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Link to="/">
            <button type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
          </Link>
            <button type="button" onClick={toggleCollapse} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded={isCollapsed ? "false" : "true"}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isCollapsed ? 'hidden' : ''}`}>
            <ul className="flex flex-col font-semibold text-lg p-2 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-1">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li>
              {/* <li>
                <Link to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;