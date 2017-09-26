import React from 'react';
import NavBar from './navBar.js';
import CategoryDisplay from './categoryDisplay.js';
import SearchRecipesForm from './searchRecipesForm.js'
import TopRatedDisplay from './topRatedDisplay.js';
import MostRecentDisplay from './mostRecentDisplay.js';
import TrendingDisplay from './trendingDisplay.js';

class HomePage extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <header>
          <h1>Saucy Pan</h1>
          <NavBar />
          <SearchRecipesForm />
          <TopRatedDisplay />
          <MostRecentDisplay />
          <TrendingDisplay />
        </header>
      </div>
    )
  }
}

export default HomePage;
