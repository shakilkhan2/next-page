import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from "@heroicons/react/24/solid";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="flex justify-between items-center mx-24 py-4">

        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center gap-2">
          <BoltIcon className="w-8 h-8 text-blue-500" />
          <span className="text-gray-800 text-2xl font-bold tracking-wide">
            Next Page
          </span>
        </Link>

        {/* Menu Items */}
        <ul className="hidden lg:flex items-center gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-500 underline underline-offset-4" : "") }
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
              About us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Section */}
        <div className="lg:hidden">
<button aria-label="open menu" title="open menu" onClick={() => setIsMenuOpen(true)}>
  <Bars3BottomRightIcon className="w-5 text-gray-600"/>
</button>
{isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/books'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Books
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
