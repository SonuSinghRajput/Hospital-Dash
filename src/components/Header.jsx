
import { Bell } from "lucide-react"; 
import SearchBox from "./SearchBox";
import profileImg from "../assets/download.jpg";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow">
      
      <div className="flex items-center gap-10">
        <SearchBox />
      </div>

      
      <div className="flex items-center space-x-4">
        
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600" />
          
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

       
        <div className="w-10 h-10 rounded-lg bg-gray-300 overflow-hidden">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <span className="font-bold">+</span>
        </button>
      </div>
    </div>
  );
}
