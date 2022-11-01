import React from "react"

export default function FlechaAbajo(props) {
    let {desplazo} = props //saco la propiedad desplazo del objeto props (desestructurar, a traves de las llaves)
    let {onClick} = props
    return(
        
        <button className="arrow" onClick={onClick}>{desplazo}</button>
        
   )
}