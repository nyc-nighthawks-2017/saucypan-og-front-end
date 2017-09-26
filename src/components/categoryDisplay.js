import React from 'react';
import RecipeLink from './recipeLink.js';

class CategoryDisplay extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <RecipeLink recipe={this.props.recipe}/>
      </div>
    )
  }
}

export default CategoryDisplay;
