//Imports
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateSmoothie = () => {

  const [customer, setCustomer] = useState({
    name: ''
  });

  const inputCustomerName = (e) => {
    setCustomer({ name: e.target.value })
  };

  return (
    <div className="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control type="text" value={customer.name} onChange={inputCustomerName} />
        </Form.Group>

        <h3>Create Your Smoothie!</h3>
        <Form.Group controlId="Liquid">
          <Form.Label>Liquid</Form.Label>
          <Button size="lg" block="block">
            Milk
          </Button>
          <Button size="lg" block="block">
            Oat Milk
          </Button>
          <Button size="lg" block="block">
            Soy Milk
          </Button>
          <Button size="lg" block="block">
            Green Tea
          </Button>
          <Button size="lg" block="block">
            Orange Juice
          </Button>
        </Form.Group>

        <Form.Group controlId="Fruit">
          <Form.Label>Fruit</Form.Label>
        </Form.Group>

        <Form.Group controlId="Extra">
          <Form.Label>Extra</Form.Label>
        </Form.Group>

        <Button size="lg" block="block" type="submit">
          Submit
        </Button>
      </Form>
    </div >
  )
  return (
    <div className="form-wrapper">
      <Form>
        <h3>Create Your Smoothie!</h3>
        <Form.Group controlId="Liquid">
          <Form.Label>Liquid</Form.Label>
          <Button size="lg" block="block">
            Milk
          </Button>
          <Button size="lg" block="block">
            Oat Milk
          </Button>
          <Button size="lg" block="block">
            Soy Milk
          </Button>
          <Button size="lg" block="block">
            Green Tea
          </Button>
        </Form.Group>

        <Form.Group controlId="Fruit">
          <Form.Label>Fruit</Form.Label>
        </Form.Group>

        <Form.Group controlId="Extra">
          <Form.Label>Extra</Form.Label>
        </Form.Group>

        <Button size="lg" block="block" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateSmoothie;