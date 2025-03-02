import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledContainer,
	StyledContainerForm,
	StyledContainerRegister,
	Styledform,
	Styledimg,
	StyledLogin,
	StyledLogo,
	Styledsubtitle,
	Styledsubtitleregister,
	StyledText,
	StyledTextContainer,
	StyledTitle
} from './register.styles';

const Register = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = async data => {
		try {
			const formattedData = {
				...data,
				dob: new Date(data.dob).toISOString() // Convierte a formato ISO para MongoDB
			};

			const response = await axios.post(
				'http://localhost:3000/user/create',
				formattedData
			);
			alert('Usuario registrado con éxito');

			console.log(response);

			if (response.status === 200) {
				navigate('/home');
			}
		} catch (error) {
			console.error('Error al registrar usuario:', error);
			alert('Hubo un error al registrar el usuario');
		}
	};

	return (
		<StyledContainer>
			<StyledContainerRegister>
				<StyledTextContainer>
					<StyledLogo>MI RUTA FIT</StyledLogo>
					<StyledTitle>¡Te esperábamos!</StyledTitle>
					<div>
						<Styledsubtitle>
							Guarda cada kilómetro recorrido y observa tu evolución.
						</Styledsubtitle>
						<Styledsubtitleregister>
							¡Registrate y empieza hoy!{' '}
						</Styledsubtitleregister>
					</div>
				</StyledTextContainer>
				<form onSubmit={handleSubmit(onSubmit)}>
					{' '}
					<StyledContainerForm>
						<Styledform
							{...register('firstName', {
								required: 'El nombre es obligatorio'
							})}
							placeholder='Nombre'
						/>
						{errors.firstName && <p>{errors.firstName.message}</p>}
						<Styledform
							{...register('lastName', {
								required: 'El apellido es obligatorio'
							})}
							placeholder='Apellido'
						/>
						{errors.lastName && <p>{errors.lastName.message}</p>}
						<Styledform
							{...register('dob', {
								required: 'La fecha de nacimiento es obligatoria'
							})}
							type='date'
							placeholder='Fecha de nacimiento'
						/>
						{errors.dob && <p>{errors.dob.message}</p>}
						<Styledform
							{...register('email', { required: 'El email es obligatorio' })}
							placeholder='Email'
						/>
						{errors.email && <p>{errors.email.message}</p>}

						{/* Campo de contraseña */}
						<Styledform
							{...register('password', {
								required: 'La contraseña es obligatoria'
							})}
							type='password'
							placeholder='Contraseña'
						/>
						{errors.password && <p>{errors.password.message}</p>}
					</StyledContainerForm>
					<StyledButton type='submit'>Registrarme</StyledButton>
					<StyledText>
						¿Ya tienes una cuenta?{' '}
						<Link to='/login'>
							{' '}
							<StyledLogin>Iniciar sesión</StyledLogin>
						</Link>
					</StyledText>
				</form>
			</StyledContainerRegister>
			<Styledimg src='/assets/images/imgRegister.jpg' alt='' />
		</StyledContainer>
	);
};

export default Register;
