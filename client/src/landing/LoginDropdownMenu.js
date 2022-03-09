import React, { useState } from "react";
import { Popup, Icon } from "semantic-ui-react";
import LoginForm from "./LoginForm";

const LoginDropdownMenu = () => {
  return (
    <Popup
      content={<LoginForm />}
      on="click"
      pinned
      trigger={
        <span className="dropwdown-label">
          Login
          <Icon name="angle down" />
        </span>
      }
      position="bottom right"
    />
  );
};
export default LoginDropdownMenu;
