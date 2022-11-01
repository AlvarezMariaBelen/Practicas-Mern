import React from "react"

export default function DatosCard(props) {  //props conforma un objeto con todas las propiedades que yo paso "del padre al hijo"
    let {datas} = props
    return( 
      <div className="datas">
        <p>{datas}</p>
      </div>  
   )
}