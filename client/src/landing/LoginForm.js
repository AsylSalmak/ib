import React from "react";
import axios from "axios";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(false)
  return (
    <Form className="login-form">
      <Form.Field>
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
      </Form.Field>
      <Form.Field>
        <Checkbox checked={
         confirm
        } onChange={()=>{
          setConfirm(!confirm)
        }} label="I confirm my data" />
      </Form.Field>
      <Button
        color="green"
        disabled={!(email && password && confirm)} 
        onClick={() => {
          axios({
            method: "post",
            url: "messages",
            baseURL: "http://127.0.0.1:3000",
            data: { login: email, password: password },
          })
            .then((response) => {
              console.log(response)
              alert(response.data);
            })
            .catch((error) => {
              alert(error);
            });
        }}
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
