import React, { useEffect, useState } from 'react';
import './FraseGatos.css';

export default function FraseGatos() {
  const [fact1,setFact]=useState("") 
  const [gift,setGift]=useState("");

  function giftApi(string){
      const apiGift=`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}`
      fetch(apiGift)
      .then(res=>res.json())
      .then((el)=>{
          setGift(el.data[0].images.original.url)
      })
  }


  function catFact(){
    fetch("https://catfact.ninja/fact")
    .then(res=>res.json())
    .then((data)=>{
        setFact(data.fact||"Hola soy Emma!!")
        giftApi(data.fact.split(" ",3).join(" "))
    })
  }

  function handleClickGift(){
    fetch("https://catfact.ninja/fact")
    .then(res=>res.json())
    .then((data)=>{
        giftApi(data.fact.split(" ",3).join(" "))
    })
  }

  function catFactfact(){
    fetch("https://catfact.ninja/fact")
    .then(res=>res.json())
    .then((data)=>{
        setFact(data.fact||"Hola soy Emma!!")
    })
  }


  useEffect(catFact,[])

  return (
    <div>

    <div className="container">
        <img src={gift} alt="gift" className="imgGift"/>
        <h2 >{fact1}</h2>
    </div>

    <div className="container">
        <button onClick={handleClickGift}>Change Gift</button>
        <button onClick={catFactfact}>Change Fact</button>
    </div>

    </div>

  )
}


