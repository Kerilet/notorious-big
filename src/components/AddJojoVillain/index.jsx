/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Form, Col, Row } from 'react-bootstrap';

export default (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isAlive, setIsAlive] = useState(false);

    const submit = (ev) => {
        ev.preventDefault();
        if (name && image) {
          props.onAddVillain({
            name,
            image,
          });
        }
    }

    return <Form onSubmit={submit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Nome
            </Form.Label>
            <Col sm="10">
              <FormControl onChange={(ev) => setName(ev.target.value)} placeholder="Villain name" value={name} />
            </Col>
          </Form.Group>
            <InputGroup className="mb-3">
            <Form.Check type="switch" label="Is alive" onChange={(ev) => setIsAlive(ev.target.checked)} value={isAlive} />
                <FormControl onChange={(ev) => setImage(ev.target.value)} value={image} />
                <Button type="submit">Add</Button>
            </InputGroup>
        </Form>;
}
