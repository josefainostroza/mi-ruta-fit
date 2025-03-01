import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import {
	StyledButton,
	StyledContainer,
	StyledContainerForm,
	StyledContainerLogin,
	Styledform,
	Styledimg,
	StyledLogo,
	StyledRegister,
	Styledsubtitle,
	Styledsubtitlelogin,
	StyledText,
	StyledTextContainer,
	StyledTitle
} from './login.styles';

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
		<StyledContainer>
			<StyledContainerLogin>
				<StyledTextContainer>
					<StyledLogo>MI RUTA FIT</StyledLogo>
					<StyledTitle>¡Ya estás de vuelta!</StyledTitle>
					<div>
						<Styledsubtitle>Tu progreso te espera.</Styledsubtitle>
						<Styledsubtitlelogin>
							Inicia sesión y sigue avanzando en tu ruta.{' '}
						</Styledsubtitlelogin>
					</div>
				</StyledTextContainer>
				<form onSubmit={handleSubmit(onSubmit)}>
					<StyledContainerForm>
						<Styledform
							{...register('email', { required: 'El email es obligatorio' })}
							placeholder='Email'
						/>
						{errors.email && <span>{errors.email.message}</span>}
						<Styledform
							{...register('password', {
								required: 'La contraseña es obligatoria'
							})}
							type='password'
							placeholder='Contraseña'
						/>
						{errors.password && <span>{errors.password.message}</span>}
					</StyledContainerForm>
					<StyledButton to='/home'>Iniciar sesión</StyledButton>

					<StyledText>
						¿No tienes cuenta?{' '}
						<Link to='/register'>
							{' '}
							<StyledRegister>Regístrate</StyledRegister>
						</Link>
					</StyledText>
				</form>
			</StyledContainerLogin>
			<Styledimg src='/assets/images/imgLogin.jpg' alt='' />
		</StyledContainer>
	);
};

export default Login;
