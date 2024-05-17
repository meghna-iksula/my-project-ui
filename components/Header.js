import React from "react";
import NavMenu from "./NavMenu";

const Header = ({ homePage, navMenu }) => {
  return (
    <header class="text-gray-600 bg-slate-50 body-font">
      <div class="container mx-auto flex flex-wrap p-8 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            class="w-36"
            src={
              "http://localhost:1337" +
              homePage.data.attributes.logo.data.attributes.url
            }
          ></img>
        </a>
        <NavMenu navMenu={navMenu} />
        <button class="inline-flex items-center bg-black text-white border-0 py-1 px-3 focus:outline-none hover:bg-slate-700 rounded text-base mt-4 md:mt-0">
          Sign In
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
