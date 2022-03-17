import React from "react";
import { Input, Menu, Container } from "semantic-ui-react";
import LoginDropdownMenu from "../landing/LoginDropdownMenu";
import logo from "../public/pngwing2.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="Header-top">
      <Container >
        <Menu secondary >
          <img src={logo} style={{ width: "150px", height: "70px", margin:'5px' }} />
          {user.logedIn ?  <Menu.Item ><Link to='./private/dashboard'className="link" >Мой Банк</Link></Menu.Item> : null}
          <Menu.Item ><Link className="link" to='/' >Новости</Link></Menu.Item>
          <Menu.Item ><Link className="link" to='/' >Услуги</Link></Menu.Item>
          <Menu.Item ><Link className="link" to='/' >Контакты</Link></Menu.Item>
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
