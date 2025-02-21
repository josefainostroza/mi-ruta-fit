import { useState } from 'react';

import { motion } from 'framer-motion';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Label
} from 'recharts';
import {
	ActivityCard,
	ChartWrapper,
	Container,
	FormWrapper
} from './home.styles';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';

const Home = () => {
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
		<Container>
			<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				Mi Ruta Fit
			</motion.h1>

			<FormWrapper>
				<Card>
					<CardContent>
						<form onSubmit={handleSubmit} className='flex flex-col gap-4'>
							<div>
								<Label>Tipo de Actividad</Label>
								<Input
									name='toa'
									value={form.toa}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label>Hora de Inicio</Label>
								<Input
									type='datetime-local'
									name='startDate'
									value={form.startDate}
									onChange={handleChange}
									required
								/>
							</div>
							<div>
								<Label>Hora Final</Label>
								<Input
									type='datetime-local'
									name='endDate'
									value={form.endDate}
									onChange={handleChange}
									required
								/>
							</div>
							<Button type='submit'>Registrar Actividad</Button>
						</form>
					</CardContent>
				</Card>
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
								duration: (new Date(a.endDate) - new Date(a.startDate)) / 60000
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
	);
};

export default Home;
