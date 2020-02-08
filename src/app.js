// app needs to render images upon load
// each image should have an event handler for clicks
// should be able to keep track of the user score
// user gains a point when they click an image they have not clicked  before
// game ends when user clicks the same image
// when game ends, alert if they would like to play again
// record high score

import React, { Component } from "react";
import FoodCard from "./components/FoodCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import jumbotron from "./components/jumbotron";
import foodCards from "./foodCards.json";

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        foodCards,
        clicked: [],
        score: 0,
        highScore: 0
    }

    isClicked = id => {

        // const foodCards = this.state.foodCards
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const clickedCard = this.state.foodCards.filter(foodCard => foodCard.id !== id);
        // Set this.state.friends equal to the new friends array
        // this.setState({ friends });

        if (clickedCard[0].clicked) {
            
            // score = 0;
            console.log(`Score: ${this.state.score}`);
            console.log(`High Score: ${this.state.highScore}`)
        }




    };

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default App;