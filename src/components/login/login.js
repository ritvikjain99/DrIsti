import React, { useState, useEffect } from "react";
import "./login.css";
import { Button, Form, Icon, Input, Container } from "semantic-ui-react";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { rootUrl } from "../../constants";
import bg from "../../images/bg.jpeg";

export default function Login(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    if (user !== "" && password !== "") {
      axios({
        method: "post",
        url: `${rootUrl}rest-auth/login/`,
        data: {
          username: user,
          password: password
        }
      })
        .then(function(response) {
          localStorage.setItem("user-token", response.data.key);
          props.history.push("/home/");
        })
        .catch(function(error) {
          console.log(error.response);
          alert(JSON.stringify(error.response.data));
        });
    } else {
      alert("Username or password can't be empty!");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      props.history.push("/home/");
    }
  });
  return (
    <div className="main" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="doctor"></div>
        <Form
          className="my-form"
          style={{ width: "600px", height: "max-content" }}
        >
          <Form.Field>
            <Input icon placeholder="User">
              <input
                placeholder="username"
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
              <Icon name="user" />
            </Input>
          </Form.Field>
          <Form.Field>
            <Input icon placeholder="Password" type="Password">
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
              <Icon name="lock" />
            </Input>
          </Form.Field>
          <Button.Group>
            <Button primary size="tiny" onClick={handleSubmit}>
              Login
            </Button>
            <Button.Or />
            <Button onClick={() => props.history.push("/signup/")} size="tiny">
              Signup
            </Button>
          </Button.Group>
        </Form>
      </div>
    </div>
  );
}
