import React, { useEffect } from "react";
import "../login/login.css";
import { Button, Input, Icon, Form } from "semantic-ui-react";
import bg from "../../images/bg.jpeg";
const SignupForm = props => {
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
            <Input icon placeholder="Name">
              <input />
              <Icon name="user" />
            </Input>
          </Form.Field>
          <Form.Field>
            <Input icon placeholder="Email">
              <input />
              <Icon name="mail" />
            </Input>
          </Form.Field>
          <Form.Field>
            <Input size="" icon placeholder="Password" type="Password">
              <input />
              <Icon name="lock" />
            </Input>
          </Form.Field>
          <Button.Group>
            <Button primary size="mini">
              Signup
            </Button>
            <Button.Or />
            <Button onClick={() => props.history.push("/login/")} size="mini">
              Login
            </Button>
          </Button.Group>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
