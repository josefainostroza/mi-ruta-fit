import { Link, useNavigate } from 'react-router-dom';
import {
	StyledButtonClose,
	StyledButtonProfile,
	StyledContainer,
	StyledContainerHeader,
	StyledContainerHome,
	StyledContainerMenu,
	StyledContainernButton,
	StyledLogo,
	StyledMenu,
	StyledMenuclick,
	// Styledtext,
	StyledUser,
	StyledUserName
} from './home.styles';

const Home = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('email');
		navigate('/login');
	};

	return (
		<StyledContainerHome>
			<StyledContainerHeader>
				<StyledUser>
					<img src='/assets/images/user.png' alt='' />
					<StyledUserName>¡Hola Lucas!</StyledUserName>
				</StyledUser>
				<StyledContainernButton>
					<StyledButtonProfile>Mi Perfil</StyledButtonProfile>
					<Link onClick={logout}>
						<StyledButtonClose>Cerrar Sesión</StyledButtonClose>
					</Link>
				</StyledContainernButton>
			</StyledContainerHeader>
			<StyledContainer>
				<StyledLogo>MI RUTA FIT</StyledLogo>
				{/* <Styledtext>¿Que deseas hacer hoy?</Styledtext> */}
				<StyledContainerMenu>
					<Link to='/home'>
						<StyledMenuclick>Inicio</StyledMenuclick>
					</Link>

					<Link to='/miruta'>
						<StyledMenu>Mi ruta fit</StyledMenu>
					</Link>
					{/* <StyledMenu>Retos</StyledMenu>
					<StyledMenu>Blog</StyledMenu> */}
				</StyledContainerMenu>
			</StyledContainer>
		</StyledContainerHome>
	);
};

export default Home;
