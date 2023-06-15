import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import keycloak from "../keycloak";

// import { useEffect } from "react";
// import { useState } from "react";
export default function MainNavigation() {
  const handleLogout = () => {
    keycloak.logout({ redirectUri: "http://localhost:3000/" });
  };
  const handleLogin = () => {
    keycloak.login();
  };

  const authenticated = keycloak.authenticated;

  return (
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end={true}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="secured"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Secured
            </NavLink>
          </li>
          {authenticated ? (
            <button
              className="login-form__button"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button
              className="login-form__button"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
}
