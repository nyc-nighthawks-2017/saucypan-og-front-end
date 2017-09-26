import React, { Component } from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import axios from 'axios'

class RecipeDetails extends Component {
  constructor(){
    super()
    this.state = {
      recipe: null,
      ingredients: null,
      user: null,
      items: null
    }
  }
  componentDidMount(){
     axios.get('http://localhost:8080/recipes/'+this.props.match.params.id)
       .then((response)=>{
         this.setState({recipe: response.data.recipe, ingredients: response.data.ingredients, user: response.data.user, items: response.data.items})
       })
   }

  render() {
    let ingredients = this.state.ingredients? this.state.ingredients : [];
    let recipe = this.state.recipe
    let {directions, difficulty, preptime, name, dish_type} = this.state.recipe ? this.state.recipe : '';
    let {user} = this.state ? this.state : '';
    let items = this.state.items ? this.state.items : [];
    return (
      <div className="recipe-show-page">
        <div className="recipe-show-card">
          <ul id="recipe-wrapper">
            <li className="recipe-title">{name}</li>
          </ul>
          <Tabs>
            <div className="tabs-border">
              <TabList id="tabular">
                <Tab>Ingredients <br/>Difficulty: {difficulty}</Tab>
                <Tab>Directions <br/>(Prep Time: {preptime}min)</Tab>
              </TabList>
              <div className="recipe-show-tab">
              <TabPanel>
                <h2>Ingredients</h2>
                {ingredients.map(function(ingredient, index){
                  return <p key={ index }>{ingredient.amount} {ingredient.measurement} of {items[index].name} </p>
                })}
              </TabPanel>
              <TabPanel>
                <h2>Directions</h2>
                <p>{directions}</p>
              </TabPanel>
          </div>
          <p className="float-left">Creator: {user}</p>
           <p className="right float-left">Dish type: {dish_type}</p>
        </div>
        </Tabs>
        </div>
      </div>
    );
  }
};

export default RecipeDetails;
// <Tabs>
//             <div className="tabs-border">
//               <TabList id="tabular">
//                 <Tab>Ingredients <br/>Difficulty: {difficulty}</Tab>
//                 <Tab>Directions <br/>(Prep Time: {preptime}min)</Tab>
//               </TabList>
//               <div className="recipe-show-tab">
//               <TabPanel>
//                 <h2>Ingredients</h2>
//                 {ingredients.map(function(ingredient, index){
//                   return <p key={ index }>{ingredient.amount} {ingredient.measurement} of {items[index].name} </p>
//                 })}
//               </TabPanel>
//               <TabPanel>
//                 <h2>Directions</h2>
//                 <p>{directions}</p>
//               </TabPanel>
//           </div>
//           <p className="float-left">Creator: {user}</p>
//            <p className="right float-left">Dish type: {dish_type}</p>
//         </div>
//         </Tabs>