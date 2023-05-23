import { FiMenu, FiSearch, FiUser } from "react-icons/fi";

export function Header() {
  return (
    <header className="bg-background-50 max-h-[90px] flex justify-center max-sm:p-3 p-5">

      <div className="flex flex-1 w-full justify-between max-sm:flex-col max-sm:gap-1  gap-6 items-center max-w-[1200px]">
        <div className="flex flex-row gap-4 text-detailsPrimary-100">
          <button className="bg-detailsPrimary-100/10 flex flex-row items-center justify-center rounded-lg w-12 h-12">
            <FiMenu size={24}/>
          </button>
          <strong className="font-bold text-3xl leading-relaxed">
            MegaStore
          </strong>
        </div>


        <div className="flex max-sm:gap-4 flex-1 justify-end">
          <div className="relative flex w-full max-h-12 rounded-lg text-detailsPrimary-100 max-w-[600px] bg-detailsPrimary-100/10">
            <FiSearch className="absolute left-4 top-3" />
            <input type="text" placeholder="Search" className="flex flex-1 w-full p-2 pl-10 bg-background-50/0 focus:ring-none" />
            <FiMenu className="absolute right-4 top-3" />
          </div>

          <button className="flex p-1 rounded-lg border border-gray-400 gap-1">
            🛒 <span>0</span>
          </button>

          <div className="flex p-1 px-1.5 rounded-full bg-gray-300">
            <span>
            <FiUser/>
            </span>
          </div>
        </div>

        <div className="max-sm:flex sm:hidden gap-6 items-center">
          <span className="text-gray-700 text-lg ">
            Sales
          </span>
          <span className="text-gray-700 text-lg">
            Hoodie
          </span>
          <span className="text-gray-700 text-lg">
            Fashion
          </span>
        </div>

      </div>
    </header>
  );
}
