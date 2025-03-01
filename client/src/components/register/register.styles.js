import styled from 'styled-components';

const StyledLogo = styled.h2`
	color: #c4d9d2;
	font-size: 40px;
	font-weight: 400;
`;
const StyledTitle = styled.h2`
	color: hsl(0, 0%, 100%);
	font-size: 48px;
	font-weight: 700;
	margin-top: 40px;
	margin-bottom: 20px;
`;
const Styledsubtitle = styled.p`
	color: hsl(0, 0%, 100%);
	font-size: 18px;
	font-weight: 400;
	text-align: center;
`;
const Styledsubtitleregister = styled.p`
	color: hsl(0, 0%, 100%);
	font-size: 18px;
	font-weight: 400;
	text-align: center;
	margin-top: 8px;
`;
const StyledTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
const StyledContainerRegister = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 150px;
	gap: 66px;
`;
const Styledimg = styled.img`
	width: 656px;
	height: 962px;
	display: block;
	border-radius: 60px;
	padding: 34px 34px 34px 0px;
`;
const StyledContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Styledform = styled.input`
	width: 100%;
	background-color: transparent;
	border: solid white 0.5px;
	border-radius: 50px;
	padding: 15px 67px;
	color: rgb(110, 113, 118);
`;
const StyledContainerForm = styled.div`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
const StyledButton = styled.button`
	border-radius: 50px;
	padding: 15px 200px;
	margin-top: 52px;
	margin-bottom: 30px;
`;
const StyledText = styled.p`
	font-size: 18px;
	font-weight: 200;
	display: flex;
	justify-content: center;
`;
const StyledLogin = styled.span`
	font-weight: 600;
	margin-left: 10px;
`;
export {
	StyledLogo,
	StyledTitle,
	Styledsubtitle,
	Styledsubtitleregister,
	StyledTextContainer,
	StyledContainerRegister,
	Styledimg,
	StyledContainer,
	Styledform,
	StyledContainerForm,
	StyledButton,
	StyledText,
	StyledLogin
};
