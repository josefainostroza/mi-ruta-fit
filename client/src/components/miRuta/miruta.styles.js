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

export const Container = styled.div`
	min-height: 100vh;
	color: white;
	padding: 35px 72px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	margin-top: 20px;
	background-color: #91d3df;
	padding: 40px 100px;
	border-radius: 40px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;
export const ContainerForm = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;
`;
export const StyledActivity = styled.input`
	padding: 10px;
	border-radius: 50px;
	border: solid 1px rgb(9, 73, 85);
	background-color: transparent;
`;
export const StyledActivityText = styled.label`
	color: black;
`;
export const StyledButtonActivity = styled.button`
	padding: 10px 100px;
	border-radius: 50px;
	border: 0;
	background-color: white;
`;
export const ActivityCard = styled.div`
	width: 100%;
	max-width: 800px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	gap: 16px;
	margin-top: 20px;
`;

export const ChartWrapper = styled.div`
	width: 100%;
	background-color: #868ec1;
	padding: 20px;
	margin-top: 20px;
	border-radius: 40px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
	text-align: center;
`;
