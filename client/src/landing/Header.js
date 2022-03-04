import React from "react";
import { Input, Menu, Container } from "semantic-ui-react";
import LoginDropdownMenu from "./LoginDropdownMenu"
const Header = () => {
  return (
    <Container>
      <Menu secondary>
        <Menu.Item name="home" onClick={() => {}} />
        <Menu.Item name="messages" onClick={() => {}} />
        <Menu.Item name="friends" onClick={() => {}} />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item>
           <LoginDropdownMenu />

          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};

export default Header;
