import React from "react";
import { Menu, Container } from "semantic-ui-react";
import LoginDropdownMenu from "../landing/LoginDropdownMenu";
import logo from "../public/pngwing3.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  const user = useSelector((store) => store.user);
  return (
    <div className="Header">
      <Container>
        <Menu secondary>
          <Link to="/">
            <img
              src={logo}
              style={{ width: "150px", height: "70px", margin: "5px" }}
            />
          </Link>
          {user.logedIn ? (
            <Menu.Item>
              <Link to="./private/dashboard" className="link">
                Мой Банк
              </Link>
            </Menu.Item>
          ) : null}
          <Menu.Item>
            <a href="#section3">Новости</a>
          </Menu.Item>
          <Menu.Item>
            <Link className="link" to="/">
              Услуги
            </Link>
          </Menu.Item>
          <Menu.Item>
            <a href="">Контакты</a>
          </Menu.Item>
          <Menu.Menu position="right">
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
