import { useEffect, useState } from 'react';

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
import axios from 'axios';

const MiRuta = () => {
	const [activities, setActivities] = useState([]);
	const [allActivities, setAllActivities] = useState([]);
	const [form, setForm] = useState({
		toa: '',
		km: '',
		startDate: '',
		endDate: ''
	});

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		getActivities();
	}, [activities]);

	const getActivities = async () => {
		try {
			const response = await axios.post(
				`http://localhost:3000/user/activities`,
				{
					email: localStorage.getItem('email')
				}
			);
			setAllActivities(response.data.activities);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post(
				`http://localhost:3000/user/${localStorage.getItem('id')}`,
				{
					toa: form.toa,
					km: form.km,
					startDate: form.startDate,
					endDate: form.endDate
				}
			);
			alert('Usuario registrado con éxito');

			console.log(response);
		} catch (error) {
			console.error('Error al registrar usuario:', error);
			alert('Hubo un error al registrar el usuario');
		}
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
							<StyledActivity
								type='text'
								name='toa'
								value={form.toa}
								onChange={handleChange}
								required
								placeholder='Título del circuito'
							/>
						</div>
						<div>
							<StyledActivity
								type='number'
								name='km'
								value={form.km}
								onChange={handleChange}
								required
								placeholder='km recorridos'
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
					<StyledButtonActivity type='submit' onClick={handleSubmit}>
						Registrar Circuito
					</StyledButtonActivity>
				</FormWrapper>

				<ActivityCard>
					{allActivities.map(activity => (
						<Card key={activity.id}>
							<CardContent>
								<p className='font-semibold'>{activity.toa}</p>
								<p>Inicio: {new Date(activity.startDate).toLocaleString()}</p>
								<p>Fin: {new Date(activity.endDate).toLocaleString()}</p>
							</CardContent>
						</Card>
					))}
				</ActivityCard>

				{allActivities.length > 0 && (
					<ChartWrapper>
						<h2>Progreso</h2>
						<ResponsiveContainer width='100%' height={300}>
							<LineChart
								data={allActivities.map((a, i) => ({
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
