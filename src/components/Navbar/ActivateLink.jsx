import React from "react";
import { NavLink } from "react-router-dom";

export const ActivateLink = ({ to, children }) => {
  const activeLink = "text-primary transition ease-in-out duration-100 ";
  const inactiveLink =
    "text-black transition  ease-in-out duration-100 hover:text-primary";

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
      to={to}
    >
      {children}
    </NavLink>
  );
};
