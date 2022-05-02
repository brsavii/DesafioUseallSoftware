/*
    Aqui fica as rotas, guiando para menu, para a tela de calculo de IMC e para a tela do caixa eletrônico.
*/

import {Route, HashRouter, Routes} from 'react-router-dom'
import Menu from './menu';
import Calculadora from './components/Calculadora/Calculadora'
import Caixa from './components/Caixa/Caixa'

export default function Rotas(){
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Menu />}></Route>
                <Route path='/calculadora' element={<Calculadora />}></Route>
                <Route path='/caixa-saque' element={<Caixa />}></Route>
            </Routes>
        </HashRouter>
    )
}