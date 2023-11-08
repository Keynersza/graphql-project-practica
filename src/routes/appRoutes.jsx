import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import SignIn from '../Views/signIn'
import SignUp from '../Views/signUp'
import Error404 from '../Pages/error404'
import InputProduct from '../components/Forms/InputProduct'
import { PrivateRoute } from './Private/privateRoute'
import Producto from '../Views/Producto'
import PasarelaPago from '../Views/pasarelaPago'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<PrivateRoute/>}>
         <Route path='/create-product' element = {<InputProduct/>}/>
         <Route path='/pasarelaPago' element = {<PasarelaPago/>}/>
    </Route>
      {/* <Route element={publicRoute}/>  */}
      <Route path='/' element = {<Home/>}/>
      <Route path='/produc/:id' element = {<Producto/>}/>
      <Route path='/sesion' element = {<SignIn/>}/>
      <Route path='/register' element = {<SignUp/>}/>
      <Route path='*' element = {<Error404/>}/>
    </Routes>
    </BrowserRouter>
  )
}