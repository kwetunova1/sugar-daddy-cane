"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const ClientNavbar = () => {
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
            toggle ? "flex" : "hidden"
          } lg:hidden shadow-lg absolute sidebar bg-[#758824]
          flex-col p-6 top-20 right-0 mx-4 min-w-[140px] rounded-xl z-30 gap-8`}
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
    </>
  );
};

export default ClientNavbar;
