import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.country} />
    <figcaption>
      <h1>pays:{props.destination}</h1>
      <h2> distance : {props.distance}</h2>
    </figcaption>
  </figure>
);


export default Travel;
