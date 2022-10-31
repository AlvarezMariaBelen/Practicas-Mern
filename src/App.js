import "./App.css";
import tituloCard from "./components/tituloCard";

function App() {
  return (
    <div className="card">
      <tituloCard></tituloCard>
      <p className="down">pa abajo</p>
      <div className="datas">
        <p>dr strange 2</p>
      </div>
      <div className="datas">
        <p>dr steven open a portal</p>
      </div>
    </div>
  );
}

export default App;

//para usar una variable de js, se emplea directamente con {}
