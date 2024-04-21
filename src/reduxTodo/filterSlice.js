import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './todoSlice';

const filterSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE.filter,
  reducers: {
    changeFilter: (state, action) => action.payload,
  },
  selectors: { selectFilter: state => state },
});

export const { selectFilter } = filterSlice.selectors;
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
