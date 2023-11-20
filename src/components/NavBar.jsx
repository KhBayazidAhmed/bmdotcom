import React from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

function navBar() {
  return (
    <div className="text-gray-600 bg-white w-full body-font z-50 md:fixed">
      <div className="  container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Logo color="text-gray-600" />
        <nav className="  md:ml-auto flex flex-wrap items-center  text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="service" className="mr-5 hover:text-gray-900">
            Service we offer
          </Link>
          <Link href="offers" className="mr-5 hover:text-gray-900">
            Offers
          </Link>
          <Link href="contact_us" className="mr-5 hover:text-gray-900">
            Contact us
          </Link>
        </nav>
        <button className="inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-400 rounded text-base mt-4 md:mt-0">
          Partner Program
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default navBar;
