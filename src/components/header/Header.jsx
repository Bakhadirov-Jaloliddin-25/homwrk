import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static/index";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="text-white font-bold text-xl">
          <NavLink to="/">Foydalanuvchilar</NavLink>
        </div>

        <div className="flex gap-4">
          {LINKS?.map((link) => (
            <NavLink
              key={link.id}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg text-lg font-medium transition duration-300 ${
                  isActive
                    ? "bg-white text-indigo-500 shadow-md"
                    : "text-white hover:bg-white/20"
                }`
              }
              to={link.path}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
