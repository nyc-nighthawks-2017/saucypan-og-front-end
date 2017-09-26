import React from 'react';
import CategoryDisplay from './categoryDisplay.js';

class TrendingDisplay extends React.Component {
  render() {
    return (
      <div>
        <h1> Trending: </h1>
        <CategoryDisplay title="Appetizer" recipe={{name: "Appetizer", link: "/appetizer"}}/>
        <CategoryDisplay title="Salads" recipe={{name: "Appetizer", link: "/appetizer"}}/>
        <CategoryDisplay title="Mains" recipe={{name: "Appetizer", link: "/appetizer"}}/>
        <CategoryDisplay title="Dessert" recipe={{name: "Appetizer", link: "/appetizer"}}/>
      </div>
    );
  }
}

export default TrendingDisplay;