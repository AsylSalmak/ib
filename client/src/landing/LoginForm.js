import React from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { SET_USER } from '../user/reducers/userReducer';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Field>
        <label>Email</label>
        <input
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
          placeholder='email'
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder='Password'
        />
      </Form.Field>
      {error ? (
        <Message negative size='tiny'>
          <Message.Header>{error}</Message.Header>
        </Message>
      ) : null}

      <Form.Field>
        <Checkbox
          checked={confirm}
          onChange={() => {
            setConfirm(!confirm);
          }}
          label='I confirm my data'
        />
      </Form.Field>

      <Button
        loading={loading}
        color='green'
        disabled={!(email && password && confirm)}
        onClick={() => {
          setLoading(true);
          axios({
            method: 'post',
            url: 'auth',
            baseURL: API_URL,
            data: { login: email, password: password },
          })
            .then(response => {
              dispatch({
                type: SET_USER,
                payload: response.data,
              });
              localStorage.setItem(
                'user',
                JSON.stringify({ ...response.data, logedIn: true })
              );
              setError('');
              setLoading(false);
              navigate('/private/dashboard');
            })
            .catch(function (error) {
              if (error.response) {
                setError(error.response.data.message);
                setLoading(false);
              }
            });
        }}
        type='submit'
      >
        Submit
      </Button>
    </Form>
  );
};

export default LoginForm;
