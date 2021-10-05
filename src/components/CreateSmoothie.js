//Imports
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateSmoothie = () => {

  const [smoothieInfo, setSmoothieInfo] = useState({
    name: '',
    liquids: {
      milk: false,
      oatMilk: false,
      soyMilk: false,
      greenTea: false,
      orangeJuice: false,
    }
  });

  //Customer Name Input
  const inputCustomerName = (e) => {
    setSmoothieInfo({ name: e.target.value })
  };

  //Selecting Liquids to Add to Smoothie
  // const liquidCheckBox = (e) => {

  // }

  return (
    <div className="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control type="text" value={smoothieInfo.name} onChange={inputCustomerName} />
        </Form.Group>

        <h2>Create Your Smoothie!</h2>
        <Form.Group controlId="Liquid">
          <h4>Liquids</h4>
          <Form.Check
            inline
            label="Milk"
            name="milk"
            type="checkbox"
          // value={smoothieInfo.liquids.milk}
          // onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Oat Milk"
            type="checkbox"
            name="group1"
          />
          <Form.Check
            inline
            label="Soy Milk"
            type="checkbox"
            name="group1"
          />          <Form.Check
            inline
            label="Green Tea"
            type="checkbox"
            name="group1"
          />          <Form.Check
            inline
            label="Orange Juice"
            type="checkbox"
            name="group1"
          />
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