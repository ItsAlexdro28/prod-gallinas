import { useContext } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css'
import { AuthContext } from './auth/context/AuthContext';
// import { UserRoutes } from './routes/UserRoutes';
import LoginPage from './auth/pages/login'
import Register from './pages/register';
import Menu from './pages/menu';
import Addchicken from './pages/addchicken';
import RoutesMenu from './pages/routesmenu';
import ChickenGroups from './pages/chickengroups';
import GenerateReport from './pages/generatereport';
import GenerateAnalysis from './pages/generateanalysis';
import UserOptions from './pages/useroptions';

function App() {
  const context = useContext(AuthContext);

  return (
    <>
	  	<Routes>
		  {
            context?.login?.isAuth
			  ? (
	  	        <Route path="/*" element={<Menu/>} />
			  )
			  : <>
				
	  	        <Route path="/login" element={<LoginPage/>} />
	  	        <Route path="/*" element={<Navigate to="/login" />} />
			  </>

			  

		  }
	  	  <Route path="/menumenu" element={<RoutesMenu />} />
	  	  <Route path="/register" element={<Register />} />
	  	  <Route path="/menu" element={<Menu/>} />
	  	  <Route path="/add-chicken" element={<Addchicken/>} />
	  	  <Route path="/chicken-groups" element={<ChickenGroups/>} />
	  	  <Route path="/generate-report" element={<GenerateReport/>} />
	  	  <Route path="/generate-analysis" element={<GenerateAnalysis/>} />
	  	  <Route path="/user-options" element={<UserOptions/>} />
	  	</Routes>
    </>
  );
}

export default App

