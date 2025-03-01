import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async data => {
		try {
			// Enviar los datos al backend
			const response = await axios.post(
				'http://localhost:3000/user/create',
				data
			);
			alert('Usuario registrado con éxito');

			if (response) {
				navigate('/home');
			}
		} catch (error) {
			console.error('Error al registrar usuario:', error);
			alert('Hubo un error al registrar el usuario');
		}
	};

	return (
		<div>
			<h2>Registro de Usuario</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register('firstName', { required: 'El nombre es obligatorio' })}
					placeholder='Nombre'
				/>
				{errors.firstName && <p>{errors.firstName.message}</p>}

				<input
					{...register('lastName', { required: 'El apellido es obligatorio' })}
					placeholder='Apellido'
				/>
				{errors.lastName && <p>{errors.lastName.message}</p>}

				<input
					{...register('email', { required: 'El email es obligatorio' })}
					placeholder='Email'
				/>
				{errors.email && <p>{errors.email.message}</p>}

				{/* Campo de contraseña */}
				<input
					{...register('password', {
						required: 'La contraseña es obligatoria'
					})}
					type='password'
					placeholder='Contraseña'
				/>
				{errors.password && <p>{errors.password.message}</p>}

				<button type='submit'>Registrar</button>
			</form>

			{/* Link para ir a la página de Login */}
			<div>
				<p>
					¿Ya tienes una cuenta? <Link to='/login'>Iniciar sesión</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
