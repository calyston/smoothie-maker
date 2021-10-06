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
    },
    greens: {
      kale: false,
      spinach: false,
    },
    extras: {
      ginger: false,
      turmeric: false,
      ice: false,
    }
  }
  );

  //Customer Name Input
  const inputCustomerName = (e) => {
    setSmoothieRecipe({ ...smoothieRecipe, name: e.target.value })
  };

  //Selecting Liquids to Add to Smoothie
  const liquidCheckBox = (e) => {

    //Check how many are selected
    let selectedLiquids = 0;
    let tempLiquids = smoothieRecipe.liquids;

    tempLiquids = { ...tempLiquids, [e.target.name]: !tempLiquids[e.target.name] }

    //Check how many are selected
    for (const liquid in tempLiquids) {
      selectedLiquids += tempLiquids[liquid]
    }

    //Set limit to amount of liquids- min 1 max 2
    if (selectedLiquids <= 2) {
      setSmoothieRecipe({
        ...smoothieRecipe, liquids: { ...smoothieRecipe.liquids, [e.target.name]: !smoothieRecipe.liquids[e.target.name] }
      })
    }

  }

  //Selecting Fruits to Add to Smoothie
  const fruitsCheckBox = (e) => {
    setSmoothieRecipe({
      ...smoothieRecipe, fruits: { ...smoothieRecipe.fruits, [e.target.name]: !smoothieRecipe.fruits[e.target.name] }
    })
  }
  //Selecting Greens to Add to Smoothie
  const greensCheckBox = (e) => {
    setSmoothieRecipe({
      ...smoothieRecipe, greens: { ...smoothieRecipe.greens, [e.target.name]: !smoothieRecipe.greens[e.target.name] }
    })
  }

  //Selecting Extra Ingredients to Add to Smoothie
  const extrasCheckBox = (e) => {
    setSmoothieRecipe({
      ...smoothieRecipe, extras: { ...smoothieRecipe.extras, [e.target.name]: !smoothieRecipe.extras[e.target.name] }
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
            checked={smoothieRecipe.liquids.milk}
            onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Oat Milk"
            name="oatMilk"
            type="checkbox"
            checked={smoothieRecipe.liquids.oatMilk}
            onChange={liquidCheckBox}
          />
          <Form.Check
            inline
            label="Soy Milk"
            name="soyMilk"
            type="checkbox"
            checked={smoothieRecipe.liquids.soyMilk}
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
            checked={smoothieRecipe.liquids.orangeJuice}
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
            checked={smoothieRecipe.fruits.apple}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Avocado"
            name="avocado"
            type="checkbox"
            checked={smoothieRecipe.fruits.avocado}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Banana"
            name="banana"
            type="checkbox"
            checked={smoothieRecipe.fruits.banana}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Blueberries"
            name="blueberries"
            type="checkbox"
            checked={smoothieRecipe.fruits.blueberries}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Mango"
            name="mango"
            type="checkbox"
            checked={smoothieRecipe.fruits.mango}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Pineapple"
            name="pineapple"
            type="checkbox"
            checked={smoothieRecipe.fruits.pineapple}
            onChange={fruitsCheckBox}
          />
          <Form.Check
            inline
            label="Strawberries"
            name="strawberries"
            type="checkbox"
            checked={smoothieRecipe.fruits.strawberries}
            onChange={fruitsCheckBox}
          />
        </Form.Group>

        <Form.Group controlId="Greens">
          <h4>Greens</h4>
          <Form.Check
            inline
            label="Kale"
            name="kale"
            type="checkbox"
            checked={smoothieRecipe.greens.kale}
            onChange={greensCheckBox}
          />
          <Form.Check
            inline
            label="Spinach"
            name="spinach"
            type="checkbox"
            checked={smoothieRecipe.greens.spinach}
            onChange={greensCheckBox}
          />
        </Form.Group>

        <Form.Group controlId="Extras">
          <h4>Extras</h4>
          <Form.Check
            inline
            label="Ginger"
            name="ginger"
            type="checkbox"
            checked={smoothieRecipe.extras.ginger}
            onChange={extrasCheckBox}
          />
          <Form.Check
            inline
            label="Turmeric"
            name="turmeric"
            type="checkbox"
            checked={smoothieRecipe.extras.turmeric}
            onChange={extrasCheckBox}
          />
          <Form.Check
            inline
            label="Ice"
            name="ice"
            type="checkbox"
            checked={smoothieRecipe.extras.ice}
            onChange={extrasCheckBox}
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