import React from "react";
import { Popup, Icon } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import UserActions from "./UserActions";

const LoginDropdownMenu = () => {
  const user = useSelector((store) => store.user);
  console.log(user)

  return (
    <div>
      {user.logedIn ? (
        <Popup
          content={<UserActions />}
          on="click"
          pinned
          trigger={
            <span className="dropwdown-label">
              {user.email} <Icon name="angle down" />
            </span>
          }
          position="bottom right"
        />
      ) : (
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
      )}
    </div>
  );
};
export default LoginDropdownMenu;
