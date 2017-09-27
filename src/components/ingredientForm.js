import React from 'react';

class IngredientForm extends React.Component {
  render() {
    const { handleSubmit } = this.props
    return(
      // <form method="post" action={"https://stark-falls-42396.herokuapp.com/recipes" + "this.props.recipe.id" + "/ingredients"}>
      <form>
        <label for="ingredient[:name]">Name:</label>
        <input type="text" name="ingredient[:name]"></input>
        <label for="ingredient[:amount]">Amount:</label>
        <input type="text" name="ingredient[:amount]"></input>
        <label for="ingredient[:measurement]">Unit:</label>
        <input type="text" name="ingredient[:measurement]"></input>
        <input onSubmit={handleSubmit} type="Submit" value="Add Ingredient"></input>
      </form>
    )
  }
}

export default IngredientForm;
