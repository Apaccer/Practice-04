import { createSlice } from '@reduxjs/toolkit';

export const INITIAL_STATE = {
  todos: { items: [] },
  filter: '',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.items = state.todos.items.filter(
        todo => todo.id !== action.payload,
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
