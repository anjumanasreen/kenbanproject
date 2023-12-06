import { NavLink } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (isDarkMode) {
      document.body.style.backgroundColor = "#333333";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#333333";
    }
  };
  return (
    <div className={!isDarkMode ? "header-dark" : "header-light"}>
      <div>
        <h3 className="font-bold mb-[1%]">Basic Structure of Kanban Project</h3>
        <button
          className="bg-blue-500 font-bold py-2 px-4 rounded float-right mr-10"
          onClick={toggleTheme}
        >
          Toggle
        </button>
        <div className="padding-[30px]">
          <NavLink
            exact
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/overview"
          >
            Overview
          </NavLink>
          <NavLink
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/tasks"
          >
            Tasks
          </NavLink>
          <NavLink
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/milestone"
          >
            Milestone
          </NavLink>
          <NavLink
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/timesheet"
          >
            Timesheet
          </NavLink>
          <NavLink
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/files"
          >
            Files
          </NavLink>
          <NavLink
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/discussion"
          >
            Discussion
          </NavLink>
          <NavLink
            activeClassName="active"
            className="pr-9 hover:underline"
            to="/activity-feed"
          >
            Activity
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Header;
