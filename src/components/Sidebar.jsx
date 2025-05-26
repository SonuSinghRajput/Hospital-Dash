import { FaHome, FaCalendarAlt, FaHistory, FaStethoscope, FaComments, FaCog,FaSlidersH } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg px-6 py-8 flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-blue-600 mb-12">Health<span className="text-black">care.</span></h1>
        <nav className="space-y-8">
          <div>
            <h2 className="text-sm text-gray-400 uppercase mb-2">General</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"><FaHome /><span>Dashboard</span></li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"><FaHistory /><span>History</span></li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"><FaCalendarAlt /><span>Calendar</span></li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"><FaStethoscope /><span>Appointments</span></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm text-gray-400 uppercase mb-2">Tools</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"><FaComments /><span>Chat</span></li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer"><FaCog /><span>Support</span></li>
            </ul>
          </div>          
        </nav>
      </div>
       {/* Bottom Section - Setting */}
      <div className="pt-8 border-t">
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaSlidersH />
            <span>Setting</span>
          </li>
        </ul>
      </div>
    </div>
  );
}