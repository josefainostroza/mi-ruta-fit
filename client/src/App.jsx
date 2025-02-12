import React, { useState } from 'react';
import TrainingForm from './components/trainingform/TrainingForm';
import TrainingList from './components/traininglist/TrainingList';

const App = () => {
	const [trainings, setTrainings] = useState([]);

	const handleTrainingAdded = newTraining => {
		setTrainings([...trainings, newTraining]);
	};

	return (
		<div>
			<h1>Diario de Entrenamientos</h1>
			<TrainingForm onTrainingAdded={handleTrainingAdded} />
			<TrainingList />
		</div>
	);
};

export default App;
