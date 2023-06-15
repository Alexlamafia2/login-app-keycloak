import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import keycloak from "./keycloak";

keycloak
  .init({ onLoad: "check-sso" })
  .then((authenticated) => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);
  })
  .catch((error) => {
    console.error("Keycloak initialization error:", error);
  });
