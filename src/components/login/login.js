import React from 'react'
import './login.css'
import { Button, Form, Icon, Input, Container } from 'semantic-ui-react'
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'

const Login = () => (
  <div className="main">
    <div className="container">
      <div className="doctor"></div>
      <LoginForm/>
    </div>
  </div>
)

class LoginForm extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
    <Form className="my-form">
      <Form.Field>
        <Input icon placeholder='Email'>
          <input />
          <Icon name='user' />
        </Input>
      </Form.Field>
      <Form.Field>
      <Input icon placeholder='Password' type="Password">
          <input />
          <Icon name='lock' />
        </Input>
      </Form.Field>
      <Button.Group>
        <Button primary size="tiny">Login</Button>
      <Button.Or />
        <Button size="tiny" >Signup</Button>
     </Button.Group>
    </Form>
    );
  }
}

export default Login