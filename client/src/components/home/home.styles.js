import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	background-color: #2c2c2c;
	color: white;
	padding: 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FormWrapper = styled.div`
	width: 100%;
	max-width: 600px;
	margin-top: 20px;
	background-color: #c9d8d1;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
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
	max-width: 800px;
	background-color: #868ec1;
	padding: 20px;
	margin-top: 20px;
	border-radius: 10px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
	text-align: center;
`;
