import {Route, Routes}  from 'react-router-dom'
import Navigation from './navigation'
import Home from '../pages/home'
import Crud from '../pages/crud'

export default function Router() { return (
    <div>
      <global>
        <Navigation/>
      </global>
      <Routes>
        <Route path ='/' element = {<Home/>}></Route>
        <Route path ='/crud' element = {<Crud/>}></Route>
      </Routes>
    </div>
  )}