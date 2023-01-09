import { FaHippo } from "react-icons/fa";
import { TbNotes } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { FaPencilRuler } from "react-icons/fa";
import { BsCloudFill } from "react-icons/bs";

function Sidebar() {
  return (
    <aside className="w-72 relative h-screen top-0" aria-label="Sidebar">
      <div className="bg-slate-50 overflow-y-auto py-12 px-8 bg-white h-screen">
        <ul className="space-y-4">
          <li>
            <p className="text-gray-500 text-lg font-bold bg-white rounded-2xl flex items-center pl-3 py-3 ">
              <span className="text-2xl p-3 text-gray rounded-xl mr-4">
                <FaHippo />
              </span>
              Hippomemo
            </p>
          </li>
          <li>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 bg-white drop-shadow-xl hover:bg-gray-200 rounded-2xl flex items-center pl-3 py-3 "
                  : "rounded-2xl text-gray-500 hover:bg-gray-200  flex items-center p-3 text-base font-normal"
              }>
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 p-3 text-white rounded-xl mr-4">
                <TbNotes />
              </span>
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 bg-white drop-shadow-xl hover:bg-gray-200 rounded-2xl flex items-center pl-3 py-3 "
                  : "rounded-2xl text-gray-500 hover:bg-gray-200  flex items-center p-3 text-base font-normal"
              }>
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 p-3 text-white rounded-xl mr-4">
                <FaPencilRuler />
              </span>
              To Do List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-500 bg-white drop-shadow-xl hover:bg-gray-200 rounded-2xl flex items-center pl-3 py-3 "
                  : "rounded-2xl text-gray-500 hover:bg-gray-200  flex items-center p-3 text-base font-normal"
              }>
              <span className="bg-gradient-to-r from-rose-500 to-purple-500 p-3 text-white rounded-xl mr-4">
                <BsCloudFill />
              </span>
              Weather
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
