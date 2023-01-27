import {Route, Routes}  from 'react-router-dom'
import Crud from './crud'

export default function Router() { return (
    <div>
        <Routes>
          <Route path ='/' element = {<Crud/>}></Route>
        </Routes>
    </div>
  )}