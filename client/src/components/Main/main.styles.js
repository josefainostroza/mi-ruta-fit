import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 46px 71px;
`;

const StyledBanner = styled.div`
	position: relative; /* Permite que los elementos hijos absolutos se posicionen en relación con este */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

const Styledimg = styled.img`
	width: 100%;
	height: auto;
	display: block;
	border-radius: 60px;
`;

const StyledContainerBanner = styled.div`
	position: absolute;
	top: 47px;
	left: 65px;
	display: flex;
	flex-direction: column;
	gap: 85px;
`;
const StyledLogo = styled.h1`
	color: #2f5648;
	font-size: 40px;
	font-weight: 400;
`;
const Styledtext = styled.p`
	color: rgb(23, 23, 23);
	font-size: 40px;
	font-weight: 700;
	width: 350px;
`;
const Styledtextslogan = styled.p`
	color: rgb(23, 23, 23);
	font-size: 40px;
	font-weight: 700;
`;
const Styledbuttonlogin = styled(Link)`
	background-color: #edf656;
	color: #282828;
	border: none;
	padding: 17px 27px;
	border-radius: 50px;
	font-size: 16px;
`;
const Styledbuttonregister = styled(Link)`
	background-color: rgb(255, 255, 255);
	color: #282828;
	border: none;
	padding: 17px 27px;
	border-radius: 50px;
	font-size: 16px;
`;
const StyledContainerButton = styled.div`
	display: flex;
	gap: 25px;
`;

export {
	StyledBanner,
	Styledimg,
	StyledContainer,
	StyledContainerBanner,
	StyledLogo,
	Styledtext,
	Styledtextslogan,
	Styledbuttonlogin,
	Styledbuttonregister,
	StyledContainerButton
};
