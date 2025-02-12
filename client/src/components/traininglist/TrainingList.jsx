import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const TrainingList = () => {
	const [trainings, setTrainings] = useState([]);
	const [chartData, setChartData] = useState({});

	useEffect(() => {
		const fetchTrainings = async () => {
			const response = await axios.get('http://localhost:5000/api/trainings');
			setTrainings(response.data);
			updateChart(response.data);
		};

		fetchTrainings();
	}, []);

	const updateChart = trainings => {
		const dates = trainings.map(training => training.fecha);
		const durations = trainings.map(training => training.duracion);

		setChartData({
			labels: dates,
			datasets: [
				{
					label: 'Duración de Entrenamientos',
					data: durations,
					borderColor: 'rgba(75, 192, 192, 1)',
					fill: false
				}
			]
		});
	};

	return (
		<div>
			<h2>Entrenamientos</h2>
			<Line data={chartData} />
			<ul>
				{trainings.map((training, index) => (
					<li key={index}>
						{training.fecha} - {training.tipo} - {training.duracion} min
					</li>
				))}
			</ul>
		</div>
	);
};

export default TrainingList;
