import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExercise, deleteExercise } from '../features/exerciseSlice';

const Exercises = () => {
  const exercises = useSelector(state => state.exercises);
  const dispatch = useDispatch();
  const [exercise, setExercise] = useState({ type: '', duration: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = { ...exercise, id: Date.now() };
    dispatch(addExercise(newExercise));
    setExercise({ type: '', duration: '' });
  };

  return (
    <div>
      <h1>Exercises</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Type:</label>
          <input
            type="text"
            value={exercise.type}
            onChange={(e) => setExercise({ ...exercise, type: e.target.value })}
          />
        </div>
        <div>
          <label>Duration (in minutes):</label>
          <input
            type="number"
            value={exercise.duration}
            onChange={(e) => setExercise({ ...exercise, duration: e.target.value })}
          />
        </div>
        <button type="submit">Add Exercise</button>
      </form>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            {exercise.type} - {exercise.duration} minutes
            <button onClick={() => dispatch(deleteExercise(exercise.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
