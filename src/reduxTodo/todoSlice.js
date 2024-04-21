import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  todos: { items: [] },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.items.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
