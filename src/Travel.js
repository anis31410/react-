import React from "react";

const Travel = props => (
  <figure>
    <img src={props.photo} alt={props.counstry} />
    <figcaption>
      <blockquote>{props.destination}</blockquote>
      <cite>{props.distance}</cite>
    </figcaption>
  </figure>
);


export default Travel;
