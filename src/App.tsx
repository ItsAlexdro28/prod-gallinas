import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Menu from './pages/menu';
import Addchicken from './pages/addchicken';
import RoutesMenu from './pages/routesmenu';
import ChickenGroups from './pages/chickengroups';
import GenerateReport from './pages/generatereport';
import GenerateAnalysis from './pages/generateanalysis';
import UserOptions from './pages/useroptions';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
	  	<Routes>
	  	  <Route path="/" element={<RoutesMenu />} />
	  	  <Route path="/login" element={<Login />} />
	  	  <Route path="/register" element={<Register />} />
	  	  <Route path="/menu" element={<Menu/>} />
	  	  <Route path="/add-chicken" element={<Addchicken/>} />
	  	  <Route path="/chicken-groups" element={<ChickenGroups/>} />
	  	  <Route path="/generate-report" element={<GenerateReport/>} />
	  	  <Route path="/generate-analysis" element={<GenerateAnalysis/>} />
	  	  <Route path="/user-options" element={<UserOptions/>} />
	  	</Routes>
	  </div>
    </>
  )
}

export default App

