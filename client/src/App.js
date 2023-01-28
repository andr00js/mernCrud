import "./app.css"
import "./components/components.css"
import { BrowserRouter } from 'react-router-dom'
import Router from './pages/router'


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )}