import React from 'react';
import ReactDOM from 'react-dom';
import InstructionForm from './instructionForm.js';
import IngredientForm from './ingredientForm.js'

class NewRecipe extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: {
        recipeName: "",
        category: "",
        diffcultyLevel: 1,
        ingredient: "",
        prepTime: 0,
        directions: "",
        creator: ""
        }
      }
      this.handleInputChange = this.handleInputChange.bind(this);
    }

  handleInputChange(event) {
    event.preventDefault();
    const { recipeName, category, difficultyLevel, ingredient, prepTime, directions, creator } = this.state.recipe;
    const target = event.target;
    const name = target.name;

    this.setState({
      recipe: {
        recipeName: target.value
      }
    });
  }

  render() {
    return (
      <div>
        <form method="post" action="https://stark-falls-42396.herokuapp.com/recipes">
          <label htmlFor="recipeName">Name:</label>
          <input type="text" name="recipeName" value={this.state.recipeName} onChange={this.handleInputChange}></input>
          <label htmlFor="category">Category:</label>
          <input type="text" name="category" list="categories" value={this.state.category}></input><br />
            <datalist id="categories">
              <option value="Appetizer"></option>
              <option value="Salad"></option>
              <option value="Main"></option>
              <option value="Desserts"></option>
            </datalist>
          <label htmlFor="difficultyLevel">Difficulty Level:</label>
            <select name="difficultyLevel" value ={this.state.difficultyLevel}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select><br />
          <label>Add Ingredients:</label>
            <textarea type="text" name="ingredient" value={this.state.ingredient}></textarea>
          <label htmlFor="prepTime">Prep Time (mins):</label>
            <input type="text" name="prepTime" value={this.state.prepTime}></input><br />
          <label htmlFor="directions">Directions:</label>
            <textarea name="directions" value={this.state.directions}></textarea>
          <label htmlFor="creator">Creator Name:</label>
            <input type="text" name="creator" value={this.state.creator}></input>
          <input type="submit" value="Submit Recipe"></input>
        </form>
      </div>
    )
  }
}

export default NewRecipe;
