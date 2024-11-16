import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Menu from './pages/menu';
import Addchicken from './pages/addchicken';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
	  	<Routes>
	  	  <Route path="/login" element={<Login />} />
	  	  <Route path="/register" element={<Register />} />
	  	  <Route path="/menu" element={<Menu/>} />
	  	  <Route path="/add-chicken" element={<Addchicken/>} />
	  	</Routes>
	  </div>
    </>
  )
}

export default App

