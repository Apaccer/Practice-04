import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter } from 'reduxTodo/filterSlice';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos.items);
  const filterValue = useSelector(selectFilter);
  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filterValue.toLowerCase()),
  );
  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {filteredTodos.map((todo, ind) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} number={ind + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
