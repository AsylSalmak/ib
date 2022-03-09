import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useState } from "react";
import "./index.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form className="login-form">
      <Form.Field>
        <label>Email</label>
        <input value={email} onChange={(e) => {
            setEmail(e.target.value)
        }} placeholder="email" />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input value={password} onChange={(e) => {
             setPassword(e.target.value)
        }} placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginForm;
