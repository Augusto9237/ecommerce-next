'use client'
import Link from "next/link";
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { NavigationBarCategories } from "./NavigationBarCateogries";
import { useContext } from "react";
import { ContextGlobals } from "../context/contextGlobals";

export function Header() {
  const { setSidebarState, sidebarState } = useContext(ContextGlobals)
  return (
    <header className="fixed z-50 w-full bg-background-50 flex flex-col justify-center max-sm:border-b-[1px] border-border-100 border-solid ">
      <div className="flex flex-1 mx-auto w-full justify-between max-sm:flex-col max-sm:gap-2  gap-6 items-center max-w-[1200px] max-sm:p-3 p-5">
        <div className="relative flex flex-row gap-4 text-detailsPrimary-100 max-sm:flex-1 max-sm:w-full">
          <button onClick={() => setSidebarState(sidebarState === false ? true : false)} className="absolute top-2 bg-detailsPrimary-100/10 flex  flex-row items-center justify-center rounded-lg w-9 h-9 sm:hidden ">
            <FiMenu size={24} />
          </button>
          <Link href="/" className="max-sm:mx-auto">
            <strong className="font-bold text-3xl leading-relaxed">
              MegaStore
            </strong>
          </Link>
        </div>


        <div className="flex flex-1 w-full justify-end items-center max-sm:justify-between">
          <div className="relative flex w-full max-h-12 mr-7 rounded-lg text-detailsPrimary-100 max-w-[600px] bg-detailsPrimary-100/10 max-sm:mr-4 flex-1 max-sm:h-8 ">
            <FiSearch className="absolute left-4 top-4 max-sm:top-2" />
            <input type="text" placeholder="Search" className="flex flex-1 w-full h-12 pl-10 bg-background-50/0 focus:ring-none max-sm:h-8" />
            <FiMenu className="absolute right-4 top-4 max-sm:top-2" />
          </div>
          <div className="relative flex justify-between items-center text-detailsPrimary-100">
            <Link href='/' className="flex items-center gap-1 pr-5 border-r-2 border-solid border-detailsSecondary-100/30 max-sm:pr-3">
              <FiUser size={24} />
              <span className="text-detailsSecondary-100 text-base font-medium max-sm:hidden">Sign Up/Sign In</span>
            </Link>
            <Link href='/cart' className="flex p-1 pl-5 rounded-lg border border-gray-400 gap-1 max-sm:pl-3">
              <FiShoppingCart size={24} />
              <span className="text-detailsSecondary-100 text-base font-medium max-sm:hidden">Cart</span>
            </Link>
          </div>
        </div>

      </div>
      <NavigationBarCategories />
    </header>
  );
}
