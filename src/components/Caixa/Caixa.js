/*
    Atividade 11 do desafio
*/

import { InputNumber } from 'primereact/inputnumber';
import { Button } from "primereact/button";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Caixa() {

    const navigate = useNavigate();
    const [ValorSaque, setValorSaque] = useState(0);
    const [teste, setTeste] = useState(0);
    const [notas, setNotas] = useState(['']);

    function CalcularNotas(ValorSacado) {
        
        setNotas(['']);

        if (ValorSacado % 10 == 0) {
            CalculoNota100(ValorSacado);
        } else {
            setTeste("Valor incompatível com as notas presentes na máquina"); 
            setNotas(notas => [...notas, "Valor incompatível com as notas presentes na máquina"]);
        }
    }
    function CalculoNota100(ValorSacado100) {
        let qtdnota100 = Math.trunc(ValorSacado100 / 100);
        let sobra100 = ValorSacado100 % 100;
        if (qtdnota100 >= 1 && sobra100 != 0) {
            CalculoNota50(sobra100);
            setTeste(qtdnota100 + " Notas de R$100");
            setNotas(notas => [...notas, ' - ' + qtdnota100 + " Notas de R$100"]);
        } else if (sobra100 == 0) {
            setTeste(qtdnota100 + " Notas de R$100");
            setNotas(notas => [...notas, ' - ' + qtdnota100 + " Notas de R$100"]);
        } else {
            CalculoNota50(ValorSacado100);
        }
    }
    function CalculoNota50(ValorSacado50) {
        let qtdnota50 = Math.trunc(ValorSacado50 / 50);
        let sobra50 = ValorSacado50 % 50;
        if (qtdnota50 >= 1 && sobra50 != 0) {
            CalculoNota20(sobra50);
            setTeste(qtdnota50 + " Notas de R$50");
            setNotas(notas => [...notas, ' - ' + qtdnota50 + " Notas de R$50"]);
        } else if (sobra50 == 0) {
            setTeste(qtdnota50 + " Notas de R$50");
            setNotas(notas => [...notas, ' - ' + qtdnota50 + " Notas de R$50"]);
        } else {
            CalculoNota20(ValorSacado50);
        }
    }

    function CalculoNota20(ValorSacado20) {
        let qtdnota20 = Math.trunc(ValorSacado20 / 20);
        let sobra20 = ValorSacado20 % 20;
        if (qtdnota20 >= 1 && sobra20 != 0) {
            CalculoNota10(sobra20);
            setTeste(qtdnota20 + " Notas de R$20");
            setNotas(notas => [...notas, ' - ' + qtdnota20 + " Notas de R$20"]);
        } else if (sobra20 == 0) {
            setTeste(qtdnota20 + " Notas de R$20");
            setNotas(notas => [...notas, ' - ' + qtdnota20 + " Notas de R$20"]);
        } else {
            CalculoNota10(ValorSacado20);
        }

    }
    function CalculoNota10(ValorSacado10) {
        let qtdnota10 = ValorSacado10 / 10;
        setTeste(qtdnota10 + " Notas de R$10"); 
        setNotas(notas => [...notas, ' - ' + qtdnota10 + " Notas de R$10"]);
    }

    function PushMenu() {
        navigate('/')
    }

    return (
        <section className="navegacao-lista">
            <div style={{ opacity: 0.9, height: '100px', width: '25%', marginBottom: 0 }} className="navegacao-lista--opcoes">
                <span style={{ color: '#ffffff', textTransform: 'uppercase', fontWeight: 700 }}>Saque: {notas}</span>
            </div>

            <div className="navegacao-lista--opcoes" style={{ opacity: 0.9, height: '450px', width: '25%' }}>
                <article className="secao-input">
                    <label className="titulo-texto">Valor De Saque:</label>
                    <InputNumber value={ValorSaque} onValueChange={(e) => { setValorSaque(e.target.value) }} min={0} required showButtons mode="currency" currency="BRL" />
                </article>

                <Button onClick={() => CalcularNotas(ValorSaque)} className="calcular-botao" style={{ backgroundColor: '#edecec', color: '#6051e6', top: '5rem' }} label="SACAR" />
            </div>
            <Button onClick={PushMenu} className="calcular-botao" style={{ backgroundColor: '#6051e6', color: '#edecec' }} label="VOLTAR" />
        </section>
    )
}
export default Caixa;