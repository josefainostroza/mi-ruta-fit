import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login'; // Asegúrate de tener el archivo correcto
import Register from './components/register/Register'; // Asegúrate de tener el archivo correcto
import Main from './components/Main/Main';
import MiRuta from './components/miRuta/MiRuta';
import Home from './components/home/Home';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
	return (
		<Router>
			<GlobalStyles />
			<Routes>
				<Route index element={<Main />} />
				<Route path='/home' element={<Home />} />
				<Route path='/miruta' element={<MiRuta />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;
