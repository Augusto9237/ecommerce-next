export function Header() {
  return (
    <header className="bg-white flex justify-center max-sm:p-3 p-8 shadow-[0_25px_64px_-40px_rgba(0,0,0,0.2)]">

      <div className="flex w-full max-sm:flex-col max-sm:gap-1 justify-between gap-6 items-center max-w-[1160px]">
        <strong className="font-bold text-2xl leading-relaxed text-blue-600">
          Cosmo
        </strong>

        <div className="max-sm:hidden flex flex-1 gap-4 items-center">
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

        <div className="flex max-sm:gap-4 w-full gap-6">
          <input type="text" placeholder="Search" className="flex flex-1 border border-gray-400 rounded-lg p-1" />

          <button className="flex p-1 rounded-lg border border-gray-400 gap-1">
            🛒 <span>0</span>
          </button>

          <div className="flex p-1 px-1.5 rounded-full bg-gray-300">
            <span>
              🙎‍♂️
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
