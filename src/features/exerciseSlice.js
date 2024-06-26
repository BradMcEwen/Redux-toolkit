import { createSlice } from '@reduxjs/toolkit';

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    addExercise: (state, action) => {
      state.push(action.payload);  // This is no good right? I looked up a bunch of solutions for this part and couldn't get a clear answer
    },
    deleteExercise: (state, action) => {
      return state.filter(exercise => exercise.id !== action.payload);
    },
  },
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
