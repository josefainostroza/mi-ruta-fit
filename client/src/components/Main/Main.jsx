import {
	StyledBanner,
	Styledbuttonlogin,
	Styledbuttonregister,
	StyledContainer,
	StyledContainerBanner,
	StyledContainerButton,
	Styledimg,
	StyledLogo,
	Styledtext,
	Styledtextslogan
} from './Main.styles';

const Main = () => {
	return (
		<StyledContainer>
			<StyledBanner>
				<Styledimg src='/assets/images/BannerHome.png' alt='' />
				<StyledContainerBanner>
					<StyledLogo>MI RUTA FIT</StyledLogo>
					<div>
						<Styledtext>Registra, analiza y supera tus límites.</Styledtext>
						<Styledtextslogan>¡Tu progreso comienza aquí!</Styledtextslogan>
					</div>
					<StyledContainerButton>
						<Styledbuttonlogin to='/login'>Iniciar Sesión</Styledbuttonlogin>
						<Styledbuttonregister to='/register'>
							Registrate
						</Styledbuttonregister>
					</StyledContainerButton>
				</StyledContainerBanner>
			</StyledBanner>
			<div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</StyledContainer>
	);
};
export default Main;
