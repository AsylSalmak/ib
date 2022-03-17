import React from "react";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Menu } from "semantic-ui-react";
import "./PrivateSections.css";


const PrivateSections = () => {
  const { logedIn } = useSelector((store) => store.user);

  if (!logedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <Menu secondary className="privateSection">
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "section-link"
            }
            to="/private/dashboard"
          >
            Обзор
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "section-link"
            }
            to="/private/accounts"
          >
            Счета
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "section-link"
            }
            to="/private/payments"
          >
            Платежи
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "section-link"
            }
            to="/private/transfers"
          >
            Переводы
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "section-link"
            }
            to="/private/operations"
          >
            Операции
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "section-link"
            }
            to="/private/profile"
          >
            Профиль
          </NavLink>
        </Menu.Item>
      </Menu>
      <Outlet />
    </Container>
  );
};

export default PrivateSections;
