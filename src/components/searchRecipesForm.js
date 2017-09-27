import React from 'react';

class SearchRecipesForm extends React.Component {
  constructor() {
    super();
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }
  // event handler for when the enter key is pressed
  handleEnterKey(event) {
    // event.preventDefault();

    // if (event.target.value) === '' {
    //   console.log(event);
    // }

    console.log(event.keypressed);

  }

  render() {
    return (
      <input type="text" onKeyPress={this.handleEnterKey} />
    );
  }
}


export default SearchRecipesForm;