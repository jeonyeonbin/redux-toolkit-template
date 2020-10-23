import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '$Root/ducks';
import { addTodos, removeTodos, TodoState } from '$Root/ducks/todos';

function useTodos() {
	const dispatch = useDispatch();

	const todos = useSelector<RootState>((state: RootState) => state.todos) as TodoState[];
	const handleClickRemove = useCallback(
		(id: number) => (event: React.SyntheticEvent<HTMLButtonElement>) => {
			event.preventDefault();
			event.stopPropagation();
			dispatch(removeTodos({ id }));
		},
		[dispatch]
	);
	const addTodoItem = useCallback((text: string) => dispatch(addTodos({ text })), [dispatch]);
	return {
		handleClickRemove,
		addTodoItem,
		todos,
	};
}

export default useTodos;
