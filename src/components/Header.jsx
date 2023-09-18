import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/solid";


const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center mx-24 py-4">
        <Link to="/" className="inline-flex items-center gap-2">
          <BoltIcon className="w-8 h-8 text-blue-500" />
          <span className="text-gray-800 text-2xl font-bold tracking-wide">
            Next Page
          </span>
        </Link>
        <ul className="flex justify-between gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500 underline underline-offset-4" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-blue-500 underline underline-offset-4" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 underline underline-offset-4" : ""
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
