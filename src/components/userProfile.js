import React from 'react';
import RecipeLink from './recipeLink.js'

class UserProfile extends React.Component {
  render() {
    let recipe = {
      name: "RecipeName",
      link: "recipelink"
    }
    return (
      <div className="userprofile">
        <span className="greeting">Hello, sampleUsername</span>
          <br></br>
        <div className="recipesSubmitted">
          <h4>Recipes You've Submitted: </h4>
          <RecipeLink recipe={recipe}/>
        </div>

        <div className="recipesRated">
          <h4>Recipes You've Rated: </h4>
          <RecipeLink recipe={recipe}/>
        </div>
      </div>
    )
  }
}

export default UserProfile;
