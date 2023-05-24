import Link from "next/link";
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

export function Header() {
  return (
    <header className="bg-background-50 max-h-[90px] flex justify-center max-sm:p-3 p-5">

      <div className="flex flex-1 w-full justify-between max-sm:flex-col max-sm:gap-1  gap-6 items-center max-w-[1200px]">
        <div className="flex flex-row gap-4 text-detailsPrimary-100">
          <button className="bg-detailsPrimary-100/10 flex flex-row items-center justify-center rounded-lg w-12 h-12">
            <FiMenu size={24} />
          </button>
          <strong className="font-bold text-3xl leading-relaxed">
            MegaStore
          </strong>
        </div>


        <div className="flex max-sm:gap-4 flex-1 justify-end items-center">
          <div className="relative flex w-full max-h-12 mr-7 rounded-lg text-detailsPrimary-100 max-w-[600px] bg-detailsPrimary-100/10">
            <FiSearch className="absolute left-4 top-4" />
            <input type="text" placeholder="Search" className="flex flex-1 w-full h-12 pl-10 bg-background-50/0 focus:ring-none" />
            <FiMenu className="absolute right-4 top-4" />
          </div>
          <div className="relative flex justify-between items-center text-detailsPrimary-100">
            <Link href='/' className="flex items-center gap-1 pr-5 border-r-2 border-solid border-detailsSecondary-100/30">
              <FiUser size={24}/>
              <span className="text-detailsSecondary-100 text-base font-medium">Sign Up/Sign In</span>
            </Link>
            <button className="flex p-1 pl-5 rounded-lg border border-gray-400 gap-1">
              <FiShoppingCart size={24} />
              <span className="text-detailsSecondary-100 text-base font-medium">Cart</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
