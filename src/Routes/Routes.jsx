import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from '../components/Cadastro/cadastro';
import Login from '../components/Login/Login';
import CdtProduto from '../components/CdtProduto/CdtProduto';
import Home from '../components/Home/Home';
import Detalhes from '../components/detalhesPdt/Detalhes'
import Pesquisar from '../components/Filtro/Filtro'


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='*' element={<Home />}/>
            <Route path='/cadastro' element={<Cadastro />}/>      
            <Route path='/Login' element={<Login/>}/>
            <Route path='/' element={<Home/>}/> 
            <Route path='/cadastroDeProduto' element={<CdtProduto/>}/>
            <Route path='/Detalhes' element={<Detalhes/>}/>
            <Route path='/Pesquisar' element={<Pesquisar/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;