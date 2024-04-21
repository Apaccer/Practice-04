import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todoSlice';

export const Form = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    const todo = { id: nanoid(), text: value };
    dispatch(addTodo(todo));
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
