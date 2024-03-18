import React from "react";
import { UpCircleOutlined } from "@ant-design/icons";
import App from "./App";

function Header({ title = "" }) {
  return (
    <div>
      <App />
      {title} <UpCircleOutlined />
    </div>
  );
}

export default Header;
