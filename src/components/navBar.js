import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <ul>
        <li><a onClick={this.props.handleClick} href="home">Home</a></li>
        <li><a onClick={this.props.handleClick} href="user-profile">Profile</a></li>
        <li><a onClick={this.props.handleClick} href="submit-recipe">New Recipe</a></li>
        <li><a onClick={this.props.handleClick} href="search-recipes">Search</a></li>
        <li><a onClick={this.props.handleClick} href="recipe-details">Show Recipe</a></li>
      </ul>
    )
  }
}

export default NavBar;
