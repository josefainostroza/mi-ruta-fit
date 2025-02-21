import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'; // Asegúrate de tener el archivo correcto
import Register from './components/register/Register'; // Asegúrate de tener el archivo correcto
import Home from './components/home/Home';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
