"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      setActive(pathname);
    }
  }, [pathname]);

  return (
    <>
      <div className="flex justify-between h-16 py-2">
        <div className="flex items-center">
          <p className="text-2xl font-bold">SugarDaddyCane</p>
        </div>

        <ul className="hidden lg:flex items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`
                font-light
                cursor-pointer
                text-sm
                list-none
                ${active === `/${nav.id}` ? "text-white" : "text-black"}
                ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
              `}
              onClick={() => setActive(`/${nav.id}`)}
            >
              <Link
                href={`/${nav.id}`}
                className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-yellow-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          >
            {toggle ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Mobile menu */}
          <div
            className={`${
              toggle ? "block" : "hidden"
            } lg:hidden bg-blue-50 shadow-lg absolute sidebar top-16 right-0 left-0 z-20`}
          >
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`
                font-semibold
                cursor-pointer
                text-sm
                ${active === `/${nav.id}` ? "text-white" : "text-black"}
                ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
              `}
                  onClick={() => setActive(`/${nav.id}`)}
                >
                  <Link
                    href={`/${nav.id}`}
                    className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-lightBlue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
