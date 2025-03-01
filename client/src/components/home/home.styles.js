import styled from 'styled-components';

const StyledContainerHome = styled.div`
	padding: 35px 72px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 60px;
`;
const StyledUser = styled.div`
	display: flex;
	align-items: center;
	gap: 25px;
`;

const StyledUserName = styled.h2`
	display: flex;
	align-items: center;
	color: #c4d9d2;
	font-size: 34px;
`;

const StyledButtonProfile = styled.button`
	background-color: #edf656;
	border-radius: 50px;
	padding: 17px 48px;
`;
const StyledButtonClose = styled.button`
	background-color: rgb(255, 255, 255);
	border-radius: 50px;
	padding: 17px 48px;
`;
const StyledContainernButton = styled.div`
	display: flex;
	align-items: center;
	gap: 48px;
`;

const StyledContainerHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 63px;
`;
const StyledLogo = styled.h2`
	color: #2f5648;
	font-size: 40px;
	font-weight: 400;
`;
const Styledtext = styled.p`
	color: #282828;
	font-size: 30px;
	font-weight: 700;
`;
const StyledMenu = styled.button`
	color: rgb(255, 255, 255);
	font-size: 20px;
	font-weight: 400;
	padding: 20px 30px;
	border: 0;
	border-radius: 50px;
	background-color: #8a9c96;
`;
const StyledMenuclick = styled.button`
	color: rgb(43, 43, 43);
	font-size: 20px;
	font-weight: 400;
	padding: 20px 30px;
	border: 0;
	border-radius: 50px;
	background-color: rgb(255, 255, 255);
`;
const StyledContainerMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;
const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-color: #c4d9d2;
	gap: 29px;
	border-radius: 60px;
	padding: 40px 100px;
`;
export {
	StyledContainerHome,
	StyledUser,
	StyledUserName,
	StyledButtonProfile,
	StyledButtonClose,
	StyledContainernButton,
	StyledContainerHeader,
	StyledLogo,
	Styledtext,
	StyledMenu,
	StyledMenuclick,
	StyledContainerMenu,
	StyledContainer
};
