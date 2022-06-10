import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Configuracion } from '../Pages/Configuracion'
import { Contacto } from '../Pages/Contacto'
import { Escritos } from '../Pages/Escritos'
import { Inicio } from '../Pages/Inicio'
import { OtrosAutores } from '../Pages/OtrosAutores'
import {HeadTitleUrl} from '../Helpers/HeadTitleUrl';
import { EscritoSingular } from '../Components/EscritoSingular'
import { Nuevo } from '../Pages/Nuevo'

export const PublicRouter = () => {
  const location = useLocation()
  HeadTitleUrl(location.pathname)
  return (
    <Routes>
        <Route index element={<Inicio/>}></Route>
        <Route exact={true} path='/inicio' element={<Inicio/>}></Route>
        <Route exact={true} path='/escritos' element={<Escritos/>}></Route>
        <Route exact={true} path='/escritos/:id' element={<EscritoSingular/>}></Route>
        <Route exact={true} path='/otros' element={<OtrosAutores/>}></Route>
        <Route exact={true} path='/configuracion' element={<Configuracion/>}></Route>
        <Route exact={true} path='/contacto' element={<Contacto/>}></Route>
        <Route exact={true} path='/nuevo' element={<Nuevo/>}></Route>
    </Routes>
  )
}
