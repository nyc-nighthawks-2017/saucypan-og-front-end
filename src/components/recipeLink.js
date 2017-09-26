import React from 'react';

class RecipeLink extends React.Component {

  render() {
    const { name, link } = this.props.recipe
    return (
      <div>
        <a href={link}>{name}</a>
      </div>
    )
  }
}

export default RecipeLink;
