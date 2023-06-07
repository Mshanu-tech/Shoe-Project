import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Input({ label, type, placeholder, onChange, name }) {
    return (
        <Form.Group as={Col} className="mb-3" controlId="validationCustom01">
            <Form.Label style={{ color: "white" }}>{label}</Form.Label>
            <Form.Control name={name} onChange={onChange} type={type} placeholder={placeholder} />
            <Form.Control.Feedback type="invalid">
                Please provide a valid city.
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default Input;
