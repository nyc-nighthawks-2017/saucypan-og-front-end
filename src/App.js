import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/homePage.js'
import UserProfile from './components/userProfile.js'
import NavBar from './components/navBar.js'
import NewRecipe from './components/newRecipe.js'
import RecipeSearch from './components/recipeSearch.js'
import RecipeDetails from './components/recipeDetails.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      visiblePage: "home"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    debugger;
    this.setState({visiblePage: event.target.href})
  }

  render() {
    let page;
    if(this.state.visiblePage === "home") {
      page = <HomePage />
    } else if(this.state.visiblePage === "http://localhost:3000/user-profile") {
      page = <UserProfile />
    } else if(this.state.visiblePage === "submit-recipe") {
      page = <NewRecipe />
    } else if(this.state.visbilePage === "search-recipes") {
      page = <RecipeSearch />
    } else if(this.state.visiblePage === "recipe-details") {
      page = <RecipeDetails />
    }

    return (
      <div className="App">
        <NavBar handleClick = {this.handleClick} />
        {page}
      </div>
    );
  }
}

export default App;
