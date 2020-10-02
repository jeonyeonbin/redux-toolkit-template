import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { removeTodos, addTodos, TodoState } from "$Root/ducks/todos";
import { RootState } from "$Root/ducks";

function useTodos() {
  const dispatch = useDispatch();

  const todos = useSelector<RootState>(
    (state: RootState) => state.todos
  ) as TodoState[];
  const handleClickRemove = useCallback(
    (id: number) => (event: React.SyntheticEvent<HTMLButtonElement>) =>
      dispatch(removeTodos({ id })),
    [dispatch]
  );
  const addTodoItem = useCallback(
    (text: string) => dispatch(addTodos({ text })),
    [dispatch]
  );
  return {
    handleClickRemove,
    addTodoItem,
    todos,
  };
}

export default useTodos;
