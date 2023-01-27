import { BrowserRouter } from 'react-router-dom'
import Router from './components/router'
import Navigation from './components/navigation'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </div>
  )}