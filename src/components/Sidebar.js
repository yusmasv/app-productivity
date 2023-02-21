import { SlNotebook } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { SlPuzzle } from "react-icons/sl";
import { AiOutlineCloud } from "react-icons/ai";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { BsQuestionCircle } from "react-icons/bs";

function Sidebar() {
  return (
    <aside className="w-60 relative h-screen top-0" aria-label="Sidebar">
      <div className="bg-white overflow-y-auto bg-white h-screen py-4 pl-2">
        <ul className="">
          <li>
            <p className="text-gray-700 text-xs font-bold bg-white rounded-2xl flex items-center pl-3 py-10">
              <img
                src="https://cdn-icons-png.flaticon.com/512/8804/8804795.png"
                alt="hippo-logo"
                className="w-10 h-10 mr-4 ml-3"
              />
              Memomo
            </p>
          </li>

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 py-3 px-3 pl-8 border-r-4 border-solid border-white border-r-gray-500 text-xs bg-white hover:bg-gray-100 flex items-center"
                  : "text-gray-400 py-3 px-3 pl-8 text-xs bg-white hover:bg-gray-100 flex items-center"
              }>
              <span className="text-gray-700 mr-4 text-lg">
                <HiOutlineInboxStack />
              </span>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 py-3 px-3 pl-8  border-r-4 border-solid border-white border-r-gray-500 text-xs bg-white hover:bg-gray-100 flex items-center"
                  : "text-gray-400 py-3 px-3 pl-8 text-xs bg-white hover:bg-gray-100 flex items-center"
              }>
              <span className="text-gray-700 mr-4 text-lg">
                <BsQuestionCircle />
              </span>
              Question
            </NavLink>
          </li>
          <li>
            <p className="px-4 py-6 ml-4 text-xs">WORKSCPACE</p>
          </li>
          <li>
            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 py-3 px-3 pl-8 border-r-4 border-solid border-white border-r-gray-500 text-xs bg-white hover:bg-gray-100 flex items-center"
                  : "text-gray-400 py-3 px-3 pl-8 text-xs bg-white hover:bg-gray-100 flex items-center"
              }>
              <span className="text-gray-700 mr-4 text-lg">
                <SlNotebook />
              </span>
              Notes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 py-3 px-3 pl-8 border-r-4 border-solid border-white border-r-gray-500 text-xs bg-white hover:bg-gray-100 flex items-center"
                  : "text-gray-400 py-3 px-3 pl-8 text-xs bg-white hover:bg-gray-100 flex items-center"
              }>
              <span className="text-gray-700 mr-4 text-lg">
                <SlPuzzle />
              </span>
              Your to-do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/weather"
              className={({ isActive }) =>
                isActive
                  ? "text-gray-800 py-3 px-3 pl-8 border-r-4 border-solid border-white border-r-gray-500 text-xs bg-white hover:bg-gray-100 flex items-center"
                  : "text-gray-400 py-3 px-3 pl-8 text-xs bg-white hover:bg-gray-100 flex items-center"
              }>
              <span className="text-gray-700 mr-4 text-lg">
                <AiOutlineCloud />
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
