import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Spinner() {
    return (
        <div className="flex items-center justify-center w-full h-full flex-grow gap-2">
            <AiOutlineLoading3Quarters className="animate-spin w-10 h-10 text-detailsPrimary-100" data-testid="spinner" />
        </div>
    );
}

