import React from "react";

const NavMenu = ({ navMenu }) => {
  return (
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      {navMenu &&
        navMenu.data.map((link) => {
          return <a class="mr-5 hover:text-gray-900">{link.attributes.link}</a>;
        })}
    </nav>
  );
};

export default NavMenu;
