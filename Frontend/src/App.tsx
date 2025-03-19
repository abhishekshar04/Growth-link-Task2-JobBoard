import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
