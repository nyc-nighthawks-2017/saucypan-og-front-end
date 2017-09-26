import React from 'react';
import RecipeLink from './recipeLink.js'



class UserProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: ""
    };
  }

  componentDidMount(){
    const proxyurl = "https://stark-falls-42396.herokuapp.com/";
    const url = "http://localhost:3001/users/11";
    fetch("/users/11")
    .then((res) => {
      console.log(res);
      this.setState({userName: res.obj});
    })

  }

  render() {
    let recipe = {
      name: "RecipeName",
      link: "recipelink"
    }
    return (
      <div className="userprofile">
        <span className="greeting">Hello, {this.state.userName}</span>
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
