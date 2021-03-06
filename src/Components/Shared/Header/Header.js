import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLink = (
    <>
      <li>
        <Link to="/todo">To-Do</Link>
      </li>
      <li>
        <Link to="/completedtasks">Completed Tasks</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
    </>
  );
  return (
    <header className="bg-[#1d283a]">
      <div className="px-16 max-w-7xl mx-auto">
        <div class="navbar ">
          <div class="navbar-start">
            <div class="dropdown">
              <label tabindex="0" class="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabindex="0"
                class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLink}
              </ul>
            </div>
            <Link to="/" class="btn btn-ghost normal-case text-xl">
              Todo APP
            </Link>
          </div>
          <div class="navbar-end hidden lg:flex">
            <ul class="menu menu-horizontal p-0">{navLink}</ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
