import React from "react";
import Travel from "./Travel";
// src/Quotes.js
const travels = [
{
    country:"dans seb",
    destination:"Nul part",
    photo:"https://images-na.ssl-images-amazon.com/images/I/31cOwTSkaiL._SX466_.jpg",
distance:"1000 km"
} ,
  {
  country:"dans la face de seb",
  destination:"Nul part",
  photo:"https://www.lafoirfouille.fr/medias/sys_master/images/images/hc7/h92/8889356746782/10000404495-0-515Wx515H.jpg",
distance:"1000 km"
},
{
  country:"dans la gueule de seb" ,
  destination :"Nul part" ,
  photo :"https://d24irw6hr5upwc.cloudfront.net/1-home_default/drapeau-france-5075-cm.jpg",
distance : "1000 km"
},
{
   country:"Nul part" ,
   destination:"Nul part" ,
   photo:"https://d24irw6hr5upwc.cloudfront.net/77-home_default/drapeau-irlande-5075-cm.jpg",
distance:"1000 km"
 } , 
 {
 country:"Coin perdu",
 destination:"Nul part",
 photo:"https://cdn.pixabay.com/photo/2017/10/06/13/58/old-village-2823175_960_720.jpg",
distance:"1000 km"
 }
] ;
const Travels = () => (
    <div>
      {travels.map(country => <Travel country={country.country} photo={country.photo} distance={country.distance} destination={country.destination} />)}
    </div>
  );

export default Travels