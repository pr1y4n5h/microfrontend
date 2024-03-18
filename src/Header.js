import React from "react";
import App from "./App";

function Header({ title = "" }) {
  return (
    <div>
      <App />
      {title}
    </div>
  );
}

export default Header;
