import React, { useState } from 'react';
import axios from 'axios';

const TrainingForm = ({ onTrainingAdded }) => {
	const [tipo, setTipo] = useState('');
	const [duracion, setDuracion] = useState('');
	const [intensidad, setIntensidad] = useState('');
	const [fecha, setFecha] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const newTraining = { tipo, duracion, intensidad, fecha };

		try {
			const response = await axios.post(
				'http://localhost:5000/api/trainings',
				newTraining
			);
			onTrainingAdded(response.data);
		} catch (error) {
			console.error('Error al agregar el entrenamiento', error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Tipo de entrenamiento'
				value={tipo}
				onChange={e => setTipo(e.target.value)}
			/>
			<input
				type='number'
				placeholder='Duración (min)'
				value={duracion}
				onChange={e => setDuracion(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Intensidad'
				value={intensidad}
				onChange={e => setIntensidad(e.target.value)}
			/>
			<input
				type='date'
				value={fecha}
				onChange={e => setFecha(e.target.value)}
			/>
			<button type='submit'>Agregar Entrenamiento</button>
		</form>
	);
};

export default TrainingForm;
