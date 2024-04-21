import { Grid, GridItem, Text, Todo } from 'components';
import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.items);
  return (
    <>
      <Text textAlign="center">We did not find any todo😯</Text>
      <Grid>
        {todos.map((todo, ind) => (
          <GridItem key={todo.id}>
            <Todo text={todo.text} number={ind + 1} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
