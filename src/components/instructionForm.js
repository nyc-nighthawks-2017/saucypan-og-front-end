import React from 'react';

class InstructionForm extends React.Component {
  render() {
    let step = 0;
    return(
      <form method="post" action={"https://stark-falls-42396.herokuapp.com" + "this.props.recipe.id" + "/instructions"}>
        <textarea type="textarea" name="step"></textarea>
        <input type="hidden" value={step += 1}></input>
        <input type="submit" value="Add Step"></input>
      </form>
    )
  }
}

export default InstructionForm;
