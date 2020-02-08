import React from "react";
// import "./style.css";

function FoodCard(props) {

    <div className="food-card">
        <img alt={props.name} src={props.image} id={props.id}
        className="shuffle" onClick={() => props.shuffle(props.id)}/>
    </div>

}

export default FoodCard;