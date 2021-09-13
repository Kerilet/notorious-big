/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

export default (props) => {

    const [text, setText] = useState('');

    const submit = (ev) => {
        ev.preventDefault();
        if (text) {
            props.onAddJojo(text);
            setText('');
        }
    }

    return <Form onSubmit={submit}>
            <InputGroup className="mb-3">
                <FormControl onChange={(ev) => setText(ev.target.value)} value={text} />
                <Button type="submit">Add</Button>
            </InputGroup>
        </Form>;
}