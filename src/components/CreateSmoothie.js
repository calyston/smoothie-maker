//Imports
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateSmoothie = () => {

  const [smoothieRecipe, setSmoothieRecipe] = useState({
    name: '',
    liquids: {
      milk: false,
      oatMilk: false,
      soyMilk: false,
      greenTea: false,
      orangeJuice: false,
    },
    fruits: {
      apple: false,
      avocado: false,
      banana: false,
      blueberries: false,
      mango: false,
      pineapple: false,
      strawberries: false,
    }
  });

  //Customer Name Input
  const inputCustomerName = (e) => {
    setSmoothieRecipe({ ...smoothieRecipe, name: e.target.value })
  };

  //Selecting Liquids to Add to Smoothie
  const liquidCheckBox = (e) => {
    setSmoothieRecipe({
      ...smoothieRecipe, liquids: { ...smoothieRecipe.liquids, [e.target.name]: !smoothieRecipe.liquids[e.target.name] }
    })
  }

  //Selecting Fruits to Add to Smoothie
  const fruitsCheckBox = (e) => {
    setSmoothieRecipe({
      ...smoothieRecipe, fruits: { ...smoothieRecipe.fruits, [e.target.name]: !smoothieRecipe.fruits[e.target.name] }
    })
  }

  return (
    <div className="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Customer Name:</Form.Label>
          <Form.Control type="text" value={smoothieRecipe.name} onChange={inputCustomerName} />
        </Form.Group>

        <h2>Create Your Smoothie!</h2>
        <Form.Group controlId="Liquid">
          <h4>Liquids</h4>
          <Form.Check
            inline
            label="Milk"
            name="milk"
            type="checkbox"
            value={smoothieRecipe.liquids.milk}
            onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Oat Milk"
            name="oatMilk"
            type="checkbox"
            value={smoothieRecipe.liquids.oatMilk}
            onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Soy Milk"
            name="soyMilk"
            type="checkbox"
            value={smoothieRecipe.liquids.soyMilk}
            onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Green Tea"
            name="greenTea"
            type="checkbox"
            value={smoothieRecipe.liquids.greenTea}
            onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Orange Juice"
            name="orangeJuice"
            type="checkbox"
            value={smoothieRecipe.liquids.orangeJuice}
            onChange={liquidCheckBox}
          />
        </Form.Group>

        <Form.Group controlId="Fruits">
          <h4>Fruits</h4>
          <Form.Check
            inline
            label="Apple"
            name="apple"
            type="checkbox"
            value={smoothieRecipe.liquids.apple}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Avocado"
            name="avocado"
            type="checkbox"
            value={smoothieRecipe.liquids.avocado}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Banana"
            name="banana"
            type="checkbox"
            value={smoothieRecipe.liquids.banana}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Blueberries"
            name="blueberries"
            type="checkbox"
            value={smoothieRecipe.liquids.blueberries}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Mango"
            name="mango"
            type="checkbox"
            value={smoothieRecipe.liquids.mango}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Pineapple"
            name="pineapple"
            type="checkbox"
            value={smoothieRecipe.liquids.pineapple}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Strawberries"
            name="strawberries"
            type="checkbox"
            value={smoothieRecipe.liquids.strawberries}
            onChange={fruitsCheckBox}
          />
        </Form.Group>

        <Button size="lg" block="block" type="submit">
          Submit
        </Button>
      </Form>
    </div >
  )
}

export default CreateSmoothie;