import { useState } from 'react';

import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Label
} from 'recharts';

import { Card, CardContent } from '../ui/card';
import {
	ActivityCard,
	ChartWrapper,
	Container,
	ContainerForm,
	FormWrapper,
	StyledActivity,
	StyledActivityText,
	StyledButtonActivity,
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
} from './miruta.styles';
import { Link } from 'react-router-dom';

const MiRuta = () => {
	const [activities, setActivities] = useState([]);
	const [form, setForm] = useState({ toa: '', startDate: '', endDate: '' });

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		e.preventDefault();
		setActivities([...activities, { ...form, id: Date.now() }]);
		setForm({ toa: '', startDate: '', endDate: '' });
	};

	return (
		<>
			<StyledContainerHome>
				<StyledContainerHeader>
					<StyledUser>
						<img src='/assets/images/user.png' alt='' />
						<StyledUserName>¡Hola Lucas!</StyledUserName>
					</StyledUser>
					<StyledContainernButton>
						<StyledButtonProfile>Mi Perfil</StyledButtonProfile>
						<Link to='/login'>
							<StyledButtonClose to='/login'>Cerrar Sesión</StyledButtonClose>
						</Link>
					</StyledContainernButton>
				</StyledContainerHeader>
				<StyledContainer>
					<StyledLogo>MI RUTA FIT</StyledLogo>
					{/* <Styledtext>¿Que deseas hacer hoy?</Styledtext> */}
					<StyledContainerMenu>
						<Link to='/home'>
							<StyledMenu>Inicio</StyledMenu>
						</Link>

						<StyledMenuclick to='/miruta'>Mi ruta fit</StyledMenuclick>
						{/* <StyledMenu>Retos</StyledMenu>
						<StyledMenu>Blog</StyledMenu> */}
					</StyledContainerMenu>
				</StyledContainer>
			</StyledContainerHome>
			<Container>
				<h2>Ingresa tus km y tiempo de hoy</h2>

				<FormWrapper>
					<ContainerForm
						onSubmit={handleSubmit}
						className='flex flex-col gap-4'
					>
						<div>
							<StyledActivityText>Título del circuito</StyledActivityText>
							<StyledActivity
								name='toa'
								value={form.toa}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Label>Hora de Inicio</Label>
							<StyledActivity
								type='datetime-local'
								name='startDate'
								value={form.startDate}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<Label>Hora Final</Label>
							<StyledActivity
								type='datetime-local'
								name='endDate'
								value={form.endDate}
								onChange={handleChange}
								required
							/>
						</div>
					</ContainerForm>
					<StyledButtonActivity type='submit'>
						Registrar Circuito
					</StyledButtonActivity>
				</FormWrapper>

				<ActivityCard>
					{activities.map(activity => (
						<Card key={activity.id}>
							<CardContent>
								<p className='font-semibold'>{activity.toa}</p>
								<p>Inicio: {new Date(activity.startDate).toLocaleString()}</p>
								<p>Fin: {new Date(activity.endDate).toLocaleString()}</p>
							</CardContent>
						</Card>
					))}
				</ActivityCard>

				{activities.length > 0 && (
					<ChartWrapper>
						<h2>Progreso</h2>
						<ResponsiveContainer width='100%' height={300}>
							<LineChart
								data={activities.map((a, i) => ({
									name: `Act ${i + 1}`,
									duration:
										(new Date(a.endDate) - new Date(a.startDate)) / 60000
								}))}
							>
								<XAxis dataKey='name' stroke='#ffffff' />
								<YAxis stroke='#ffffff' />
								<Tooltip />
								<Line
									type='monotone'
									dataKey='duration'
									stroke='#82ca9d'
									strokeWidth={2}
								/>
							</LineChart>
						</ResponsiveContainer>
					</ChartWrapper>
				)}
			</Container>
		</>
	);
};

export default MiRuta;
