import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { changeFilter, selectFilter } from 'reduxTodo/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filterValue}
      onChange={e => {
        console.log('e.target.value:', e.target.value);
        dispatch(changeFilter(e.target.value));
      }}
    />
  );
};
