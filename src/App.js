import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './components/homePage.js'
import UserProfile from './components/userProfile.js'
import NavBar from './components/navBar.js'
import NewRecipe from './components/newRecipe.js'
import RecipeSearch from './components/recipeSearch.js'
import RecipeDetails from './components/recipeDetails.js'
import CategoryDisplay from './components/categoryDisplay.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      visiblePage: "http://localhost:3000/home"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({visiblePage: event.target.href})
  }

  render() {
    let page;
    if(this.state.visiblePage === "http://localhost:3000/home") {
      page = <HomePage />
    } else if(this.state.visiblePage === "http://localhost:3000/user-profile") {
      page = <UserProfile />
    } else if(this.state.visiblePage === "http://localhost:3000/submit-recipe") {
      page = <NewRecipe />
    } else if(this.state.visiblePage === "http://localhost:3000/search-recipes") {
      page = <RecipeSearch />
    } else if(this.state.visiblePage === "http://localhost:3000/recipe-details") {
      page = <RecipeDetails />
    }
    let recipe = {
      name: "RecipeName",
      link: "recipelink"
    }

    return (
      <div className="App">
        <NavBar handleClick = {this.handleClick} />
        {page}
        <CategoryDisplay recipe={recipe} />
      </div>
    );
  }
}

export default App;
