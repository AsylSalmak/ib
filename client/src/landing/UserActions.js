import React from "react";
import { Button, Form } from "semantic-ui-react";
import { SIGN_OUT } from "../user/reducers/userReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div style={{ minWidth: "100px" }}>
      <Form.Field>
        <Button
          fluid
          color="black"
          size="tiny"
          onClick={() => {
            dispatch({
              type: SIGN_OUT,
            });
            localStorage.removeItem("user");
          }}
        >
          Sign out
        </Button>
      </Form.Field>
      <Form.Field style={{ marginTop: "7px" }}>
        <Button
          onClick={() => {
            navigate("/private/profile");
          }}
          fluid
          basic
          color="blue"
          size="tiny"
          content="blue"
        >
          Profile
        </Button>
      </Form.Field>
    </div>
  );
};
export default UserActions;
