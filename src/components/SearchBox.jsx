import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm w-full max-w-md">
      <Search className="w-5 h-5 text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search"
        className="w-full outline-none bg-transparent text-sm text-gray-700"
      />
    </div>
  );
}

