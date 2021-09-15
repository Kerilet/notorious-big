/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Form, Col, Row } from 'react-bootstrap';

export default (props) => {

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isAlive, setIsAlive] = useState(false);
    const [voiceline, setVoiceline] = useState('');

    const submit = (ev) => {
        ev.preventDefault();
        if (name && image && voiceline) {
          console.log(name, image, voiceline, isAlive)
          props.onAddVillain({
            name,
            isAlive,
            image,
            voiceline
          });
          setName('');
          setImage('');
          setVoiceline('');
        }
    }

    return <Form onSubmit={submit}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="1">
              Name
            </Form.Label>
            <Col sm="12">
              <FormControl onChange={(ev) => setName(ev.target.value)} placeholder="Villain's name" value={name} />
            </Col>
            <InputGroup className="mb-3">
            <Form.Label column sm="1">
              Image URL
            </Form.Label>
            <Col sm="12">
              <FormControl onChange={(ev) => setImage(ev.target.value)} placeholder="Villain's image URL" value={image} />
            </Col>
            <Form.Label column sm="1">
              Voiceline
            </Form.Label>
            <Col sm="12">
              <FormControl onChange={(ev) => setVoiceline(ev.target.value)} placeholder="An iconic voiceline from that Villain" value={voiceline} />
            </Col>
            <Form.Check type="switch" label="Is alive" onChange={(ev) => setIsAlive(ev.target.checked)} value={isAlive} />
            </InputGroup>
          </Form.Group>
                <Button type="submit">Add</Button>
        </Form>;
}
