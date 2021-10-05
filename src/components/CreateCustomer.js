//Imports

import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateCustomer = () => {
  return (
    <div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button size="lg" block="block" type="submit">
          Submit
        </Button>
      </Form>
    </div >
  )
}

export default CreateCustomer;