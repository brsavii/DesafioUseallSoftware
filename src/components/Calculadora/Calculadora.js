/*
    Atividade 7 do desafio
*/

import { Button } from "primereact/button";
import React, { useState } from "react";
import './calculadora.css'
import { AutoComplete } from 'primereact/autocomplete';
import { useNavigate } from "react-router-dom";

function Calculadora() {

    const navigate = useNavigate();

    function PushMenu() {
        navigate('/')
    }

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [imc, setImc] = useState(0);
  
    const calcularIMC =() =>{
      setImc((peso/(altura*altura)).toFixed(2));
    };
  
    function verificarIMC(){
      if(imc < 18){
        return "Abaixo do Peso";
      }else if( imc < 25){
        return "Peso Normal";
      }else if( imc >= 25){
        return "Acima do Peso";
      }
    }

    return (
        <section className="navegacao-lista">
            <div style={{opacity: 0.9, height: '40px', width: '380px', marginBottom: 0}} className="navegacao-lista--opcoes">
                <span style={{color: '#ffffff', textTransform:'uppercase', fontWeight: 700}}>O seu IMC é: {imc} kg/mc = {verificarIMC()}</span>
            </div>

            <div className="navegacao-lista--opcoes" style={{opacity: 0.9, height: '450px', width: '380px'}}>
                <article className="secao-input">
                     <label className="titulo-texto">Digite Sua Altura:</label>
                    <AutoComplete type="number" placeholder="metros" value={altura} onChange={(e)=>{setAltura(e.target.value)}}/>
                </article>

                <article className="secao-input">
                    <label className="titulo-texto">Digite Seu Peso:</label>
                    <AutoComplete type="number" placeholder="quilos" value={peso} onChange={(e)=>{setPeso(e.target.value)}}/>
                </article>
            <Button onClick={calcularIMC}  className="calcular-botao" style={{backgroundColor: '#edecec', color: '#6051e6', top: '2rem'}} label="CALCULAR" />
            </div>
            <Button onClick={PushMenu}className="calcular-botao" style={{backgroundColor: '#6051e6', color: '#edecec'}} label="VOLTAR" />
        </section>
    )
}
export default Calculadora;