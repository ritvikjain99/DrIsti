import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
export default function Home(props) {
  const [name, setName] = useState("");
  
  return (
    <div className="home-form">
      <Form>
        <Form.Field>
          <label>Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}
