import React, { useEffect } from "react";
import axios from "axios";
import { Outlet, Navigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Menu } from "semantic-ui-react";
import "./PrivateSections.css";
import { SET_ACCOUNTS } from "../accounts/reducer/AccountsReducer";

const PrivateSections = () => {
  const { logedIn } = useSelector((store) => store.user);
  const dispatch = useDispatch()

  useEffect(() => {
    axios({
      method: "get",
      url: "accounts",
      baseURL: "https://ib-nest-server.herokuapp.com/",
    }).then((response) => {
      const accounts = response.data.reduce((previousValue, currentValue) => {
        return { ...previousValue, [currentValue.id]: currentValue };
      }, {});
      dispatch({
        type: SET_ACCOUNTS,
        payload: accounts,
      });
    });
  }, []);

  if (!logedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Container style = {{minHeight:'1000px'}}>
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
