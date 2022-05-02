import { Link } from "react-router-dom";
import Menu from "./menu";
import Rotas from './rotas'
import LogoUseall from './img/logouseall.png'
import './menu.css'


function App() {
  return (
    <div className="container">
      <div className="container-titulo">
        <img className="titulo-img" src={LogoUseall} alt='logo useall' />
        <h1 className="titulo-texto">Desafio Useall Software</h1>
        </div>
        <Rotas />
     </div>
  );
}

export default App;
