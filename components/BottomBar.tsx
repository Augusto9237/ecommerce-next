import { RiHome3Fill, RiSearchFill, RiShoppingCartFill, RiUser3Fill } from "react-icons/ri";

export function BottomBar() {
    return (
        <footer className="fixed bottom-0 bg-white flex w-full border-t border-gray-300 p-4">
            <div className="flex max-w-[850px] w-full mx-auto justify-between px-2">
                <button className="flex text-gray-600 text-2xl hover:text-blue-600">
                    <RiHome3Fill />
                </button>

                <button className="flex text-gray-600 text-2xl hover:text-blue-600">
                    <RiSearchFill />
                </button>

                <button className="flex text-gray-600 text-2xl hover:text-blue-600">
                    <RiShoppingCartFill />
                </button>

                <button className="flex text-gray-600 text-2xl hover:text-blue-600">
                    <RiUser3Fill />
                </button>
            </div>
        </footer>
    );
}