import React from "react"

export default function TituloCard(props) {
    let {titulo,foto} = props 
    return(
        <>
        <h1 className="title">{titulo}</h1>
        <img className="image" src={foto}></img>
        </> 
   )
}