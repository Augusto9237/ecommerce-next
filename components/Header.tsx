export function Header() {
  return (
    <header className="flex justify-center p-8">
    <div className="flex flex-1 justify-between items-center max-w-[850px]">
      <strong className="font-bold text-2xl leading-relaxed text-blue-600">
        Cosmo
      </strong>

      <div className="flex gap-6 items-center">
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
   
      <input type="text" placeholder="Search"  className="border border-gray-400 rounded-lg p-1"/>

      <button className="flex p-1 rounded-lg border border-gray-400 gap-1">
        🛒 <span>0</span>
       </button>

       <div className="flex p-1 px-1.5 rounded-full bg-gray-300">
        <span>
        🙎‍♂️
        </span>
       </div>

       </div>
    </header>
  );
}
