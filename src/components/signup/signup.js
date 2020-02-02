import React from 'react'
import '../login/login.css'
import { Button, Input, Icon, Form } from 'semantic-ui-react'

const Signup = () => (
  <div className="main">
    <div className="container">
      <div className="doctor"></div>
      <SignupForm/>
    </div>
  </div>
)

const SignupForm = () => (
    <Form className="my-form">
    <Form.Field>
      <Input icon placeholder='Name'>
        <input />
        <Icon name='user' />
      </Input>
    </Form.Field>
    <Form.Field>
      <Input icon placeholder='Email'>
        <input />
        <Icon name='mail' />
      </Input>
    </Form.Field>
    <Form.Field>
        <Input size="" icon placeholder='Password' type="Password">
          <input />
          <Icon name='lock' />
        </Input>
    </Form.Field>
    <Button.Group>
        <Button primary size="mini">Signup</Button>
      <Button.Or />
        <Button size="mini">Login</Button>
     </Button.Group>
  </Form>
)

export default Signup