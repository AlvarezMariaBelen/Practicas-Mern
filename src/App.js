import "./App.css";
import TituloCard from "./components/TituloCard";
import DatosCard from "./components/DatosCard";
import Flechas from "./components/Flechas";
import data from "./data/datos";
import { useState } from "react";

function App() {
  let [mostrarOcultar,setMostrarOcultar] = useState(false)
  let ocultar = () => {
    setMostrarOcultar(!mostrarOcultar)
    //console.log('mostrarOcultar')
  }
  let [cambioDat, setCambioDat] = useState(0); //el hook de estado esta compuesto por la varible que va a cambiar y por la funcion que va a modificar esa varible
  //es necesario pre definir con que valor inicia el estado, en el parentesis del hook de estado
  let next = () => {
    if (cambioDat < data.length - 1) {
      //console.log('esta actuando la funcion')
      setCambioDat(++cambioDat);
    } else {
      setCambioDat(0);
    }
  };
  let previous = () => {
    if (cambioDat > 0) {
      //console.log('esta actuando la funcion')
      setCambioDat(--cambioDat);
    } else {
      setCambioDat(data.length - 1);
    }
  };

  return (
    <div className="card">
      <TituloCard
        titulo={data[cambioDat].category}
        foto={data[cambioDat].image}
      ></TituloCard>
      <div className="contarrow">
        <Flechas desplazo="Previous" onClick={previous}></Flechas>
        <Flechas desplazo="Next" onClick={next}></Flechas>
        {/*los eventos en los componentes se pasan como propiedades o metodos, no como eventos.
        Por eso es nececario desestructurarlos y aplicarlos en la etiqueta html correspondiente*/}
      </div>
        {/*vamos a armar un condicional que dependa del booleano del evento*/}
        {
          mostrarOcultar ? (<><button className="boton" onClick={ocultar}>Hide</button>
          <DatosCard datas={data[cambioDat].name}></DatosCard>
          <DatosCard datas={data[cambioDat].description}></DatosCard></>) : (<button className="boton" onClick={ocultar}>Show</button>)
        }
    </div>
  );
}

export default App;

//para usar una variable de js, se emplea directamente con {}
