import React from "react";
// import "./style.css";

function FoodCard(props) {
  return (
    <div className="food-card">
        <img alt={props.name} src={props.img} id={props.id}
        className="shuffle" onClick={() => props.shuffle(props.id)}/>
    </div>
    )

}

export default FoodCard;