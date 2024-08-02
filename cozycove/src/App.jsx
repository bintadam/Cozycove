import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'

export default function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route to='/sign-in' elament={<Signin/>}/>
        <Route to='/sign-up' elament={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

