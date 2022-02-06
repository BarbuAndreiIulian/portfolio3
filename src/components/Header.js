import React from "react";
import burger from "../assets/burger.svg";

const Header = () => {
  return (
    <div class="flex justify-between items-center md:px-16 lg:px-32 px-10 pt-10">
      <div>
        <h3 class="text-2xl">Barbu.andrei</h3>
      </div>

      <div class="md:hidden">
        <img src={burger} class="w-10" />
      </div>

      <div class="hidden md:block ">
        <ul class="flex justify-between text-2xl">
          <li class="px-4">
            <a fref="#">Home</a>
          </li>
          <li class="px-4">
            <a fref="#">My work</a>
          </li>
          <li class="px-4">
            <a fref="#">CV</a>
          </li>
          <li class="pl-4">
            <a fref="#">Hire me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
