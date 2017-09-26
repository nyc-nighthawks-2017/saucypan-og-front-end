import React from 'react';
import ReactDOM from 'react-dom';
import InstructionForm from './instructionForm.js';
import IngredientForm from './ingredientForm.js'

class NewRecipe extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    // post request
    ReactDOM.render(<IngredientForm />, document.getElementById('ingredient-form'));
  }

  render() {
    return (
      <div>
        <form method="post" action="https://stark-falls-42396.herokuapp.com/recipes">
          <label for="recipe[:name]">Name:</label>
          <input type="text" name="recipe[:name]"></input>
          <label for="recipe[:category]">Category:</label>
          <input type="text" name="recipe[:category]" list="categories"></input><br />
            <datalist id="categories">
              <option value="Appetizer"></option>
              <option value="Salad"></option>
              <option value="Main"></option>
              <option value="Desserts"></option>
            </datalist>
          <label for="difficulty_level">Difficulty Level:</label>
            <select name="recipe[:difficulty_level]">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select><br />
            <label>Add Ingredient:</label>
            <div id="ingredient-form">
              <IngredientForm handleSubmit={ this.handleSubmit }/>
            </div>
          <label for="recipe[:prep_time]">Prep Time (mins):</label>
          <input type="text" name="recipe[:prep_time]"></input><br />
          <label>Add Direction:</label>
          <InstructionForm />
          <label for="recipe[:creator]">Creator Name:</label>
          <input type="text" name="recipe[:creator]"></input>
        </form>
      </div>
    )
  }
}

export default NewRecipe;
