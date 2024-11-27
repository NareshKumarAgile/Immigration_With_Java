import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      {/* Top container for the message */}
      <div className="bg-trueGray-50 text-blue-600 text-center h-[62px] flex items-center sm:ml-[150px]">
        <span className="font-inter text-sm font-normal leading-[22.4px] text-center">
          <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
          Need quick response? Call us: +1234567890
        </span>
      </div>

      <nav className="w-full top-0 left-0 border-0 z-10 bg-blue-700 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 sm:p-0">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="#" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
          </Link>

          {/* Collapsed Menu Button for Mobile View */}
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

          {/* Navigation Menu */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isCollapsed ? 'hidden' : ''}`}>
            <ul className="flex flex-col font-semibold text-lg p-2 md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:border-1 sm:ml-52">
              <li>
                <Link to="/" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-white md:hover:bg-transparent md:hover:text-white md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
