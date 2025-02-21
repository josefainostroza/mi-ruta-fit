import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async data => {
		try {
			const response = await axios.post(
				`http://localhost:3000/user/login`,
				data
			);

			if (!response.data.login) {
				alert(response.data.message);
			} else {
				navigate('/home');
			}
		} catch (error) {
			console.error('Error al iniciar sesión:', error);
		}
	};

	return (
		<div>
			<h2>Iniciar Sesión</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register('email', { required: 'El email es obligatorio' })}
						placeholder='Email'
					/>
					{errors.email && <span>{errors.email.message}</span>}
				</div>

				<div>
					<input
						{...register('password', {
							required: 'La contraseña es obligatoria'
						})}
						type='password'
						placeholder='Contraseña'
					/>
					{errors.password && <span>{errors.password.message}</span>}
				</div>

				<button type='submit'>Iniciar sesión</button>
			</form>

			<div>
				<p>
					¿No tienes cuenta? <Link to='/register'>Regístrate</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
