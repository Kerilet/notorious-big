/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

export default (props) => {

    const [text, setText] = useState('');
    const [imageUrl, setImageURL] = useState('');

    const submit = (ev) => {
        ev.preventDefault();
        if (text) {
            props.onAddName(text);
            setText('');
        }
        if (imageUrl) {
            props.onAddImage(imageUrl);
            setImageURL('');
        }
    }

    return <Form onSubmit={submit}>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <FormControl onChange={(ev) => setText(ev.target.value)} value={text} />
                <FormControl onChange={(ev) => setImageURL(ev.target.value)} value={imageUrl} />
                <Button type="submit">Add</Button>
            </InputGroup>
        </Form>;
}