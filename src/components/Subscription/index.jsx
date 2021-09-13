/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default (props) => {
    /* Hook works here */

    const [clicked, setClicked] = useState(false);

    const submit = (ev) => {
        ev.preventDefault();
        // do anything....
        setClicked(true);
    }

    // End here
    
    return <Form onSubmit={submit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        {clicked.toString()}
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    {clicked && <Alert variant="success">Clicked!</Alert>}
    <Button variant="primary" type="submit">
      {props.submitText}
    </Button>
  </Form> 
}

