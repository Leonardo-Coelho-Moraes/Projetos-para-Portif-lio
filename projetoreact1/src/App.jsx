import React from "react";
import Cursos from './pages/Cursos';
import Home from './pages/Home';
import Noticias from './pages/Noticias';
import Vagas from './pages/Vagas';
import Contato from './pages/Contato';
import CursoSolo from './pages/CursoSolo';
import Erro from './components/Erro';
import SharedLayout from './components/SharedLayout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return ( 
    <>
    <BrowserRouter>
    
      <Routes>
          <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Home/>} />
              <Route path="noticias" element={<Noticias/>} />
              <Route path="vagas" element={<Vagas/>} />
              <Route path="cursos" element={<Cursos/>} />
              <Route path='cursos/:cursotId' element={<CursoSolo />} />
              <Route path="contato" element={<Contato/>} />
          </Route>
          <Route path='*' element={<Erro/>} />
        </Routes>
    </BrowserRouter>
    </>
    );
}
