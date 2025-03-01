import { Link } from 'react-router-dom';
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
	return (
		<StyledContainerHome>
			<StyledContainerHeader>
				<StyledUser>
					<img src='/assets/images/user.png' alt='' />
					<StyledUserName>¡Hola Lucas!</StyledUserName>
				</StyledUser>
				<StyledContainernButton>
					<StyledButtonProfile>Mi Perfil</StyledButtonProfile>
					<Link to='/login'>
						<StyledButtonClose>Cerrar Sesión</StyledButtonClose>
					</Link>
				</StyledContainernButton>
			</StyledContainerHeader>
			<StyledContainer>
				<StyledLogo>MI RUTA FIT</StyledLogo>
				{/* <Styledtext>¿Que deseas hacer hoy?</Styledtext> */}
				<StyledContainerMenu>
					<Link to='/home'>
						<StyledMenuclick>Resumen</StyledMenuclick>
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
