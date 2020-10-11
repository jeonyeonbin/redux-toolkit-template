import React from 'react';
import useTodos from '$Root/hooks/useTodos';
import TodoInput from '$Components/TodoInput';
import TodoItem from '$Components/TodoItem';

function TodoPage() {
	const { todos } = useTodos();
	return (
		<>
			<TodoInput />
			{todos?.map(({ id, text }, index) => (
				<TodoItem key={index} {...{ id, text }} />
			))}
		</>
	);
}

export default TodoPage;
