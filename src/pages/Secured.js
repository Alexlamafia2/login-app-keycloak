import { Fragment } from "react";
import keycloak from "../keycloak";
// import MainNavigation from "../components/MainNavigation";

export default function SecuredPage() {
  const handleLogout = () => {
    keycloak.logout({ redirectUri: "http://localhost:3000/" });

    console.log("Logged out");
  };

  return (
    <Fragment>
      <h1> Secured Page</h1>
      <button
        className="login-form__button"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </Fragment>
  );
}
