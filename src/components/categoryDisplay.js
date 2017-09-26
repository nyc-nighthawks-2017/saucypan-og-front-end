import React from 'react';
import RecipeLink from './recipeLink.js'

class CategoryDisplay extends React.Component {
  render() {
    return (
      <div>
        <h3>Category Title</h3>
        <RecipeLink recipe={this.props.recipe}/>
      </div>
    )
  }
}

export default CategoryDisplay;
