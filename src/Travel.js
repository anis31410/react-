import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <p>{props.destination}</p>
      <h1>{props.distance}</h1>
    </figcaption>
  </figure>
);


export default Travel;
