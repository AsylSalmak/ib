import React, { useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import LoginForm from "./LoginForm";

const LoginDropdawnNenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Dropdown
      open={open}
      trigger={
        <Button
          onClick={() => {
            setOpen(!open);
          }}
        ></Button>
      }
      item
      text="Login"
    >
      <Dropdown.Menu>
        <Dropdown.Header>Login into your account</Dropdown.Header>
        <LoginForm />
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default LoginDropdawnNenu;
