/*
    Aqui fica o menu principal onde interliga com as outras duas telas (duas atividades - 7 e a 11)
*/

import React from "react";
import { Button } from 'primereact/button';
import "./menu.css"
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import {Link, useNavigate} from 'react-router-dom'

export default function Menu() {

    const navigate = useNavigate();

    function PushCalculadora(){
        navigate('calculadora')
    }

    function PushCaixaSaque(){
        navigate('caixa-saque')
    }

    return (
        <main className="container">
                    <section className="navegacao-lista">
                        <article className="navegacao-lista--opcoes">
                            <p className="navegacao-calculadora">Calculadora IMC</p>
                            <Button onClick={PushCalculadora} className="navegacao-botao" style={{backgroundColor: '#edecec', color: '#6051e6'}} label="CALCULE" icon="pi pi-user" />
                        </article>

                        <article className="navegacao-lista--opcoes">
                            <p className="navegacao-caixa">Caixa Eletrônico</p>
                            <Button onClick={PushCaixaSaque} className="navegacao-botao" style={{backgroundColor: '#edecec', color: '#6051e6'}} label="SAQUE" icon="pi pi-money-bill" />
                        </article>
                    </section>
        </main>
    )
}