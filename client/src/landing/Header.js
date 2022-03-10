import React from "react";
import { Input, Menu, Container } from "semantic-ui-react";
import LoginDropdownMenu from "./LoginDropdownMenu";
import "./index.css";
const Header = () => {
  return (
    <div className="Header-top">
      <Container>
        <Menu secondary >
          <Menu.Item name="home" style={{color: '#eee'}} onClick={() => {}} />
          <Menu.Item name="messages" style={{color: '#eee'}} onClick={() => {}} />
          <Menu.Item name="friends" style={{color: '#eee'}} onClick={() => {}} />
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
    </div>
  );
};

export default Header;
